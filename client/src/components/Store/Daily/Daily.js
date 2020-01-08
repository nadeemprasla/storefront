import React from "react";
import { useFormik } from "formik";
import "./styles.css";
import CashReceived from "./cashReceived";

export const Daily = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: values => {
    //   console.log(JSON.stringify(values, null, 2));
      console.log(values);
    }
  });
  return (
    <form className="dailyForm" onSubmit={formik.handleSubmit}>
      <CashReceived formik={formik}/>
      


      <button className="dailyForm" type="submit">
        Submit
      </button>
    </form>
  );
};
