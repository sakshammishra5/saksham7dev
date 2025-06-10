import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
// import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ClientWrapper from "./components/ClientWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Saksham Mishra - Software Developer",
  description:
    "This is the portfolio of Saksham Mishra. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};


/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The root layout of the app.
 *
 * This component is responsible for rendering the root layout of the app. It
 * includes the navbar, the main content area, and the footer. It also includes
 * the Google Tag Manager script.
 *
 * @param {{ children: React.ReactNode }} props The props object.
 * @returns {JSX.Element} The root layout component.
 */
/*******  eed3c11e-51ae-45ad-93aa-72d2ca643275  *******/export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          {/* <ScrollToTop /> */}
        </main>
        <Footer />
        </ClientWrapper>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
