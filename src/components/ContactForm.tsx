"use client";

import emailjs from "emailjs-com";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import linkedIn from "../../public/svgs/linkedIn.svg";
import whatsapp from "../../public/svgs/whatsapp.svg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirectToWhatsApp, setRedirectToWhatsApp] = useState(false);
  const [mounted, setMounted] = useState(false); // Track if the component has mounted
  const router = useRouter();

  // Ensure that client-side logic runs only after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (redirectToWhatsApp && typeof window !== "undefined") {
      const url = `https://wa.me/201122636253?text=${encodeURIComponent(
        `Message from: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      )}`;
      router.push(url); // Use Next.js router for navigation
    }
  }, [redirectToWhatsApp, router, formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_a5s8ucp",
        "template_44eg4bn",
        e.target,
        "c0zAOLrM8fTAslsFs"
      );

      alert("تم إرسال البريد الإلكتروني بنجاح!");
      setFormData({ name: "", email: "", message: "" }); // Reset form after success
    } catch (error) {
      console.error("خطأ في إرسال البريد:", error);
    } finally {
      setIsSubmitting(false); // Ensure submitting state is reset
    }
  };

  const contactWhatsApp = () => {
    setRedirectToWhatsApp(true);
  };

  const goToLinkedIn = () => {
    // Use Next.js router to navigate to LinkedIn
    router.push("https://eg.linkedin.com/in/amr-samir-a07790303");
  };

  if (!mounted) return null; // Prevent rendering on the server

  return (
    <div className="min-h-screen flex items-center justify-center w-full px-6">
      <div className="w-full max-w-4xl rounded-lg p-8 shadow-lg text-gray-200">
        <div className="flex flex-col md:flex-row gap-10 bg-[#0a0909b8] p-[11px] rounded-[10px] items-center justify-center">
          {/* Left Section */}
          <div className="md:w-1/3 flex flex-col items-center text-center">
            <div className="mb-6">
              <i className="fas fa-map-marker-alt text-3xl text-[#e0e0e0]" />
              <h3 className="font-medium text-lg mt-2">Address</h3>
              <p className="text-[#afafb6]">Cairo, Egypt</p>
            </div>
            <div className="mb-6">
              <i className="fas fa-phone-alt text-3xl text-[#e0e0e0]" />
              <h3 className="font-medium text-lg mt-2">Phone</h3>
              <p className="text-[#afafb6]">+20 1122636253</p>
            </div>
            <div className="mb-6">
              <i className="fas fa-envelope text-3xl text-[#e0e0e0]" />
              <h3 className="font-medium text-lg mt-2">Email</h3>
              <p className="text-[#afafb6]">amrsamir.official@gmail.com</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold text-[#e0e0e0]">
              Send Me a Message
            </h2>
            <p className="text-[#afafb6] mt-4">
              إذا كان لديك أي استفسارات أو عمل لي، لا تتردد في إرسال رسالة،
              وسأكون سعيدًا بمساعدتك.
            </p>

            <form onSubmit={sendEmail} className="mt-6 flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-12 px-4 border border-transparent focus:border-gray-400 transition-border duration-300 focus:outline-none p-2 rounded-lg text-lg text-gray-200 outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 px-4 border border-transparent focus:border-gray-400 transition-border duration-300 focus:outline-none p-2 rounded-lg text-lg text-gray-200 outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full min-h-[120px] px-4 border border-transparent focus:border-gray-400 transition-border duration-300 focus:outline-none p-2 rounded-lg text-lg text-gray-200 resize-none outline-none"
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#3e2093] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#5029bc] disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Email"}
              </button>
            </form>

            <div className="mt-4 flex justify-between py-12">
              <button
                onClick={contactWhatsApp}
                className="text-[#25D366] flex gap-1 cursor-pointer"
              >
                <Image
                  width={25}
                  height={25}
                  src={whatsapp}
                  alt="WhatsApp"
                  priority
                />
                Contact on WhatsApp
              </button>
              <button
                onClick={goToLinkedIn}
                className="text-[#0077b5] flex gap-1 cursor-pointer"
              >
                <Image
                  width={25}
                  height={25}
                  src={linkedIn}
                  alt="LinkedIn"
                  priority
                />
                Visit LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
