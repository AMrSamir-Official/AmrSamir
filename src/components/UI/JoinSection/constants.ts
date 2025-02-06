import { StaticImageData } from "next/image";
import cameron_williamson from "../../../../public/images/cameron_williamson.png";
import esther_howard from "../../../../public/images/esther_howard.png";
import robert_fox from "../../../../public/images/robert_fox.png";

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "AmrSamir has completely transformed my approach to web and app development. Their innovative solutions have elevated my projects, and their seamless platform has made managing everything simple. I feel more confident than ever about my development path.",
    person: "Robert Fox",
    avatar: robert_fox,
  },
  {
    testimony:
      "AmrSamir  web and app development services have been a game-changer for my business. Their expert guidance and tailored solutions have given me the peace of mind that my projects are in great hands. I’m now able to bring my ideas to life with ease.",
    person: "Cameron Williamson",
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Working with AmrSamir has been a breakthrough in my development journey. Their team crafted a solution that addressed all my needs and helped me achieve my digital goals. I’m amazed by the efficiency and innovation they brought to my projects.",
    person: "Esther Howard",
    avatar: esther_howard,
  },
  {
    testimony:
      "AmrSamir  web and app development services have taken my business to the next level. Their personalized approach and expertise have helped me create more efficient and impactful solutions for my projects.",
    person: "Cameron Williamson",
    avatar: cameron_williamson,
  },
  {
    testimony:
      "AmrSamir’s approach to web and app development has been revolutionary for my career. Their innovative strategies and user-friendly platform have made every project easier and more efficient. I now approach development with a new sense of confidence.",
    person: "Robert Fox",
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = [
  "Unlock the Power of Web & App Development",
  "with AmrSamir  Expertise",
];
