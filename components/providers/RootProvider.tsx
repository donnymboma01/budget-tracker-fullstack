"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

function RootProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {" "}
      {children}{" "}
    </ThemeProvider>
  );
}

export default RootProvider;
