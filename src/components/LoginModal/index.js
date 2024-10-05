import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "../Link";
import LoginWidget from "@/widgets/LoginWidget";
import { useLogin } from "./useLogin";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useState } from "react";
import Image from "@/components/Image";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useTranslations } from "next-intl";
import useGetDeviceType from "@/hooks/useGetDeviceType";

export function LoginModal() {
  const t = useTranslations("Index");
  const { width } = useGetDeviceType();
  const {
    sendOtp,
    handleSubmit,
    signOut,
    isOtpSent,
    session,
    validationSchema,
    inValid,
    setIsOpen,setIsPhone,
    isPhone,
    isOpen,
    expired,
    setIsOtpSent,
  } = useLogin({});
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };



  const [phoneValue, setPhoneValue] = useState("");

  const handlePhoneChange = (value, setFieldValue) => {
    setPhoneValue(value);

    if (value) {
      const phoneNumberObj = parsePhoneNumberFromString(value);
      if (phoneNumberObj) {
        setFieldValue("countryCode", `+${phoneNumberObj.countryCallingCode}`);
        setFieldValue("phoneNumber", phoneNumberObj.nationalNumber);
      }
    } else {
      setFieldValue("countryCode", "");
      setFieldValue("phoneNumber", "");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="btn btn-grad btn-lg" onClick={() => setIsOpen(true)}>
          {t("LOGIN")}
        </button>
      </DialogTrigger>
      <DialogContent className="h-screen md:h-auto sm:max-w-[410px] p-0  rounded-1">
        <div className=" ">
          {session?.status === "authenticated" ? (
            <button onClick={signOut}>Logout</button>
          ) : (
            <Formik
              initialValues={{
                countryCode: "+91",
                phoneNumber: "",
                otp: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                if (!isOtpSent) {
                  sendOtp(values);
                } else {
                  handleSubmit(values);
                }
              }}
            >
              {({
                values,
                handleChange,
                handleSubmit,
                setFieldValue,
                errors,
                touched,
              }) => (
                <Form onSubmit={handleSubmit}>
                  {width < 992 && (
                    <div className="px-4 py-[10px] lg:p-10 bg-white border-b border-black border-opacity-5">
                      <div className="aspect-[126/52] w-[84px] md:w-[126px] relative me-5 lg:hidden">
                        <Image
                          src={"/images/logo.png"}
                          fill
                          className="object-fit-cover"
                          alt="logo"
                        />
                      </div>
                    </div>
                  )}

                  <div className="px-4 lg:p-10 pt-5">
                    {!isOtpSent ? (
                      <div className="">
                        <div className="text-left mb-7">
                          <p className=" text-black text-sm font-medium ">
                            Welcome back!
                          </p>
                          <h3 className=" text-black text-2xl font-semibold ">
                            Sign in to your account
                          </h3>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <div>
                              <div className=" p-0.5 bg-gray-200 rounded-3xl justify-start items-start inline-flex mb-7">
                                <div
                                  className={`px-6 py-1.5 cursor-pointer rounded-3xl  text-xs font-medium ${
                                    isPhone
                                      ? "bg-black text-white"
                                      : " bg-gray-200  text-black"
                                  }`}
                                  onClick={() => setIsPhone(true)}
                                >
                                  Phone{" "}
                                </div>
                                <div
                                  className={`px-6 py-1.5 cursor-pointer rounded-3xl  text-xs font-medium ${
                                    isPhone
                                      ? "bg-gray-200  text-black"
                                      : " bg-black text-white"
                                  }`}
                                  onClick={() => setIsPhone(false)}
                                >
                                  E mail
                                </div>
                              </div>
                            </div>
                            {isPhone ? (
                              <>
                                <Label htmlFor="name">Phone</Label>
                                <PhoneInput
                                  international
                                  countryCallingCodeEditable={false}
                                  defaultCountry="SA"
                                  value={phoneValue}
                                  onChange={(value) =>
                                    handlePhoneChange(value, setFieldValue)
                                  }
                                  className={`mt-1 block w-full p-3 rounded-md border ${
                                    errors.phoneNumber && touched.phoneNumber
                                      ? "border-red-500"
                                      : "border-gray-300"
                                  }`}
                                />
                              </>
                            ) : (
                              <>
                                <Label htmlFor="id">E-mail</Label>
                                {/* <Input id="username" defaultValue="" /> */}
                                <Input id="email" name="email" value={values.email} onChange={handleChange} className={`mt-1 block w-full p-3 rounded-md border ${errors.email && touched.email ? "border-red-500" : "border-gray-300"}`} />
                              <ErrorMessage name="email" component="div" className="text-red-600 text-xs" />
                              </>
                            )}

                            {expired && (
                              <div className="text-red-600 text-xs mt-2">
                                Retry attempts over. Try after 1 hour
                              </div>
                            )}
                            {errors.phoneNumber && touched.phoneNumber ? (
                              <div className="text-red-600 text-xs mt-2">
                                {errors.phoneNumber}
                              </div>
                            ) : null}

                            {/* <ErrorMessage name="countryCode" component="div" className="text-red-600 text-xs" /> */}
                          </div>

                          <button
                            type="submit"
                            className="btn btn-lg btn-primary w-full"
                          >
                            Send OTP
                          </button>
                          <button
                            onClick={handleGoogleSignIn}
                            className="btn btn-lg border w-full flex justify-center items-center"
                          >
                            <span className="me-2 text-xl">
                              <FcGoogle />
                            </span>
                            Sign in with Google
                          </button>
                          <div className="text-center">
                            <p className="text-xs mt-5 text-[#565656]">
                              By continuing, you agree to IKXXA{" "}
                              <Link href="/">Terms of Service</Link> and{" "}
                              <Link href="/">Privacy Policy</Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="">
                        <div className="mb-8">
                          <h3 className=" text-black text-2xl font-semibold mb-1">
                            Verify OTP
                          </h3>
                          <p className="text-zinc-500 text-base">
                            Code has been sent to {values?.countryCode}&nbsp;
                            {values?.phoneNumber} <span className="text-teal-500 text-base font-medium underline ">change</span>
                          </p>
                        </div>
                        <div className="space-y-4">
                          <div  className="mb-5">
                          <InputOTP
                            maxLength={6}
                            value={values.otp}
                            onChange={(value) =>
                              handleChange({ target: { name: "otp", value } })
                            }
                          >
                            <InputOTPGroup className="justify-between gap-2 mb-0">
                              {[...Array(6)].map((_, index) => (
                                <InputOTPSlot
                                  className="text-2xl h-[50px]"
                                  key={index}
                                  index={index}
                                />
                              ))}
                            </InputOTPGroup>
                          </InputOTP>
                          <ErrorMessage
                            name="otp"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                          {inValid && (
                            <p className="text-red-700 text-xs">Invalid OTP</p>
                          )}
                          </div>

                          <button
                            type="submit"
                            className="btn btn-lg btn-primary w-full"
                          >
                            Verify OTP
                          </button>
                          <div className="text-center">
                            <p className="text-xs mt-5 text-[#565656]">
                              Didn&apos;t get OTP Code{" "}
                              <button onClick={() => setIsOtpSent(false)}>
                                Resend OTP
                              </button>{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          )}
          {/* 
          <div className="grid gap-4 pb-4">
            <div className="">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className=" gap-4">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </div> */}

          {/* <div className=" ">
            <button className="btn btn-primary btn-lg w-full mb-4 ">
              Login
            </button>
            <button className="btn btn-primary btn-lg w-full mb-4 ">
              {" "}
              Log in with Google{" "}
            </button>

            <p className=" text-center text-black text-sm font-medium">
              Don’t have an account?{" "}
              <Link className="text-teal-500 text-sm font-semibold  ">
                Sign up
              </Link>{" "}
            </p>
          </div> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
