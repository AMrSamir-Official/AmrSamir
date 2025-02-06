"use client";

import Lenis from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  min-height: 100vh;
  background-color: #0a0a0a;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  overflow: hidden;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 800px;
  line-height: 1.6;
  opacity: 0.8;
`;

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <Lenis root>
      <Section ref={sectionRef}>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          من أنا؟
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          أقدم حلولًا رقمية متكاملة لتطوير مواقع الويب وتطبيقات الجوال، مع
          التركيز على السرعة، الأداء، وتجربة المستخدم.
        </Subtitle>
      </Section>
    </Lenis>
  );
};

export default About;
