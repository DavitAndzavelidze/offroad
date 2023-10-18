"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { motion } from "framer-motion";
import { topToBottom } from "@/utils/motion";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <motion.nav
      variants={topToBottom}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flexBetween max-container padding-container relative z-30 py-5"
    >
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={29}
          className="inline"
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all border-b-2 border-white hover:navlink-Hover"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          alt="login"
          variant="btn_dark_green"
        />
      </div>
      <div className="block lg:hidden">
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          onClick={toggleMobileMenu}
          className="inline-block cursor-pointer lg:hidden"
        />
        <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
      </div>
    </motion.nav>
  );
};

export default Navbar;
