import Image from "next/image";
import headerBg from "public/assets/images/background/header-bg.png";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { Cookies } from "react-cookie";
import TitleLogin from "./title";
import { Formik, Form, Field, validateYupSchema, useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface RegisterFormValues {
  userName: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  userName: Yup.number()
    // .min(1000 * 1000 * 1000, "شماره همراه را کوتاه وارد کردید")
    // .max(1000 * 1000 * 1000 * 10, " شماره همراه نباید بیشتر از 11 رقم باشد")
    .required("لطفا شماره همراه را وارد نمایید"),
  password: Yup.string()
    .min(2, "طول پسورد حداقل 2 کارکتر است")
    .max(10, "حداکثر طول پسورد 10 کارکتر می‌باشد")
    .required("پسورد را صحیح وارد کنید"),
});

const Login = () => {
  const { push } = useRouter();
  const cookies = new Cookies();
  const initialValues: RegisterFormValues = {
    userName: "",
    password: "",
  };

  const sendDataUserLogin = async (data: any) => {
    const res = await axios.post(
      "http://188.121.102.86:8081/api/user/login",
      data
    );
    return res;
  };

  return (
    <div
      id="sec1"
      className="w-full flex items-center justify-center relative flex-col h-screen"
    >
      <div className="w-full z-0 	bg-cover">
        <Image
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          src={headerBg}
          alt="image"
        />
      </div>
      <div className="container flex flex-wrap flex-row  justify-center items-center mx-auto  z-10 absolute">
        <div className="px-4 flex-1 flex-col">
          <TitleLogin />
          {/* start form */}
          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              const { userName, password } = values;
              sendDataUserLogin({
                password,
                userName: `${userName}`,
              })
                .then((res) => {
                  cookies.set("token", res.data);
                  push("/UserDashboard");
                  toast("با موفقیت به پنل حود وارد شدید");
                })
                .catch(() => {
                  toast(" ورود شما نا موفق");
                });
            }}
          >
            {({ errors, touched, handleChange, handleBlur }) => (
              <Form className=" flex  flex-col items-center   mx-auto justify-center">
                <div className="hero">
                  <div className="hero-content flex-col lg:flex-row-reverse md:w-1/2 w-full ">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 bg-opacity-40">
                      <div className="card-body">
                        <div className="form-control">
                          <label htmlFor="phoneNumber" className="label">
                            <span className="label-text">تلفن همراه</span>
                          </label>
                          <Field
                            type="number"
                            placeholder="تلفن همراه..."
                            className="input input-bordered"
                            name="userName"
                            id="phoneNumber"
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          <div className="text-red-800">
                            {touched.userName && errors.userName}
                          </div>
                        </div>
                        <div className="form-control">
                          <label htmlFor="password" className="label">
                            <span className="label-text">رمز عبور</span>
                          </label>
                          <Field
                            type="password"
                            placeholder="رمز عبور..."
                            className="input input-bordered"
                            name="password"
                            id="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          <div className="text-red-800">
                            {touched.password && errors.password}
                          </div>
                          <label className="label">
                            <a
                              href="#"
                              className="label-text-alt link link-hover"
                            >
                              {/* Forgot password? */}
                            </a>
                          </label>
                        </div>
                        <div className="form-control mt-6">
                          <button className="btn btn-primary" type="submit">
                            ورود
                          </button>
                        </div>
                        <div className="flex flex-row justify-between">
                          {/* <div className="form-control mt-2">
                            <Link href="/Register">
                              <p className="text-red-800">ثبت نام کنید!</p>
                            </Link>
                          </div> */}
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
          {/* end Form */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
