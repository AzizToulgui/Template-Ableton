"use client";
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className=" top-0 left-0 w-full z-50 bg-white">
            <div className="flex items-center justify-between px-8 py-1 border-b-2 border-gray-200">
                <div className="flex items-center justify-center gap-10 inter">
                    <Image src="/logo.png" alt="logo" width={65} height={65} />
                    <Link href="/" className="font-semibold text-base hidden xl:block">Live</Link>
                    <Link href="/" className="font-semibold text-base hidden xl:block">Push</Link>
                    <Link href="/" className="font-semibold text-base hidden xl:block">Move</Link>
                    <Link href="/" className="font-semibold text-base hidden xl:block">Note</Link>
                    <Link href="/" className="font-semibold text-base hidden xl:block">Link</Link>
                    <Link href="/" className="font-semibold text-base hidden xl:block">Shop</Link>
                    <Link href="/" className="font-semibold text-base hidden xl:block">Packs</Link>
                    <Link href="/" className="font-semibold text-base hidden xl:block">Help</Link>
                    <Link href="/" className="text-[#ff764d] font-semibold text-base hidden xl:block">More +</Link>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="xl:hidden font-semibold">
                        Menu <span>↓</span>
                    </button>
                </div>
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-[#0000ff] font-semibold text-xl hidden xl:block">Try Live 12 for free</Link>
                    <Link href="/" className="font-semibold hidden xl:block">Log in or register</Link>
                </div>
            </div>

            {/* Dropdown Menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className=" left-0 w-full bg-white shadow-lg border-t border-gray-200 xl:hidden"
                    style={{ top: '100%', zIndex: 60 }} // Ensure dropdown is below navbar
                >
                    <div className="flex flex-col p-4 space-y-2">
                        <Link href="/" className="font-semibold text-base">Live</Link>
                        <Link href="/" className="font-semibold text-base">Push</Link>
                        <Link href="/" className="font-semibold text-base">Move</Link>
                        <Link href="/" className="font-semibold text-base">Note</Link>
                        <Link href="/" className="font-semibold text-base">Link</Link>
                        <Link href="/" className="font-semibold text-base">Shop</Link>
                        <Link href="/" className="font-semibold text-base">Packs</Link>
                        <Link href="/" className="font-semibold text-base">Help</Link>
                        <Link href="/" className="text-[#ff764d] font-semibold text-base">More +</Link>
                        <Link href="/" className="text-[#0000ff] font-semibold text-base">Try Live 12 for free</Link>
                        <Link href="/" className="font-semibold">Log in or register</Link>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Navbar;