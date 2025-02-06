import { useState } from "react";
import { animateScroll as scroll } from "react-scroll"; // استيراد react-scroll
import { Footer, Header, Preloader } from "..";
import StyledComponentsRegistry from "../../../libs/registry";
import { GlobalStyles } from "./GlobalStyles";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [complete, setComplete] = useState(false);

  // دالة للتمرير إلى الأعلى
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <Preloader setComplete={setComplete} />
      <div className={complete ? "complete" : "not_complete"}>
        <Header />
        {children}
        <Footer />
        {/* زر التمرير إلى الأعلى */}
        <div onClick={scrollToTop} className="scroll-to-top">
          Scroll to Top
        </div>
      </div>
    </StyledComponentsRegistry>
  );
};

export default Layout;
