import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';
import { OTP_VERIFY } from "@/constants/apiRoutes";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            id: 'credentials',
            name: 'credentials',
            credentials: {
                country_code: { label: "Country Code", type: "text" },
                phone: { label: "Phone Number", type: "text" },
                otp: { label: "OTP", type: "text" },
            },
            async authorize(credentials, req) {
                try {
                    const verifyOtpResponse = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}${OTP_VERIFY}`, {
                        // country_code: credentials.country_code,
                        phone: credentials.phone_number,
                        otp: credentials.otp
                    });
                   

                    if (verifyOtpResponse.status === 200) {
                        const { token, first_name, last_name, image, phone, email } = verifyOtpResponse.data?.data;
                        return {
                            token,
                            phone,
                            first_name,
                            last_name,
                            image,
                            email: email || '',
                        };
                    } else {
                        throw new Error('Invalid OTP');
                    }
                } catch (error) {
                    console.error('Error verifying OTP:', error);
                    throw new Error('Invalid OTP');
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.token;
                token.first_name = user.first_name;
                token.last_name = user.last_name;
                token.phone = user.phone;
                token.image = user.image;
                token.email = user.email;
            }

            return token;
        },
        async session({ session, token }) {
            session.user.first_name = token.first_name;
            session.user.last_name = token.last_name;
            session.user.phone = token.phone;
            session.user.image = token.image;
            session.accessToken = token.accessToken;
            session.user.email = token.email;
            return session;
        }
    },
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
