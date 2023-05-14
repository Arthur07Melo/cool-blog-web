import Footer from "./footer"
import Navbar from "./navbar"
import Head from "next/head"

type layoutProps = {
    children: React.ReactNode
}

export default function Layout ({ children }: layoutProps){
    return (
        <>
        <Head>
            <title>reviewers</title>
        </Head>
        <div className="w-screen h-screen flex flex-col justify-between">
            <Navbar />
            <main className={`w-full bg-gradient-to-tr from-slate-300 via-gray-500 to-blue-950`}>{ children }</main>
            <Footer /> 
        </div>
        </>
    )
}