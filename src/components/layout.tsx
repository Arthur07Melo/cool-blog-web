import Footer from "./footer"
import Navbar from "./navbar"

type layoutProps = {
    children: React.ReactNode
}

export default function Layout ({ children }: layoutProps){
    return (
        <div className="w-screen h-screen flex flex-col justify-between">
            <Navbar />
            <main className={`w-full h-full bg-gradient-to-tr from-slate-300 via-gray-500 to-blue-950`}>{ children }</main>
            <Footer /> 
        </div>
    )
}