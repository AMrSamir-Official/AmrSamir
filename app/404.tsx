// import Lenis from "@studio-freight/react-lenis";
import Lenis from "lenis"; // تأكد من الاستيراد الصحيح

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const lenis = new Lenis({
      // خيارات تخص Lenis (إذا لزم الأمر)
      duration: 1.2,
      easing: (t) => Math.min(1, 1.5 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <div className="hamburger-menu">
        <button
          className="burger"
          data-state={isMenuOpen ? "open" : "closed"}
          onClick={toggleMenu}
        >
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>
      </div>

      <nav
        data-state={isMenuOpen ? "open" : "closed"}
        className={`transition-all ${isMenuOpen ? "block" : "hidden"}`}
      >
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <main className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="col-md-6">
              <motion.svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 800 600"
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <g>
                  <defs>
                    <clipPath id="GlassClip">
                      <path d="M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5s-28.485-16.599-34.877-24.192c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13c6.755-0.61,20.546-0.608,41.785,5.087s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z" />
                    </clipPath>
                    <clipPath id="cordClip">
                      <rect width="800" height="600" />
                    </clipPath>
                  </defs>
                  {/* المحتوى الخاص بـ SVG */}
                </g>
              </motion.svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
