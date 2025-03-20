import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaXTwitter, FaYoutube, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="w-[85%] m-auto p-4 flex-wrap-">
            {/*Top*/}
            <div className="flex items-center justify-between">
                {/*Left*/}
                <div className="flex flex-col gap-16">
                    <div className="">
                        <h1 className="text-5xl font-bold ">Ableton</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-bold ">
                            <Link href="" className="flex gap-2 font-semibold text-lg">
                                <p>Register Live, Push or Move</p>
                                <span>{'>'}</span>
                            </Link>
                            <Link href="" className="flex gap-2 font-semibold text-lg">
                                <p>About Ableton</p>
                                <span>{'>'}</span>
                            </Link>
                            <Link href="" className="flex gap-2 font-semibold text-lg">
                                <p>Jobs</p>
                                <span>{'>'}</span>
                            </Link>
                            <div className="flex space-x-4 pt-4">
                                <FaFacebook size={30} color="#1877F2" />
                                <FaXTwitter size={30} />
                                <FaYoutube size={30} color="red" />
                                <FaInstagram size={30} color="purple" />
                                <FaTiktok size={30} color="black" />
                                <FaDiscord size={30} color="#5865F2" />
                            </div>
                        </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-lg">Community</h1>
                        <Link href="" className="flex gap-2 font-semibold text-lg">
                            <p>Find Ableton User Groups</p>
                            <span>{'>'}</span>
                        </Link>
                        <Link href="" className="flex gap-2 font-semibold text-lg">
                            <p>Find Certified Training</p>
                            <span>{'>'}</span>
                        </Link>
                        <Link href="" className="flex gap-2 font-semibold text-lg">
                            <p>Become a Certified Trainer</p>
                            <span>{'>'}</span>
                        </Link>
                    </div>
                </div>
                {/*Middle*/}
                <div className="bg-red-600">Middle</div>
                {/*Right*/}
                <div className="bg-blue-600">Right</div>
            </div>
            {/*Bottom*/}
            <div className="flex justify-between px-0 pt-16">
                <div className="flex items-center justify-center gap-4">
                    <Link href="/" className="text-sm font-semibold">Contact Us</Link>
                    <Link href="/" className="text-sm font-semibold">Press Resources</Link>
                    <Link href="/" className="text-sm font-semibold">Legal Info</Link>
                    <Link href="/" className="text-sm font-semibold">Corporate Information</Link>
                    <Link href="/" className="text-sm font-semibold">Privacy Policy</Link>
                    <Link href="/" className="text-sm font-semibold">Cookie Settings</Link>
                    <Link href="/" className="text-sm font-semibold">Imprint</Link>
                </div>
                <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm">Made in Berlin</h4>
                    <Image src="/logo.png" alt="logo" width={40} height={40} />
                </div>
            </div>
        </div>
    )
}
export default Footer
