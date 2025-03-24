"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
    IconBrandFacebook,
    IconBrandX,
    IconBrandYoutube,
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandDiscord,
} from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {PlaceholdersAndVanishInput} from "@/components/ui/placeholders-and-vanish-input";

const links = [
    { title: "Instagram", icon: <IconBrandInstagram className="h-full w-full text-neutral-500" />, href: "#" },
    { title: "Discord", icon: <IconBrandDiscord className="h-full w-full text-neutral-500" />, href: "#" },
    { title: "TikTok", icon: <IconBrandTiktok className="h-full w-full text-neutral-500" />, href: "#" },
    { title: "YouTube", icon: <IconBrandYoutube className="h-full w-full text-neutral-500" />, href: "#" },
    { title: "Twitter", icon: <IconBrandX className="h-full w-full text-neutral-500" />, href: "#" },
    { title: "Facebook", icon: <IconBrandFacebook className="h-full w-full text-neutral-500" />, href: "#" },
];

const Footer = () => {
    const placeholders = [
        "What's the first rule of Fight Club?",
        "Please Write your Email.",
        "Tell me a joke!!!",
        "Write a Javascript method to reverse a string.",
        "How to assemble your own PC?",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <footer className="mt-16 border-t border-gray-300 text-gray-800">
            <div className="w-[90%] max-w-7xl mx-auto py-12 px-6">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Section */}
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold">Ableton</h1>

                        <div className="space-y-2">
                            <h2 className="font-semibold text-lg">Explore</h2>
                            <Link href="#" className="block text-md hover:text-blue-600">Register Live, Push or Move &gt;</Link>
                            <Link href="#" className="block text-md hover:text-blue-600">About Ableton &gt;</Link>
                            <Link href="#" className="block text-md hover:text-blue-600">Jobs &gt;</Link>
                        </div>

                        <div className=" justify-center hidden xl:flex ">
                            <FloatingDock items={links} />
                        </div>

                        <div className="space-y-2">
                            <h2 className="font-semibold text-lg">Community</h2>
                            <Link href="#" className="block text-md hover:text-blue-600">Find Ableton User Groups &gt;</Link>
                            <Link href="#" className="block text-md hover:text-blue-600">Find Certified Training &gt;</Link>
                            <Link href="#" className="block text-md hover:text-blue-600">Become a Certified Trainer &gt;</Link>
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="font-semibold text-lg">Education</h2>
                            <Link href="#" className="block text-md hover:text-blue-600">Offers for students and teachers &gt;</Link>
                            <Link href="#" className="block text-md hover:text-blue-600">Ableton for the Classroom &gt;</Link>
                            <Link href="#" className="block text-md hover:text-blue-600">Ableton for Colleges and Universities &gt;</Link>
                        </div>

                        <div className="space-y-2">
                            <h2 className="font-semibold text-lg">Language & Location</h2>
                            <div className="flex flex-wrap gap-3">
                                {/* Language Dropdown */}
                                <select className="border px-3 py-2 rounded-md text-sm focus:outline-none">
                                    <option>English</option>
                                    <option>French</option>
                                    <option>German</option>
                                </select>
                                {/* Country Dropdown */}
                                <select className="border px-3 py-2 rounded-md text-sm focus:outline-none">
                                    <option>Tunisia</option>
                                    <option>Germany</option>
                                    <option>France</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="space-y-4">
                        <h2 className="font-semibold text-lg">Sign up to our newsletter</h2>
                        <p className="text-gray-600 text-sm">
                            Enter your email to stay updated with the latest offers, tutorials, downloads, and more.
                        </p>
                        <div className="flex">
                            <PlaceholdersAndVanishInput
                                placeholders={placeholders}
                                onChange={handleChange}
                                onSubmit={onSubmit}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                        <Link href="#" className="hover:text-blue-600">Contact Us</Link>
                        <Link href="#" className="hover:text-blue-600">Press Resources</Link>
                        <Link href="#" className="hover:text-blue-600">Legal Info</Link>
                        <Link href="#" className="hover:text-blue-600">Corporate Info</Link>
                        <Link href="#" className="hover:text-blue-600">Privacy Policy</Link>
                        <Link href="#" className="hover:text-blue-600">Cookie Settings</Link>
                        <Link href="#" className="hover:text-blue-600">Imprint</Link>
                    </div>

                    <div className="flex items-center gap-2 mt-4 sm:mt-0">
                        <h4 className="font-semibold">Made in Berlin</h4>
                        <Image src="/logo.png" alt="logo" width={30} height={30} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
