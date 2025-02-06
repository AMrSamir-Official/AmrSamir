"use client";

import { useServerInsertedHTML } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
  const [isClient, setIsClient] = useState(false);

  // تحقق من البيئة العميلة بعد التحميل
  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (!isClient) {
    return (
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        {children}
      </StyleSheetManager>
    );
  }

  return <>{children}</>;
}
