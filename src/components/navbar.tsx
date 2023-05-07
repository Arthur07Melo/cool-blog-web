import mainLogo from '../../public/mainLogo.png';
import Image from "next/image"
import Link from "next/link"
import LoginDialog from './loginDialog';
import SignupDialog from './signupDialog';


export default function Navbar() {
    return (
        <div className="flex flex-wrap justify-between items-center  text-lg  bg-main-blue text-gray-300 px-10">
            <Link className="text-xl" href="/"><Image src={mainLogo} height={52} alt='logo' /></Link>
            <div className="flex flex-wrap gap-3">
                <LoginDialog />
                <SignupDialog />
                <Link href="/categories">categorias</Link>
                <Link href="/about">sobre</Link>
            </div>
        </div>
    )
}