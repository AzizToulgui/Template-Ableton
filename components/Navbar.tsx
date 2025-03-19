import React from 'react'
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-8 py-1 border-b-2 border-gray-200 ">
            <div className="flex items-center justify-center gap-10 inter">
                <Image src="/logo.png" alt="logo" width={65} height={65} />
                <Link href="/" className="font-semibold text-base">Live</Link>
                <Link href="/" className="font-semibold text-base">Push</Link>
                <Link href="/" className="font-semibold text-base">Move</Link>
                <Link href="/" className="font-semibold text-base">Note</Link>
                <Link href="/" className="font-semibold text-base">Link</Link>
                <Link href="/" className="font-semibold text-base">Shop</Link>
                <Link href="/" className="font-semibold text-base">Packs</Link>
                <Link href="/" className="font-semibold text-base">Help</Link>
                <Link href="/" className="text-[#ff764d] font-semibold text-base">More +</Link>

            </div>
            <div className="flex items-center gap-8">
                <Link href="/" className="text-[#0000ff] font-semibold text-xl">Try Live 12 for free</Link>
                <Link href="/" className="font-semibold">Log in or register</Link>
            </div>
        </div>
    )
}
export default Navbar
