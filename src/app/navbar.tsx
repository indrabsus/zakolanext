import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faTag, faEllipsisVertical, faPaperclip, faBars } from '@fortawesome/free-solid-svg-icons'; // Import ikon yang ingin Anda gunakan


 const Navbar: React.FC = () => {
    const pathname = usePathname();
    const { push } = useRouter();
    const [buka, setBuka] = useState<boolean>(false); // State untuk menu "More"

    return (
        <nav className="py-4 px-4 border">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <div>
                        <img src="/assets/logo/logo.png" alt="logo" />
                    </div>
                </Link>
                <FontAwesomeIcon icon={faBars} className="text-2xl cursor-pointer" />
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border">
                <ul className="flex justify-between mx-5">
                
                    <li>
                        <div className="flex justify-center flex-col items-center gap-1 text-base cursor-pointer text-blue">
                        <FontAwesomeIcon icon={faHouse} />
                            <span className="text-grey text-base font-normal">Home</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex justify-center flex-col items-center gap-1 text-base cursor-pointer">
                        <FontAwesomeIcon icon={faTag} />
                            <span className="text-grey opacity-50 text-base font-normal">Jurusan</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex justify-center flex-col items-center gap-1 text-base cursor-pointer">
                        <FontAwesomeIcon icon={faPaperclip} />
                            <span className="text-grey opacity-50 text-base font-normal">Ekskul</span>
                        </div>
                    </li>
                    <li>
                        <div onClick={() => setBuka(!buka)} className="flex justify-center flex-col items-center gap-1 text-base cursor-pointer">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                            <span className="text-grey opacity-50 text-base font-normal">Lebih</span>
                        </div>
                    </li>
                </ul>
                {buka && ( // Kondisional untuk menampilkan menu "More"
                    <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-4 w-3/4">
                        <button className="grow bg-white px-8 py-4 font-bold text-grey rounded-full text-sm">Masuk</button>
                        <button className="grow bg-blue-500 px-8 py-4 font-bold text-grey rounded-full text-sm">Daftar</button>
                    </div>
                )}
            </div>
        </nav>
    );
}
export default Navbar