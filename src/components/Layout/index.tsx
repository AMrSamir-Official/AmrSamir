"use client";

import { ReactLenis } from "@lenis";
import { useState } from "react";
import { Footer, Header, Preloader } from "..";
import StyledComponentsRegistry from "../../../libs/registry";
import { GlobalStyles } from "./GlobalStyles";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [complete, setComplete] = useState(false);
  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
        easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
      >
        <GlobalStyles />
        <Preloader setComplete={setComplete} />
        <div className={complete ? "complete" : "not_complete"}>
          <Header />
          {children}
          <Footer />
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;
