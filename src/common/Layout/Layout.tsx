import Footer from "./../components/Footer";
import Header from "./../components/Header";
import SocialMedial from "./../components/SocialMedia";

export default function Layout({ children }: {
    children: React.ReactNode,
}) {
    return (
        <>
            <div className="header_Layout sticky top-0 z-50 bg-slate-800 ">
                <Header />
                <div className="pb-4 md:hidden">
                  <SocialMedial/>
                </div>
            </div>
            <main>{children}</main>
            <div className="footer_layout">
                <Footer />
            </div>
        </>
    )
}