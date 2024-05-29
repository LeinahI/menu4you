"use client";
import { useRef } from "react";

import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import About from "./about/About";
import Menu from "./menu/Menu";

export default function Home() {
  const hero = useRef(null);
  const about = useRef(null);
  const menu = useRef(null);

  const scrollToSection = (elementRef) => {
    const navbarHeight = document.querySelector(".sticky-navbar").offsetHeight;
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - navbarHeight,
        behavior: "smooth",
        block: "start", // Aligns the top of the element to the top of the viewport
      });
    }
  };

  return (
    <main className="overflow-hidden h-100 container mx-auto border-l-0 border-r-0 md:border-l-2 md:border-r-2 border-[#B7926A] ">
      <Navbar
        onclickAbout={() => scrollToSection(about)}
        onclickHero={() => scrollToSection(hero)}
        onclickMenu={() => scrollToSection(menu)}
      />
      <Hero ref={hero} />
      <About ref={about} />
      <Menu ref={menu} />
    </main>
  );
}
