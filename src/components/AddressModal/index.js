// import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddressModal } from "./useAddressModal";
import { useState, useEffect } from "react";
import { useFormik } from "formik";

// Yup validation schema
const AddressSchema = Yup.object().shape({
  name: Yup.string().required("First Name is required"),
  // email: Yup.string().required("E-mail is required"),
  phone_no: Yup.string().required("Mobile number is required"),
  country_id: Yup.string().required("Country is required"),
  state_id: Yup.string().required("State is required"),
  city_id: Yup.string().required("City is required"),
  // postal_code: Yup.string().required("Post Code is required"),
});

export function AddressModal({ data, mode }) {
  // const [isOpen, setIsOpen] = useState(false);
  const [countryId, setCountryId] = useState(data?.address_ids?.country_id || null);
  const [stateId, setStateId] = useState(data?.address_ids?.state_id || null);
  
  const { countries, states, cities, handleAddress, isOpen, setIsOpen } = useAddressModal(countryId, stateId);

  const formik = useFormik({
    initialValues: {
      name: data?.name || "",
      email: data?.email || "",
      phone_no: data?.phone_no || "",
      country_id: data?.address_ids?.country_id || "",
      state_id: data?.address_ids?.state_id || "",
      city_id: data?.address_ids?.city_id || "",
      postal_code: data?.postal_code || "",
    },
    validationSchema: AddressSchema,
    onSubmit: (values) => {
      handleAddress(values, mode);
    },
  });

  useEffect(() => {
    if (data?.address_ids?.country_id) {
      setCountryId(data.address_ids.country_id);
    }
    if (data?.address_ids?.state_id) {
      setStateId(data.address_ids.state_id);
    }
  }, [data]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          formik.resetForm(); 
        }
      }}
    >
      <DialogTrigger asChild>
        <button className="btn btn-outline-secondary btn-sm">
          {mode === "edit" ? "Edit" : "Add Address"}
        </button>
      </DialogTrigger>
      <DialogContent className="h-screen md:h-auto sm:max-w-[640px] p-10 rounded-1">
        <DialogHeader>
          <h3 className="text-black text-2xl font-semibold">Add new address</h3>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div>
              <Label htmlFor="name">First Name*</Label>
              <Input
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="col-span-3"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500">{formik.errors.name}</div>
              ) : null}
            </div>
            <div>
              <Label htmlFor="lastName">Email*</Label>
              <Input
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="col-span-3"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="col-span-2">
              <Label htmlFor="mobile">Mobile number*</Label>
              <Input
                id="mobile"
                name="phone_no"
                value={formik.values.phone_no}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="col-span-3"
              />
              {formik.touched.phone_no && formik.errors.phone_no ? (
                <div className="text-red-500">{formik.errors.phone_no}</div>
              ) : null}
            </div>

            {/* Country Select */}
            <div>
              <Label htmlFor="country">Country*</Label>
              <select
                id="country"
                name="country_id"
                value={formik.values.country_id || ""}
                onChange={(e) => {
                  formik.handleChange(e);
                  setCountryId(e.target.value); // Load states based on selected country
                  formik.setFieldValue('stateId', ''); // Reset state and city when country changes
                  formik.setFieldValue('cityId', '');
                }}
                onBlur={formik.handleBlur}
                className="w-full"
              >
                <option value="">Select Country</option>
                {countries &&countries?.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
              {formik.touched.country_id && formik.errors.country_id ? (
                <div className="text-red-500">{formik.errors.country_id}</div>
              ) : null}
            </div>

            {/* State Select */}
            <div>
              <Label htmlFor="state">State*</Label>
              <select
                id="state"
                name="state_id"
                value={formik.values.state_id}
                onChange={(e) => {
                  formik.handleChange(e);
                  setStateId(e.target.value); // Load cities based on selected state
                  formik.setFieldValue('cityId', ''); // Reset city when state changes
                }}
                onBlur={formik.handleBlur}
                className="w-full"
                disabled={!countryId}
              >
                <option value="">Select State</option>
                {states?.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
              {formik.touched.state_id && formik.errors.state_id ? (
                <div className="text-red-500">{formik.errors.state_id}</div>
              ) : null}
            </div>

            {/* City Select */}
            <div>
              <Label htmlFor="city">City*</Label>
              <select
                id="city"
                name="city_id"
                value={formik.values.city_id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full"
                disabled={!stateId}
              >
                <option value="">Select City</option>
                {cities?.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
              {formik.touched.city_id && formik.errors.city_id ? (
                <div className="text-red-500">{formik.errors.city_id}</div>
              ) : null}
            </div>

            {/* Postal Code */}
            <div>
              <Label htmlFor="lastName">Postal Code*</Label>
              <Input
                id="postal_code"
                name="postal_code"
                value={formik.values.postal_code}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="col-span-3"
              />
              {formik.touched.postal_code && formik.errors.postal_code ? (
                <div className="text-red-500">{formik.errors.postal_code}</div>
              ) : null}
            </div>
          </div>

          <div className="">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
            >
              {mode === "edit" ? "Edit" : "Add Address"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}