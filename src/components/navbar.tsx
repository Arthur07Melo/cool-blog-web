import mainLogo from '../../public/mainLogo.png';
import Image from "next/image"
import Link from "next/link"
import LoginDialog from './loginDialog';


export default function Navbar() {
    return (
        <div className="flex justify-between items-center p-5 text-lg h-[52px] bg-main-blue text-gray-300 px-10">
            <div>
                <Link className="text-xl" href="/"><Image src={mainLogo} height={52} alt='logo' /></Link>
            </div>
            <div className="flex gap-3">
                <LoginDialog />
                <Link href="/signup">cadastrar</Link>
                <Link href="/categories">categorias</Link>
                <Link href="/contact">contato</Link>
                <Link href="/about">sobre</Link>
            </div>
        </div>
    )
}