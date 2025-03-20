import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaXTwitter, FaYoutube, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="w-[90%] max-w-7xl mx-auto p-6">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row md:justify-between gap-8">
                {/* Left Section */}
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl font-bold">Ableton</h1>

                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg">Explore</h2>
                        <Link href="#" className="flex items-center gap-2 text-md">
                            Register Live, Push or Move <span>{'>'}</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-2 text-md">
                            About Ableton <span>{'>'}</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-2 text-md">
                            Jobs <span>{'>'}</span>
                        </Link>
                    </div>

                    <div className="flex space-x-4 pt-4">
                        <FaFacebook size={25} className="text-blue-600" />
                        <FaXTwitter size={25} />
                        <FaYoutube size={25} className="text-red-600" />
                        <FaInstagram size={25} className="text-pink-500" />
                        <FaTiktok size={25} />
                        <FaDiscord size={25} className="text-indigo-500" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg">Community</h2>
                        <Link href="#" className="flex items-center gap-2 text-md">
                            Find Ableton User Groups <span>{'>'}</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-2 text-md">
                            Find Certified Training <span>{'>'}</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-2 text-md">
                            Become a Certified Trainer <span>{'>'}</span>
                        </Link>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="w-full md:w-1/3 flex flex-col justify-center items-start p-16 gap-8 ">
                    <div className="flex flex-col gap-2 ">
                        <h2 className="font-bold text-lg ">Education</h2>
                        <Link href="#" className="flex items-center gap-2 text-md">
                            Offers for students and teachers <span>{'>'}</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-2 text-md">
                            Ableton for the Classroom <span>{'>'}</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-2 text-md">
                            Ableton for Colleges and Universities <span>{'>'}</span>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2  ">
                        <h2 className="font-bold text-lg">Language and Location</h2>
                        <div className="flex gap-1">
                            {/* Language Dropdown */}
                            <div className="relative">
                                <select className="font-semibold h-10  px-4 pr-8 py-2 bg-[#EEEEEE] text-black focus:outline-none text-xs appearance-none">
                                    <option>English</option>
                                    <option>French</option>
                                    <option>German</option>
                                </select>
                                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-black text-xs">▼</span>
                            </div>

                            {/* Country Dropdown */}
                            <div className="relative">
                                <select className=" font-semibold h-10 w-40  px-4 pr-8 py-2 bg-[#EEEEEE] text-black focus:outline-none text-xs appearance-none">
                                    <option>Tunisia</option>
                                    <option>Germany</option>
                                    <option>France</option>
                                </select>
                                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-black text-xs">▼</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/3 bg-blue-600 h-20 flex justify-center items-center text-white">
                    Right Content
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-10 gap-4">
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-semibold">
                    <Link href="#">Contact Us</Link>
                    <Link href="#">Press Resources</Link>
                    <Link href="#">Legal Info</Link>
                    <Link href="#">Corporate Information</Link>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Cookie Settings</Link>
                    <Link href="#">Imprint</Link>
                </div>

                <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm">Made in Berlin</h4>
                    <Image src="/logo.png" alt="logo" width={30} height={30} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
