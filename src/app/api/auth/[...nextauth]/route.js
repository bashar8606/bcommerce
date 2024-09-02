import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';
import { OTP_VERIFY, REFRESH_TOKEN } from "@/constants/apiRoutes";

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
                phone_number: { label: "Phone Number", type: "text" },
                otp: { label: "OTP", type: "text" },
            },
            async authorize(credentials, req) {
                try {
                    const verifyOtpResponse = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}${OTP_VERIFY}`, {
                        country_code: credentials.country_code,
                        phone_number: credentials.phone_number,
                        otp: credentials.otp
                    }, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
                        }
                    });

                    if (verifyOtpResponse.status === 200) {
                        const { user, tokens } = verifyOtpResponse.data;
                        return {
                            id: user._id,
                            number: user.full_number,
                            color_code: user.color_code,
                            accessToken: tokens.access.token,
                            accessTokenExpires: new Date(tokens.access.expires).getTime(),
                            refreshToken: tokens.refresh.token,
                            first_name: user.first_name,
                            last_name: user.last_name,
                            email: user.email,
                            image: user.image_url,
                            is_profile_updated: user.is_profile_updated
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
        async jwt({ token,account, user }) {
            if (user) {
                token.id = user.id;
                token.number = user.number;
                token.color_code = user.color_code;
                token.accessToken = user.accessToken;
                token.accessTokenExpires = user.accessTokenExpires;
                token.refreshToken = user.refreshToken;
                token.first_name = user.first_name;
                token.last_name = user.last_name;
                token.email = user.email;
                token.image = user.image;
                token.is_profile_updated = user.is_profile_updated;
            }

            if (account?.provider === "google") {
                token.accessToken = account.access_token;
                token.accessTokenExpires = account.expires_at * 1000; // Google token expiry is in seconds
            }

            // Refresh token if the access token has expired
            if (Date.now() > token.accessTokenExpires) {
                try {
                    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}${REFRESH_TOKEN}`, {
                        refresh_token: token.refreshToken
                    });

                    token.accessToken = response.data.access_token;
                    token.accessTokenExpires = Date.now() + response.data.expires_in * 1000;
                    token.refreshToken = response.data.refresh_token ?? token.refreshToken; // Refresh token might be rotated
                } catch (error) {
                    console.error('Error refreshing token:', error);
                    return null;
                }
            }

            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.number = token.number;
            session.user.color_code = token.color_code;
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            session.user.first_name = token.first_name;
            session.user.last_name = token.last_name;
            session.user.email = token.email;
            session.user.image = token.image;
            session.user.is_profile_updated = token.is_profile_updated;
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
