"use client";
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.body.style.overflow = "auto"; // Make sure to enable scrolling when the menu unmounts
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50"
        >
          <div ref={menuRef} className="mobile-menu bg-pattern-3">
            <button
              className="text-2xl text-blue-500 p-4 absolute top-0 right-0"
              onClick={onClose}
            >
              <Image
                src="close.svg"
                alt="close"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
              />
            </button>
            <ul className="w-full flex flex-col flexCenter bold-24 text-white gap-4">
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} onClick={onClose}>
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
