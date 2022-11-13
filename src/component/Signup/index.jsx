import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";

function SignUp(props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      email: Yup.string()
        .required("Required")
        .email("Please enter a valid email address"),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),
      confirmedPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
      phone: Yup.string()
        .required("Required")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: (value) => {
      console.log(value);
      localStorage.setItem(`${value.email}`, `${value.password}`);

      toast.success("🦄 Successful!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
  });

  return (
    <div className=" bg-slate-50 w-[620px]  rounded-md shadow-lg shadow-slate-400 my-12 ">
      <h1 className="text-4xl text-blue-500 text-center py-8">Sign Up</h1>

      <section>
        <form className="flex flex-col mx-12" onSubmit={formik.handleSubmit}>
          <label className="title-field "> Your name </label>
          <input
            type="text"
            id="name"
            className="input-field"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Enter your name"
          />
          {formik.errors.name && formik.touched.name && (
            <p className="error-message"> {formik.errors.name} </p>
          )}
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
          <label className="title-field "> Confirm Password </label>
          <input
            type="password"
            className="input-field"
            id="confirmedPassword"
            name="confirmedPassword"
            value={formik.values.confirmedPassword}
            onChange={formik.handleChange}
            placeholder="Confirm your password"
          />
          {formik.errors.confirmedPassword &&
            formik.touched.confirmedPassword && (
              <p className="error-message">
                {formik.errors.confirmedPassword}{" "}
              </p>
            )}
          <label className="title-field "> Phone number </label>
          <input
            type="text"
            className="input-field"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeholder="Enter your phone numbers"
          />
          {formik.errors.phone && formik.touched.phone && (
            <p className="error-message"> {formik.errors.phone} </p>
          )}
          <button
            id="button"
            type="submit"
            className="btn-submit text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 my-6"
          >
            Submit
          </button>

          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </form>
      </section>
    </div>
  );
}

SignUp.propTypes = {};

export default SignUp;
