import { Link } from "react-router-dom";
import { Formik, useFormik, Field } from "formik";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      console.log(values);
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
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          name="phoneNumber"
          id="phoneName"
          placeholder="Phone Name"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUp;
