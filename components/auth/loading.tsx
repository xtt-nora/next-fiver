import Image from "next/image";

export const Loading = ()=>{
    return (
        <div className=" h-full w-full flex justify-center item-center ">
            <Image src="/logo.svg" alt='loading' width={120} height={120} className="animate-pulse duraion-700"/>
        </div>
    )
}