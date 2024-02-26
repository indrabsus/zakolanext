import Image from "next/image";

export default function Loading() {
    return <div className="flex justify-center">
        <Image src="/loading.gif" alt="loading" width={500} height={500}/>
       
    </div>
}