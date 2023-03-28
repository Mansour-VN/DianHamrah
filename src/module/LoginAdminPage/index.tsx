import React from "react";
import axios from "axios";
import Link from "next/link";
import { Formik, Form, Field, validateYupSchema, useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { Cookies } from "react-cookie";

interface RegisterFormValues {
  personalID: string;
  password: string;
}
const SignupSchema = Yup.object().shape({
  personalID: Yup.string()
    .required("شماره پرسنلی خودرا صحیح وارد کنید"),
  password: Yup.string()
    .min(2, " پسورد وارد شده باید بیشتر از 2 کارکتر باشد")
    .max(10, " پسورد نباید بیشتر از 10 کارکتر باشد")
    .required("پسورد خودرا صحیح وارد کنید"),
});
const LoginAdminPage = () => {
  const { push } = useRouter();
  const cookies = new Cookies();

  const initialValues: RegisterFormValues = {
    personalID: "",
    password: "",
  };
  const sendDataUserLogin = async (data: any) => {
    const res = await axios.post("http://188.121.102.86:8000", data);
    return res;
  };
  const sendAPI = async (e: any) => {
    e.preventDefault();
    const tempObj = {
      personalID: e.target.phoneNumber.value,
      password: e.target.password.value,
    };
    await sendDataUserLogin(tempObj)
      .then((res) => {
        cookies.set("token", res.data);
        push("/Admin");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-300 h-screen flex justify-center ">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log("log in onSubmit formik", values);
        }}
      >
          {({ errors, touched }) => (
        <Form className=" flex  flex-col items-center  mx-auto justify-center md:w-1/2 ">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse md:w-1/2 w-full ">
              <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 bg-opacity-40">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        {" "}
                        شماره پرسنلی خود را وارد کنید
                      </span>
                    </label>
                    <Field
                      type="number"
                      placeholder="شماره پرسنلی خود را وارد کنید ..."
                      className="input input-bordered"
                      name="personalId"
                    />
                  </div>
                  {errors.personalID && touched.personalID ? (
                            <div className="h-2 text-red-800 text-sm">{errors.personalID}</div>
                          ) : null}
                  <div className="form-control mt-8">
                    <label className="label">
                      <span className="label-text">رمز عبور</span>
                    </label>
                    <Field
                      type="password"
                      placeholder="رمز عبور..."
                      className="input input-bordered"
                      name="password"
                    />
                  </div>
                  {errors.password && touched.password ? (
                            <div className="h-2 text-red-800 text-sm">{errors.password}</div>
                          ) : null}
                  <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit">
                      <Link href="/Admin">ورود</Link>
                    </button>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="form-control mt-2">
                      <Link href="/">
                        <p className="text-blue-800">بازگشت به سایت</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
          )}

      </Formik>
    </div>
  );
};

export default LoginAdminPage;
