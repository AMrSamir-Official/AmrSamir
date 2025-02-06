type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ["Frequently asked", "questions"];
export const mobileHeaderPhrase = ["Frequently", "asked", "questions"];
export const animate = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  open: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: "How do I get started with AmrSamir  development services?",
    answer:
      "To get started, simply sign up on our platform, select the services that best suit your needs, and our team will guide you through the process of launching your web or app project.",
  },
  {
    question:
      "How does AmrSamir ensure the quality of my web and app projects?",
    answer:
      "AmrSamir uses the latest development technologies and best practices to ensure that your web and app projects are delivered with the highest quality, functionality, and security.",
  },
  {
    question: "What kind of customization options does AmrSamir provide?",
    answer:
      "AmrSamir offers a range of customization options, from design to functionality, allowing you to tailor your project to your specific requirements and vision.",
  },
  {
    question: "How can AmrSamir assist with ongoing maintenance and updates?",
    answer:
      "AmrSamir provides ongoing maintenance and support for your web and app projects, ensuring they remain up-to-date, secure, and optimized for performance.",
  },
];
