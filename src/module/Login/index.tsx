import Image from "next/image";
import headerBg from "public/assets/images/background/header-bg.png";
import Link from "next/link";

const Login = () => {
  return (
    <div
      id="sec1"
      className="w-full flex items-center justify-center relative flex-col md:h-[700px] h-[800px]  "
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
            <p className="text-black md:text-6xl text-4xl font-extrabold pb-4" > 
              سلام!
            </p>
            <h2 className="md:text-2xl text-xl font-extrabold text-black pb-6 text-justify">
             ‌به دیان‌همراه فردا اولین و تنها ترین معتمد مالیاتی نوع دو و سه کشور خوش آمدید
            </h2>
          </div>

          {/* start form */}
          <div className=" flex  flex-col items-center  mx-auto justify-center ">
            <div className="hero">
              <div className="hero-content flex-col lg:flex-row-reverse md:w-1/2">
               
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                  <div className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">نام کاربری</span>
                      </label>
                      <input
                        type="text"
                        placeholder="نام کاربری..."
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">رمز عبور</span>
                      </label>
                      <input
                        type="text"
                        placeholder="رمز عبور..."
                        className="input input-bordered"
                      />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                          {/* Forgot password? */}
                        </a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">ورود</button>
                    </div>
                    <div className="form-control mt-2">
                      <Link href="/Registre">
                         <p className="text-red-800">ثبت نام کنید!</p>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className="text-center lg:text-left">
                  <h1 className="text-2xl font-bold">لطفا </h1>
                  <p className="py-6">
                        نام کاربری و رمز عبور خود را وارد کنید
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          {/* end Form */}
        </div>
      </div>
    </div>
  );
};

export default Login;
