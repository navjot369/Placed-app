import Image from 'next/image';

export default function Section3() {
    return (<div className="grid grid-cols-[1fr] md:grid-cols-[2fr_1px_3fr] p-4  mx-auto max-w-6xl my-20">
        <div className="text-3xl sm:text-5xl font-bold px-2 text-center flex items-center justify-center h-full">Tech Stack you will Build</div>
        <div className="bg-[#ff9635] shrink-0 w-1 hidden md:block"></div>
        <div className="flex flex-nowrap justify-evenly py-4 h-auto lg:h-32  w-full">
            <Image src="/Images/unnamed.png"   className="mx-2 w-1/6" width="100" height="100" alt="Tech Stack"/>
            <Image src="/Images/unnamed-2.png" className="mx-2 w-1/6" width="100" height="100" alt="Tech Stack"/>
            <Image src="/Images/unnamed-3.png" className="mx-2 w-1/6" width="100" height="100" alt="Tech Stack"/>
            <Image src="/Images/unnamed-4.png" className="mx-2 w-1/6" width="100" height="100" alt="Tech Stack"/>
            <Image src="/Images/unnamed-5.png" className="mx-2 w-1/6" width="100" height="100" alt="Tech Stack"/>
        </div>
    </div>);
}