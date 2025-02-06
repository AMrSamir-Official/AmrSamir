"use client";

import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import Image from "next/image";
import linkedIn from "../../public/svgs/linkedIn.svg";
import whatsapp from "../../public/svgs/whatsapp.svg";

export default function BioCard() {
  return (
    <motion.div
      className="w-full min-h-[70vh] bg-black rounded-xl shadow-2xl overflow-hidden mx-auto border border-gray-700 bg-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center bg-none text-center p-8">
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/PNG_Test.png/477px-PNG_Test.png?20250106133743"
          alt="Avatar"
          className="w-24 cover h-24 rounded-full shadow-2xl mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        />
        <motion.div
          className="px-4 py-2 p-1 text-white rounded-full text-sm font-bold mb-6 shadow-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Dev
        </motion.div>
        <motion.h2
          className="text-3xl font-extrabold text-white mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Amr Samir
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 max-w-[24ch] mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Web & Mobile Developer with a passion for modern UI/UX design.
        </motion.p>
        <motion.div
          className="flex gap-6 mb-6 bg-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {[
            "M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z",
            "M12 6.865A5.135 5.135 0 1 0 17.135 12A5.135 5.135 0 0 0 12 6.865Zm0 8.469A3.334 3.334 0 1 1 15.334 12A3.333 3.333 0 0 1 12 15.334Z",
            "M21.94 7.877a7.333 7.333 0 0 0-.465-2.427...",
          ].map((path, index) => (
            <motion.button
              key={index}
              className="p-3 text-gray-400 dark:text-gray-300 hover:text-pink-500 hover:bg-gray-700 dark:hover:bg-gray-800 rounded-full transition-all bg-none"
              whileHover={{ scale: 1.1 }}
            ></motion.button>
          ))}
        </motion.div>
        <div className="flex gap-4">
          <a
            href="https://wa.me/201122636253"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="cursor-pointer"
              width={25}
              height={25}
              src={whatsapp}
              alt="whatsapp"
            />
          </a>
          <a
            href="https://eg.linkedin.com/in/amr-samir-a07790303"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="cursor-pointer"
              width={25}
              height={25}
              src={linkedIn}
              alt="linkedIn"
            />
          </a>
        </div>
      </div>
      <div className="p-4">
        <motion.div
          className="flex justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
}
