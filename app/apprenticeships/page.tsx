import React from 'react'
import Image from "next/image";
import {TracingBeam} from "@/components/ui/tracing-beam";


const Apprenticeships = () => {
    return (

        <div className="p-4 max-w-3xl ml-[10%]">
            <TracingBeam className="">
                {/*Top image*/}
            <div className="flex flex-col gap-6">
                <h1 className="font-bold text-4xl md:text-5xl">Apprenticeships at Ableton</h1>
                <h3 className="font-bold text-base md:text-lg">What are they and what do you need to get started?</h3>
                <p className="text-lg md:text-xl leading-7 md:leading-8">
                    Dual apprenticeship programs have a long tradition in Germany, and they play an important role in the country’s economy. The programs are a proven stepping stone towards a meaningful career without the need for a university degree. They give you the chance to apply theoretical knowledge learned in a vocational school to tasks in the workplace, while you divide your time between class and office days.
                </p>
                <Image src="/apprenticeships-1.jpg" alt="" className="mt-4" width={700} height={700} />
            </div>
            {/*Bottom image*/}
            <div className="mt-8 mb-16">
                <div className="space-y-6 md:space-y-8">
                    <p className="text-lg md:text-xl leading-7 md:leading-8">
                        At Ableton, you'll work towards the Office Management Assistant apprenticeship over two and a half years, developing your professional and personal skills in different teams. We look for people who are highly motivated to work in a commercial office environment, with an excellent level of German and very good English. It’s important that you’re eager to learn, organized in your work, and communicative when collaborating with others. Plus, you should be ready to get the most out of your development through giving and receiving feedback. You can expect a relaxed, professional atmosphere with a dynamic team of people who love music in return.
                    </p>
                    <p className="text-lg md:text-xl leading-7 md:leading-8">
                        If this sounds like you, feel free to have a look at our detailed information in German <span className="text-[#0000ff]">here</span>. And please share this page with anyone who might be interested to help us find our future colleagues!
                    </p>
                </div>
                <Image src="/apprenticeships-2.jpg" alt="" className="mt-4" width={700} height={700} />
            </div>
            </TracingBeam>

        </div>

    )
}
export default Apprenticeships
