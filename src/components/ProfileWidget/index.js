"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as Yup from "yup";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import AppBack from "../AppBack";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { userDetail } from "@/recoil/atoms";
import { Field, Form, Formik } from "formik";

export default function ProfileWidget() {
  const [date, setDate] = useState();
  const [userDetails, setUserDetails] = useRecoilState(userDetail);

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    gender: Yup.string().required("Gender is required"),
    date_of_birth: Yup.date().nullable().required("Date of birth is required"),
  });

  // Formik initial values
  const initialValues = {
    first_name: userDetails?.first_name || "",
    last_name: userDetails?.last_name || "",
    gender: "",
    date_of_birth: null,
  };

  return (
    <>
      {/* <AppBack /> */}

      <div className="md:p-6 md:bg-white md:rounded md:border md:border-stone-200 mb-4">
        <h3 className=" text-black text-lg font-semibold mb-5 leading-relaxed">
          Account Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 xl:gap-8">
          <div className="">
            <div className="flex justify-between items-end mb-2">
              <Label className="mb-0" htmlFor="email">
                Email address
              </Label>
              {/* <button className=" text-teal-500 text-sm font-semibold underline tracking-wide">
                Edit
              </button> */}
            </div>
            <Input
              type="email"
              id="email"
              value={`${userDetails?.email}`}
              placeholder="Enter here"
              disabled={userDetails?.email}
            />
          </div>

          <div className="">
            <div className="flex justify-between items-end mb-2">
              <Label className="mb-0" htmlFor="phone">
                Mobile
              </Label>
              {/* <button className=" text-teal-500 text-sm font-semibold underline tracking-wide">
                Edit
              </button> */}
            </div>
            <Input type="number" id="phone" value="" placeholder="Enter here" />
          </div>
        </div>
      </div>

      <div className="md:p-6 md:bg-white md:rounded md:border md:border-stone-200 md:mb-4">
        <h3 className=" text-black text-lg font-semibold mb-5 leading-relaxed">
          My profile
        </h3>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={(values) => {
            console.log("Form values:", values);
            // Handle form submission
          }}
        >
          {({
            values,
            handleChange,
            setFieldValue,
            errors,
            touched,
            isValid,
            dirty,
          }) => (
            <Form>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-9">
                <div className="">
                  <Label htmlFor="first_name">First name</Label>
                  <Field
                    as={Input}
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="Enter here"
                    className={
                      errors.first_name && touched.first_name
                        ? "border-red-500"
                        : ""
                    }
                  />
                  {errors.first_name && touched.first_name ? (
                    <div className="text-red-500 text-sm">
                      {errors.first_name}
                    </div>
                  ) : null}
                </div>

                <div className="">
                  <Label htmlFor="last_name">Last name</Label>
                  <Field
                    as={Input}
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Enter here"
                    className={
                      errors.last_name && touched.last_name
                        ? "border-red-500"
                        : ""
                    }
                  />
                  {errors.last_name && touched.last_name ? (
                    <div className="text-red-500 text-sm">
                      {errors.last_name}
                    </div>
                  ) : null}
                </div>

                <div className="">
                  <Label htmlFor="gender">Gender</Label>
                  <Field
                    as={Input}
                    type="text"
                    id="gender"
                    name="gender"
                    placeholder="Enter here"
                    className={
                      errors.gender && touched.gender ? "border-red-500" : ""
                    }
                  />
                  {errors.gender && touched.gender ? (
                    <div className="text-red-500 text-sm">{errors.gender}</div>
                  ) : null}
                </div>

                <div className="">
                  <Label htmlFor="date_of_birth">Date of Birth</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={values.date_of_birth}
                        onSelect={(selectedDate) => {
                          setFieldValue("date_of_birth", selectedDate);
                          setDate(selectedDate);
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.date_of_birth && touched.date_of_birth ? (
                    <div className="text-red-500 text-sm">
                      {errors.date_of_birth}
                    </div>
                  ) : null}
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg w-48"
                disabled={!dirty} 
              >
                Update
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
