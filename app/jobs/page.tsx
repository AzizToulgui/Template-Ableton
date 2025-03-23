import React from 'react';
import { BackgroundLines } from "@/components/ui/background-lines";

const Jobs = () => {
    return (
        <div className="flex flex-col gap-6 w-full m-auto px-4">
            <BackgroundLines className="flex items-center justify-center w-full flex-col">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    Jobs at Ableton
                </h2>
            </BackgroundLines>
            <div className="w-full max-w-4xl mx-auto my-8 md:my-16 space-y-6 md:space-y-8 text-lg md:text-xl text-gray-800">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                    Working at Ableton means being a part of creating products that shape the future of music culture in a dynamic and diverse environment
                </h2>
                <p>
                    Here at Ableton, we come from a wide range of cultural and professional backgrounds. We work hard to foster an environment in which people can grow both personally and professionally. We believe that diverse groups of people make better teams. We’re committed to increasing diversity in our workplace and providing equal opportunity throughout our recruitment process. Because of this, we ask that you do not include a picture in your application documents. Thank you very much for your understanding.
                </p>
                <p>
                    If you want to apply for one of our open positions, we would be happy to receive your application through our application form. Please upload all necessary documents there.
                </p>
            </div>
            <div className="w-full max-w-4xl mx-auto text-left">
                <h3 className="text-xl font-bold text-gray-900">Commerce</h3>
                <ul className="mt-4 space-y-2">
                    <li>
                        <a href="#" className="text-blue-600 hover:underline text-lg font-medium">Group Accountant (d/f/m) &gt;</a>
                        <p className="text-gray-600 text-sm">Ableton AG / Germany</p>
                    </li>
                    <li>
                        <a href="#" className="text-blue-600 hover:underline text-lg font-medium">Referendar:in für die Wahlstation bzw. als Teil der Anwaltsstation (d/w/m) &gt;</a>
                        <p className="text-gray-600 text-sm">Ableton AG / Germany</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Jobs;
