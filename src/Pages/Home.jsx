import { useState, useEffect } from "react";

import AboutMe from "../Components/AboutMe/AboutMe";

import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";

import { useRef } from "react";

export default function Home() {
  const [showMe, setShowMe] = useState(false);
  const aboutRef = useRef(null);

  const handleTellMe = () => {
    setShowMe(true);

    setTimeout(() => {
      aboutRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  useEffect(() => {
    if (showMe) {
      aboutRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [showMe]);
  return (
    <div>
      <Navbar />
      <Hero onTellMe={handleTellMe} />
      {showMe && (
        <div ref={aboutRef}>
          <AboutMe />
        </div>
      )}

      {/* <Services />

      <Portfolio />
      <About />
      <Team />
      <Clients />
      <Contact /> */}
    </div>
  );
}
