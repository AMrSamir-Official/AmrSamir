"use client";
import { GetStartedButton } from "@/components";
import AnimatedLink from "@/components/Common/AnimatedLink";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AmrSamir_logo from "../../../../public/svgs/AmrSamir_logo.png";
import ic_bars from "../../../../public/svgs/ic_bars.svg";
import { links, menu } from "./constants";
import {
  BurgerMenu,
  CallToActions,
  Inner,
  LogoContainer,
  Nav,
  Wrapper,
} from "./styles";

const Header = () => {
  const router = useRouter();
  const handleSignInClick = () => {
    router.push("/signin"); // الانتقال إلى صفحة /signin
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Link href="./">
            <Image
              src={AmrSamir_logo}
              // width={100}
              // height={0}
              alt="AmrSamir_logo"
              priority
            />
          </Link>
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? "open" : "closed"}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? "active" : ""}>
          {links.map((link, i) => (
            <Link key={i} href={link.url}>
              <AnimatedLink title={link.linkTo} />
            </Link>
          ))}
        </Nav>
        <CallToActions className={isOpen ? "active" : ""}>
          <div onClick={handleSignInClick}>
            <AnimatedLink title="Login" />
          </div>

          <GetStartedButton padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
