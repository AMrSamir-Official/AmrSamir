"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center p-16 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent"
      >
        من أنا؟
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl max-w-2xl mx-auto leading-relaxed opacity-80"
      >
        أقدم حلولًا رقمية متكاملة لتطوير مواقع الويب وتطبيقات الجوال، مع التركيز
        على السرعة، الأداء، وتجربة المستخدم.
      </motion.p>
    </div>
  );
};

export default About;
