import Image from "next/image";
import headerBg from "public/assets/images/background/header-bg.png";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { Formik, Form, Field, validateYupSchema, useFormik } from "formik";
import * as Yup from "yup";
import { Cookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: number;
  nationalCode: number;
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
    .min(2, "طول پسورد حداقل 2 عبارت است ")
    .required("پسورد را صحیح وارد کنید"),
  phoneNumber: Yup.number()
  .min(1000 * 1000 * 1000 ,"شماره همراه را کوتاه وارد کردید")
  .max(1000 * 1000 * 1000 * 10 , " شماره همراه نباید بیشتر از 11 رقم باشد")
  .required("لطفا شماره همراه را وارد نمایید"),
  nationalCode:Yup.number()
  .required("شماره ملی را وارد کنید")
});
const RegisterPage = () => {
  const { push } = useRouter();
  const cookies = new Cookies();
  const notify = () => toast("َثبت نام شما با موفقیت انجام شد");

  const sendDataUserRegister = async (data: any) => {
    const res = await axios.post(
      "http://188.121.102.86:8081/api/user/signUp",
      data
    );
    return res;
  };

  const initialValues: RegisterFormValues = {
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: 0,
    nationalCode: 0,
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
          <div className="flex flex-col gap-4 ">
          <label>در صورت موجود بودن عکس  با فرمت JPG  وارد کنید</label>
               <div className="overflow-hidden relative w-full h-12 mb-4 border-2 border-gray-400 p-2 rounded-md ">
              <input
                className="cursor-pointer absolute block  w-full h-12  pin-r pin-t"
                type="file"
                name="pathImage"
                id="file-type"
              />
            </div>

          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
              const {
                phoneNumber,
                password,
                firstName,
                lastName,
                nationalCode,
              } = values;
               //@ts-ignore
              const file = document.getElementById("file-type").files[0];
              const formData = new FormData();
              formData.append("file", file);
              formData.append("firstName", firstName);
              formData.append("lastName", lastName);
              formData.append("password", `${password}`);
              formData.append("nationalCode", `${nationalCode}`);
              formData.append("phoneNumber", `${phoneNumber}`);
              sendDataUserRegister(formData)
                .then((res) => {
                  // cookies.set("token", res.data);
                  notify();
                  push("/Login");
                })
                .catch(() => console.log("error Login...."));
            }}
          >
            {({ errors, touched, handleChange, handleBlur }) => (
              <Form className=" flex   flex-col items-center md:w-full justify-center ">
                <div className="hero">
                  <div className="hero-content p-0 flex-col lg:flex-row-reverse w-full">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 bg-opacity-40">
                      <div className="card-body">
                        <div className="form-control flex md:flex-row justify-between gap-2 md:gap-0">
                          <div className=" h-[100px]">
                            <label className="label">
                              <span className="label-text">نام</span>
                            </label>
                            <Field
                              type="text"
                              name="firstName"
                              placeholder="نام..."
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className="input input-bordered w-full"
                            />
                            {errors.firstName || touched.firstName ? (
                              <div className="text-red-800">
                                {errors.firstName}
                              </div>
                            ) : null}
                          </div>
                          <div className=" h-[100px]">
                            <label className="label">
                              <span className="label-text">نام خانوادگی</span>
                            </label>
                            <Field
                              type="text"
                              name="lastName"
                              placeholder="نام خانوادگی..."
                              className="input input-bordered w-full"
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <div className="text-red-800">
                              {touched.lastName && errors.lastName}
                            </div>
                          </div>
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
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          <div className="text-red-800">
                            {touched.password && errors.password}
                          </div>
                        </div>
                        {/* <div className="form-control h-[100px]">
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
                        </div> */}
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
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                            <div className="text-red-800">
                              {touched.phoneNumber && errors.phoneNumber}
                            </div>
                        </div>
                        <div className="form-control h-[100px]">
                          <label className="label">
                            <span className="label-text">
                              شماره ملی خود را وارد کنید
                            </span>
                          </label>
                          <Field
                            type="number"
                            name="nationalCode"
                            placeholder="شماره ملی..."
                            className="input input-bordered"
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          {errors.nationalCode || touched.nationalCode ? (
                            <div className="text-red-800">
                              {touched.nationalCode && errors.nationalCode}
                            </div>
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
          </div>
          {/* end Form */}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
