"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);
  const controls = useAnimation();

  const scrollToReference = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShowButton(true);
      controls.start({ opacity: 1 });
    } else {
      setShowButton(false);
      controls.start({ opacity: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      onClick={scrollToReference}
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0 }} // Exit animation
      style={{
        display: showButton ? "block" : "none",
      }}
      className="scrollBTN"
    >
      <Image src="/upArrow.svg" width={30} height={30} alt="Up Arrow" />
    </motion.div>
  );
};

export default ScrollButton;
