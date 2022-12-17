import { LayoutProps } from "./Layout.props";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div>{children}</div>
            </div>
            <Footer />
        </>
    );
};