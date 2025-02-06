"use client";
import { GetStartedButton } from "@/components";
import MaskText from "@/components/Common/MaskText";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "../../../../libs/useIsMobile";
import ic_chevron_right from "../../../../public/svgs/ic_chevron_right.svg";
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from "./constants";
import { HeroTextContainer, Inner, Pill, Wrapper } from "./styles";

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <Pill>
          <Link href="./tamplets">Introducing AmrSamir Projects</Link>
          <Image src={ic_chevron_right} alt="chevron-right" />
        </Pill>
        <HeroTextContainer>
          {isMobile ? (
            <>
              <MaskText phrases={mobilePhrases} tag="h1" />
              <MaskText phrases={mobileParagraphPhrases} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={phrases} tag="h1" />
              <MaskText phrases={paragraphPhrases} tag="p" />
            </>
          )}
        </HeroTextContainer>
        <GetStartedButton padding="1rem 2rem" />
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
