"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-slate-500 z-20"
        >
          <div className="container mx-auto flex flex-col justify-center items-start h-full w-3/4 max-w-md left-0 bg-slate-500 p-4">
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
