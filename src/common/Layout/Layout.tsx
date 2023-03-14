import Footer from "./../components/Footer";
import Header from "./../components/Header";

export default function Layout({ children }: {
    children: React.ReactNode,
}) {
    return (
        <>
            <div className="header_Layout sticky top-0 z-50 md:mt-10">
                <Header />
            </div>
            <main className="md:relative md:bottom-40">{children}</main>
            <div className="footer_layout">
                <Footer />
            </div>
        </>
    )
}