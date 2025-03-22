import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaXTwitter, FaYoutube, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="mt-8 border-t-2 border-gray-200">
        <div className="w-[90%] max-w-7xl mx-auto p-6 mt-4">
            {/* Top Section */}
            <div className="flex flex-wrap sm:flex-nowrap justify-between gap-8 items-start">
                {/* Left Section */}
                <div className="flex flex-col gap-6 w-full sm:w-1/3">
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

                {/* Middle Section  */}
                <div className="w-full sm:w-1/3 flex flex-col items-start p-6 sm:p-0 gap-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg">Education</h2>
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
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg">Language and Location</h2>
                        <div className="flex gap-1 flex-wrap">
                            {/* Language Dropdown */}
                            <div className="w-1/2 sm:w-auto">
                                <div className="flex items-center bg-[#EEEEEE] px-4 py-2 h-8 w-full text-black text-xs font-semibold">
                                    <select className="w-full bg-transparent focus:outline-none appearance-none">
                                        <option>English</option>
                                        <option>French</option>
                                        <option>German</option>
                                    </select>
                                    <span className="ml-2 pointer-events-none">▼</span>
                                </div>
                            </div>

                            {/* Country Dropdown */}
                            <div className="w-1/2 sm:w-auto">
                                <div className="flex items-center bg-[#EEEEEE] px-4 py-2 h-8 w-full text-black text-xs font-semibold">
                                    <select className="w-full bg-transparent focus:outline-none appearance-none">
                                        <option>Tunisia</option>
                                        <option>Germany</option>
                                        <option>France</option>
                                    </select>
                                    <span className="ml-2 pointer-events-none">▼</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Responsive Input */}
                <div className="w-full sm:w-1/3 flex flex-col items-start gap-4">
                    <h2 className="font-bold text-lg">Sign up to our newsletter</h2>
                    <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys, and more.</p>
                    <div className="flex w-full">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="bg-[#EEEEEE] h-10 flex-grow px-2"
                        />
                        <button className="bg-[#0000ff] text-white h-10 px-4 font-semibold text-lg whitespace-nowrap">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-10 gap-4">
                <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm font-semibold">
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
        </div>
    );
};

export default Footer;
