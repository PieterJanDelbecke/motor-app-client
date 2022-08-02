import { Link } from "react-router-dom";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";

const CustomerInfo = () => {
  const formik = useFormik({
    initialValues: {
      streetNumber: 0,
      streetName: "",
      suburb: "",
      postcode: 0,
      state: "",
    },
    validationSchema: Yup.object({
      streetNumber: Yup.number("Must be a number").required("required"),
      streetName: Yup.string()
        .min(3, "has to be more than 3 characters")
        .required("required"),
      suburb: Yup.string()
        .min(5, "has to be minimu 5 characters")
        .required("required"),
      postcode: Yup.number().required("required"),
    }),
      state: Yup.string().required("required"),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Link to="/">Home</Link>
      <h1>Customer Info Page</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="streetNumber"
          id="streetNumber"
          placeholder="streetNumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.streetNumber}
        />
        { formik.touched.streetNumber && formik.errors.streetNumber ? <p>{formik.errors.streetNumber}</p> : null}
        <input
          type="text"
          name="streetName"
          id="streetName"
          placeholder="streetName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.streetName}
        />
        { formik.touched.streetName && formik.errors.streetName ? <p>{formik.errors.streetName}</p> : null }
        <input
          type="text"
          name="suburb"
          id="suburb"
          placeholder="suburb"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.suburb}
        />
        {formik.touched.suburb && formik.errors.suburb ? <p>{formik.errors.suburb}</p> : null }
        <input
          type="text"
          name="postcode"
          id="postcode"
          placeholder="postcode"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.postcode}
        />
        {formik.touched.postcode && formik.errors.postcode ? <p>{formik.errors.postcode}</p> : null}
        <input
          type="text"
          name="state"
          id="state"
          placeholder="state"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.state}
        />
        {formik.touched.state && formik.errors.state ? <p>{formik.errors.state}</p> : null }
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CustomerInfo;
