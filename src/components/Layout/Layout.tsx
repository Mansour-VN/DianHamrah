import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Layout({ children }: {
    children: React.ReactNode,
}) {
    return (
        <>
            <div className="header_Layout sticky top-0 z-50">
                <Header />
            </div>
            <main>{children}</main>
            <div className="footer_layout">
                <Footer />
            </div>
        </>
    )
}