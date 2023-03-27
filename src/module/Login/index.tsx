import Image from "next/image";
import headerBg from "public/assets/images/background/header-bg.png";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { Cookies } from "react-cookie";

const Login = () => {
  const { push } = useRouter();
  const cookies = new Cookies();

  const sendDataUserLogin = async (data: any) => {
    const res = await axios.post(
      "http://188.121.102.86:8000/api/user/login",
      data
    );
    return res;
  };

  const sendAPI = async (e: any) => {
    e.preventDefault();
    const tempObj = {
      userName: e.target.phoneNumber.value,
      password: e.target.password.value,
    };
    await sendDataUserLogin(tempObj)
      .then((res) => {
        cookies.set('token', res.data );
        push("/UserDashboard");
      })
      .catch((e) => console.log(e));
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
          <div>
            <p className="text-black text-4xl font-extrabold pb-4">سلام!</p>
            <h2 className="text-xl font-extrabold text-black pb-6 text-justify">
              ‌به دیان‌همراه فردا اولین و تنها ترین معتمد مالیاتی نوع دو و سه
              کشور خوش آمدید
            </h2>
          </div>

          {/* start form */}
          <form
            onSubmit={sendAPI}
            className=" flex  flex-col items-center  mx-auto justify-center "
          >
            <div className="hero">
              <div className="hero-content flex-col lg:flex-row-reverse md:w-1/2 w-full ">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 bg-opacity-40">
                  <div className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">تلفن همراه</span>
                      </label>
                      <input
                        type="number"
                        placeholder="تلفن همراه..."
                        className="input input-bordered"
                        name="phoneNumber"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">رمز عبور</span>
                      </label>
                      <input
                        type="password"
                        placeholder="رمز عبور..."
                        className="input input-bordered"
                        name="password"
                      />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
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
                      <div className="form-control mt-2">
                        <Link href="/Register">
                          <p className="text-red-800">ثبت نام کنید!</p>
                        </Link>
                      </div>
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
          </form>
          {/* end Form */}
        </div>
      </div>
    </div>
  );
};

export default Login;
