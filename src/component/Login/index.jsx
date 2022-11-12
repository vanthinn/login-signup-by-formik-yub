import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";

function SignUp(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .email("Please enter a valid email address"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <div className=" bg-slate-50 w-[620px]  rounded-md shadow-lg shadow-slate-400 my-12 ">
      <h1 className="text-4xl text-blue-500 text-center py-8">Login</h1>

      <section>
        <form className="flex flex-col mx-12" onSubmit={formik.handleSubmit}>
          <label className="title-field "> Email address </label>
          <input
            type="email"
            className="input-field"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter your email"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="error-message"> {formik.errors.email} </p>
          )}
          <label className="title-field "> Password </label>
          <input
            type="password"
            className="input-field"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter your password"
          />
          {formik.errors.password && formik.touched.password && (
            <p className="error-message"> {formik.errors.password} </p>
          )}
          <button
            id="button"
            type="submit"
            className="btn-submit text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 my-6"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

SignUp.propTypes = {};

export default SignUp;
