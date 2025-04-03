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
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
