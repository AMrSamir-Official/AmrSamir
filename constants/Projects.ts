import { StaticImageData } from "next/image";
import images from "./images";

const tabContent: Record<
  string,
  {
    Demo: string;
    price: string;
    imgUrl: string | StaticImageData;
    title: string;
    description: string;
  }[]
> = {
  SaaS: [
    {
      Demo: "https://docs-onlion-editor.vercel.app",
      description:
        "LiveDocs هو استنساخ ديناميكي لـ Google Docs، يوفر تجربة مستخدم سلسة وسريعة بفضل واجهة سهلة الاستخدام وأداء عالي، مع إمكانية التعاون الفوري عبر الإنترنت. تم تصميم التطبيق ليمنحك كل ما تحتاجه للعمل بشكل جماعي مع ضمان التفاعل السريع والمباشر.",
      title: "LiveDocs",
      price: "5$",
      imgUrl: images.LiveDocs,
    },
    {
      Demo: "https://NetPulse.vercel.app/",
      description:
        "NetPulse هو منصة شاملة توفر لك دروس تفاعلية، شروحات فيديو، ومجتمع تعليمي قوي يتيح لك التعلم بمختلف أساليب التعليم. الأداء العالي يضمن لك تجربة تعلم مريحة وسلسة، أينما كنت وفي أي وقت.",
      title: "NetPulse",
      price: "5$",
      imgUrl: images.NetPulse,
    },
    {
      Demo: "https://figma-next-js.vercel.app/",
      description:
        "Figma Clone هو تطبيق تصميم متقدم يسمح لك بالتعاون في الوقت الفعلي، والتفاعل مع التصميمات في بيئة سريعة وفعالة. توفر الأداة استجابة فورية لأي تغييرات في التصميم، مما يعزز من سرعة سير العمل وجودة النتيجة النهائية.",
      title: "Figma Clone",
      price: "5$",
      imgUrl: images.FigmaClone,
    },
    {
      Demo: "http://ultra-vibe.web.app",
      description:
        "Ultra Vibe هي منصة متكاملة لتحسين تجربة الطعام لديك، حيث تلتقي التقنية مع الذوق لتمنحك تجربة استثنائية في كل مرة. تتميز بواجهة سلسة وتكنولوجيا حديثة تضمن لك أداء ممتازاً وسهولة في الاستخدام.",
      title: "Ultra Vibe",
      price: "5$",
      imgUrl: images.ultraVibeLanding,
    },
  ],
  Startup: [],
  Software: [],
  Business: [],
  "Landing Page": [],
  Boilerplate: [],
  Blog: [],
  Documentation: [],
  Portfolio: [],
  Dashboard: [
    {
      Demo: "https://admin-dashboard-webapp.vercel.app",
      description:
        "لوحة تحكم مرنة توفر لك جميع الأدوات اللازمة لإدارة الأعمال بكل سهولة وسرعة، مع رسوم بيانية متطورة وأدوات لتتبع الأنشطة والأوامر. هذه اللوحة تتميز بسرعة استجابتها وكفاءتها في توفير المعلومات المطلوبة في الوقت الفعلي.",
      title: "Dashboard",
      price: "5$",
      imgUrl: images.Dashboard,
    },
    {
      Demo: "https://react-dashboard-web.vercel.app/",
      description:
        "MUI Dashboard هو حل قوي لإنشاء لوحات تحكم احترافية تواكب التغيرات في بياناتك بشكل فوري، مما يوفر لك كل ما تحتاجه لإدارة عملياتك بكل سهولة.",
      title: "MUI Dashboard",
      price: "5$",
      imgUrl: images.MUI_Dashboard,
    },
    {
      Demo: "https://my-dashboard-demo.vercel.app/",
      description:
        "تم تطوير هذه المنصة لتوفير أفضل تجربة للتجارة الإلكترونية عبر الإنترنت، مع الأداء السريع وسهولة التصفح. كل شيء هنا مصمم ليمنحك مرونة وسلاسة في إدارة عملياتك التجارية.",
      title: "Dashboard App",
      imgUrl: images.DashApp,
      price: "5$",
    },
    {
      Demo: "https://docs-onlion-editor.vercel.app/",
      description:
        "LiveDocs هو استنساخ ديناميكي لـ Google Docs، يوفر تجربة تعاون فعالة وأداء فائق السرعة. يمكنك العمل على الوثائق في الوقت الفعلي مع فريقك دون أي تأخير.",
      title: "LiveDocs",
      imgUrl: images.LiveDocs,
      price: "5$",
    },
  ],
  "E-Commerce": [
    {
      Demo: "https://e-techbay.vercel.app/",
      description:
        "E-techPay هو منصة متكاملة للتجارة الإلكترونية تضمن لك تجربة تسوق سلسة وآمنة مع أداء عالي السرعة. تم تصميم المنصة لتلبية احتياجات جميع المستخدمين مع ضمان سهولة الوصول إلى كل منتج وتحديث فوري للمحتوى.",
      title: "E-techPay",
      imgUrl: images.E_techPay,
      price: "5$",
    },
  ],
};

export default tabContent;
