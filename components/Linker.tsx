"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Linker = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setIsVisible(true); // Show when scrolling up or near the top
            } else {
                setIsVisible(false); // Hide when scrolling down
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div
            className={`w-full bg-white border-b border-gray-200 ${
                isVisible ? "block" : "hidden"
            }`}
        >
            <div className="max-w-5xl flex justify-start space-x-8 p-4 px-4">
                {["About", "Jobs", "Apprenticeships"].map((item) => {
                    const link = `/${item.toLowerCase()}`;
                    return (
                        <Link
                            key={item}
                            href={link}
                            className={`text-lg font-semibold capitalize ${
                                pathname === link ? "text-[#ff764d]" : "text-black hover:text-gray-600"
                            }`}
                        >
                            {item}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Linker;
