"use client"
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
// import Education from "./components/homepage/education";
// import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section/yoyo";
import Projects from "./components/homepage/projects/index_1";
import Skills from "./components/homepage/skills";

import dynamic from "next/dynamic";

const Experience = dynamic(() => import("./components/homepage/experience"), {
  ssr: false,
});
const Education = dynamic(() => import("./components/homepage/education"), {
  ssr: false,
});

export default function ClientHome({ blogs }) {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
      {/* <ScrollToTop /> */}
    </div>
  );
}