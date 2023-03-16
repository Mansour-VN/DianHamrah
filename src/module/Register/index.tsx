import Image from "next/image";
import headerBg from "public/assets/images/background/header-bg.png";
import Link from "next/link";

const RegisterPage = () => {
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
          <p className="text-black text-4xl font-extrabold pb-4" > 
            سلام!
          </p>
          <h2 className="text-xl font-extrabold text-black pb-6 text-justify">
           ‌لطفا برای ثبت نام فرم زیر را با دقت تکمیل کنید
          </h2>
        </div>

        {/* start form */}
        <div className=" flex  flex-col items-center  mx-auto justify-center ">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse md:w-1/2 w-full ">
             
              <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 bg-opacity-40">
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
                      type="password"
                      placeholder="رمز عبور..."
                      className="input input-bordered"
                    />
                    <label className="label">
                      <span className="label-text">تکرار رمز عبور</span>
                    </label>
                    <input
                      type="password"
                      placeholder="تکرار رمز عبور..."
                      className="input input-bordered"
                    />
                    <label className="label">
                      <span className="label-text">شماره همراه خو را وارد کنید</span>
                    </label>
                    <input
                      type="text"
                      placeholder="شماره همراه..."
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">ثبت نام</button>
                  </div>
                   <div className="flex flex-row justify-between">
                      <div className="form-control mt-2">
                        <Link href="/Login">
                          <p className="text-red-800">بازگشت به صفحه ورود!</p>
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
        </div>
        {/* end Form */}
      </div>
    </div>
  </div>
  )
}

export default RegisterPage