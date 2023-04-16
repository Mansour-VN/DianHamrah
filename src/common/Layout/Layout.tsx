import { useRouter } from "next/router";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import { useState, useEffect } from "react";
import Login from "@/module/Login";
import Register from "@/pages/Register";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div>
       <div className="z-50 relative flex">
          <Header/>
       </div>
       <main>{children}</main>
       <div className="hidden">
          <Footer />
       </div>
     </div>
   );
}
