import Link from "next/link"

export default function Navbar() {
    return (
        <div className="flex justify-between p-3 text-lg bg-gray-950 text-gray-300 px-5">
            <div>
                <Link className="text-xl" href="/">Logo</Link>
            </div>
            <div className="flex gap-3">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="">#</Link>
            </div>
        </div>
    )
}