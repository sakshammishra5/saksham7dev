"use client";

import ScrollToTop from "./helper/scroll-to-top";
// You can import more client-side only components here
// import ThemeProvider from "./theme-provider";

export default function ClientWrapper({ children }) {
  return (
    <>
      <ScrollToTop />
   {children}
    </>
  );
}
