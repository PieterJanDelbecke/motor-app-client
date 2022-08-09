import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, gql, useMutation } from "@apollo/client";
import { Formik, useFormik, Field } from "formik";
import * as Yup from "yup"

import { GET_CUSTOMERS } from "../GraphQL/queries";
import { CREATE_CUSTOMER } from "../GraphQL/mutations";


const SignUp = () => {
  let navigate = useNavigate()
  const [createCustomer, { data: mutationData, loading: mutationLoading, error: mutationError}] = useMutation(CREATE_CUSTOMER)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
        email: Yup.string().email("Invalid email address").required("required"),
        password: Yup.string().max(20,"Must be 20 characters or less").required("required"),
        firstName: Yup.string().max(15, "Must be 15 characters or less").required("required"),
        lastName: Yup.string().max(15,"Must be 15 characters of less").required("required"),
        phoneNumber: Yup.string().min(10,"must be 10 characters").max(10, "must be 10 characters").required("required")
    }),
    onSubmit: async (values) => {
      console.log(values)
      await createCustomer({
        variables:{
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber
        }
      })
      if(mutationError){
        console.log(mutationError)
      }
      console.log(mutationData)
      navigate("/")
    },
  });
  return (
    <>
      <Link to="/">Home</Link>
      <h1>Sign Up Page</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <p> {formik.errors.email}</p>: null}
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password? <p>{formik.errors.password}</p>: null}
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName? <p>{formik.errors.firstName}</p>: null}
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p>: null}
        <input
          type="text"
          name="phoneNumber"
          id="phoneName"
          placeholder="Phone Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? <p>{formik.errors.phoneNumber}</p>: null}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUp;
