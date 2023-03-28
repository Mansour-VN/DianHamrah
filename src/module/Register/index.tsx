import Image from "next/image";
import headerBg from "public/assets/images/background/header-bg.png";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { Formik, Form, Field, validateYupSchema, useFormik } from "formik";
import * as Yup from "yup";
import { Cookies } from "react-cookie";

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  password: string;
  repeatPassword: string;
  phoneNumber: string;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "حداقل طول نام  3 کارکتر باید باشد")
    .max(15, "طول نام شما بیشتر از حد مجاز است")
    .required("لطفا نام  را وارد کنید"),
  lastName: Yup.string()
    .min(3, "حداقل طول نام خانوادگی 3 کارکتر می‌باشد")
    .max(15, "نام خانوادگی شما بیش از حد مجاز است")
    .required("لطفا نام خانوادگی خودرا وارد کنید "),
  password: Yup.string()
    .min(2, "طول پسورد حداقل 2 کارکتر است")
    .max(10, "حداکثر طول پسورد 10 کارکتر می‌باشد")
    .required("پسورد را صحیح وارد کنید"),
  repeatPassword: Yup.string()
    .min(2, "طول پسورد حداقل 2 کارکتر است")
    .max(10, "حداکثر طول پسورد 10 کارکتر می‌باشد")
    .required("پسورد را صحیح وارد کنید"),
  phoneNumber: Yup.string()
  .required("لطفا شماره همراه خود را وارد نمایید")
  .min(10, "شماره وارد شده صحیح نمی‌باشد")
  .max(10, "شماره وارد شده صحیح نمی‌باشد")
})
;

const RegisterPage = () => {
  const { push } = useRouter();
  const cookies = new Cookies();

  const sendDataUserRegister = async (data: any) => {
    const res = await axios.post(
      "http://188.121.102.86:8000/api/user/signUp",
      data
    );
    return res;
  };

  const sendAPIform = async (e: any) => {
    e.preventDefault();
    const tempoObj = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      password: e.target.password.value,
      phoneNumber: e.target.phoneNumber.value,
    };

    await sendDataUserRegister(tempoObj)
      .then((res) => push("/Login"))
      .catch(() => console.log("error Register"));
  };
  const initialValues: RegisterFormValues = {
    phoneNumber: "",
    password: "",
    repeatPassword: "",
    firstName: "",
    lastName: "",
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
      <div className="container flex flex-wrap  flex-row  justify-center items-center mx-auto  z-10 absolute">
        <div className="px-4 md:w-full flex flex-col md:justify-between md:flex-row md:items-center">
          <div>
            <p className="text-black text-4xl font-extrabold pb-4">سلام!</p>
            <h2 className="text-xl font-extrabold text-black pb-6 text-justify">
              ‌لطفا برای ثبت نام فرم را با دقت تکمیل کنید
            </h2>
          </div>

          {/* start form */}

          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              const {
                phoneNumber,
                password,
                repeatPassword,
                firstName,
                lastName,
              } = values;
              sendDataUserRegister({
                firstName,
                lastName,
                userName: `0${phoneNumber}`,
                password,
                repeatPassword,
                phoneNumber,
              })
                .then((res) => {
                  cookies.set("token", res.data);
                  push("/UserDashboard");
                })
                .catch(() => console.log("error Login...."));
            }}
          >
            {({ errors, touched }) => (
              <Form
                onSubmit={sendAPIform}
                className=" flex  flex-col items-center md:w-1/2 justify-center "
              >
                <div className="hero">
                  <div className="hero-content p-0 flex-col lg:flex-row-reverse w-full">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 bg-opacity-40">
                      <div className="card-body">
                        <div className="form-control h-[100px]">
                          <label className="label">
                            <span className="label-text">نام</span>
                          </label>
                          <Field
                            type="text"
                            name="firstName"
                            placeholder="نام..."
                            className="input input-bordered "
                          />
                          {errors.firstName || touched.firstName ? (
                            <div className="h-6 ">{errors.firstName}</div>
                          ) : (
                            <div className="h-6"></div>
                          )}
                        </div>
                        <div className="form-control h-[100px]">
                          <label className="label">
                            <span className="label-text">نام خانوادگی</span>
                          </label>
                          <Field
                            type="text"
                            name="lastName"
                            placeholder="نام خانوادگی..."
                            className="input input-bordered"
                          />
                          {errors.lastName || touched.lastName ? (
                            <div>{errors.lastName}</div>
                          ) : null}
                        </div>
                        <div className="form-control h-[100px]">
                          <label className="label">
                            <span className="label-text">رمز عبور</span>
                          </label>
                          <Field
                            type="password"
                            name="password"
                            placeholder="رمز عبور..."
                            className="input input-bordered"
                          />
                          {errors.password || touched.password ? (
                            <div>{errors.password}</div>
                          ) : null}
                        </div>
                        <div className="form-control h-[100px]">
                          <label className="label">
                            <span className="label-text">تکرار رمز عبور</span>
                          </label>
                          <Field
                            type="password"
                            name="repeatPassword"
                            placeholder="تکرار رمز عبور..."
                            className="input input-bordered"
                          />
                          {errors.password || touched.password ? (
                            <div>{errors.password}</div>
                          ) : null}
                        </div>
                        <div className="form-control h-[100px]">
                          <label className="label">
                            <span className="label-text">
                              شماره همراه خود را وارد کنید
                            </span>
                          </label>
                          <Field
                            type="number"
                            name="phoneNumber"
                            placeholder="شماره همراه..."
                            className="input input-bordered"
                          />
                          {errors.phoneNumber || touched.phoneNumber ? (
                            <div>{errors.phoneNumber}</div>
                          ) : null}
                        </div>
                        <div className="form-control mt-6">
                          <button type="submit" className="btn btn-primary">
                            ثبت نام
                          </button>
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="form-control mt-2">
                            <Link href="/Login">
                              <p className="text-red-800"> صفحه ورود </p>
                            </Link>
                          </div>
                          <div className="form-control mt-2">
                            <Link href="/">
                              <p className="text-blue-800">صفحه اصلی</p>
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
    </div>
  );
};

export default RegisterPage;
