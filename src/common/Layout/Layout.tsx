import { useRouter } from "next/router";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import { useState, useEffect } from "react";
import Login from "@/module/Login";
import Register from "@/pages/Register";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [LoginPage, setLoginPage] = useState(false);
  const [RegisterPage, setRegisterPage] = useState(false);
  const { asPath } = useRouter();

  useEffect(() => {
    if (asPath === "/Login") {
        setRegisterPage(false)
        setLoginPage(true);

    } else if (asPath === "/Register"){
        setLoginPage(false)
        setRegisterPage(true)

    } else {
        setLoginPage(false);
        setRegisterPage(false)
    }
  }, [asPath]);


  return (
    <div>
       <div className={`${RegisterPage || LoginPage? "hidden" : "z-50 relative flex justify-center"}`}>
          <Header/>
       </div>
       {/* md:relative md:bottom-40 */}
       <main className={`${RegisterPage || LoginPage? "" : ""}`}>{children}</main>
       <div className={`${RegisterPage || LoginPage? "hidden" : "" }`}>
          <Footer />
       </div>
     </div>
   );
}
