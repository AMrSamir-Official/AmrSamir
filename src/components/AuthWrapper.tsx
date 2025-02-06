"use client";

import { usePathname } from "next/navigation";
import Layout from "./Layout";

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/signin";

  return isAuthPage ? children : <Layout>{children}</Layout>;
}
