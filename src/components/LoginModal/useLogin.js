"use client"

import { useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { OTP_SENT } from "@/constants/apiRoutes";


export const useLogin = ({ }) => {
    const router = useRouter();
    const session = useSession();



    const [isOtpSent, setIsOtpSent] = useState(false);
    const [inValid, setInvalid] = useState(false);
    const [expired, setExpired] = useState(false);

   

    const validationSchema = Yup.object().shape({
        countryCode: Yup.string().required("Country code is required"),
        phoneNumber: Yup.string()
        .required('Phone number is required')
        .min(8, 'Phone number must be at least 8 characters')
        .test('is-valid-phone', 'Phone number is not valid', (value) => {
          if (!value) return false;
          const phoneRegex = /^\+?[1-9]\d{1,14}$/; 
          return phoneRegex.test(value);
        }),
        otp: Yup.string().when('isOtpSent', {
            is: true,
            then: Yup.string().required("OTP is required").min(6, "OTP must be 6 digits")
        }),
    });

    const sendOtp = async (values) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}${OTP_SENT}`, {
                country_code: values.countryCode,
                phone: values.phoneNumber,
            });

            console.log(response.data,"response of send");
            // && response.data.resend_count>0

            if (response.data.success === true ) {
                setIsOtpSent(true);
            } else if(response.data.resend_count===0) {
                setExpired(true)
            } else {
                alert('Error sending OTP');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error sending OTP');
        }
    };

    const handleSubmit = async (values) => {
        try {
            const result = await signIn('credentials', {
                redirect: false,
                // country_code: values.countryCode,
                phone: "+966111111111",
                // phone: values.phoneNumber,
                otp: values.otp,
            });

            if (result.error) {
                setInvalid(true);
            } else {
                console.log('successs during sign-in:', result);
                // window.location.href = '/chat'
                router.push('/');
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
            alert('Error during sign-in');
        }
    };

    return {
        sendOtp,
        handleSubmit,
        signOut,
        isOtpSent,
        session,
        validationSchema,
        inValid, 
        setIsOtpSent,
        expired
    };
};
