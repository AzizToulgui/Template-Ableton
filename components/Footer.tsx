import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="">
            {/*Top*/}
            <div className="flex items-center justify-around">
                {/*Left*/}
                <div className="">Left</div>
                {/*Middle*/}
                <div className="">Middle</div>
                {/*Right*/}
                <div className="">Right</div>
            </div>
            {/*Bottom*/}
            <div className="flex justify-between p-4">
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
