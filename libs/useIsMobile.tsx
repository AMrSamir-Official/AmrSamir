"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // استخدم null في البداية

  useEffect(() => {
    if (typeof window !== "undefined") {
      // تأكد من أن الكود يعمل فقط في العميل
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      handleResize(); // تحقق من الحجم عند التحميل
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [pathname]); // تحديث بناءً على تغيير المسار

  if (isMobile === null) {
    return false; // إذا كانت قيمة isMobile null، نعيد false لتجنب المشكلة في مرحلة SSR
  }

  return isMobile;
};
