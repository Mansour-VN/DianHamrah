import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Socialmedia from "@/components/SocialMedia/Socialmedia";

export default function Layout({ children }: {
    children: React.ReactNode,
}) {
    return (
        <>
            <div className="header_Layout sticky top-0 z-50 bg-slate-800 ">
                <Header />
                <div className="pb-4 md:hidden">
                  <Socialmedia/>
                </div>
            </div>
            <main>{children}</main>
            <div className="footer_layout">
                <Footer />
            </div>
        </>
    )
}