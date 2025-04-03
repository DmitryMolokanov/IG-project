import { FC, ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="main-container">
      <Header />
      <div className="wrap-main-content">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
