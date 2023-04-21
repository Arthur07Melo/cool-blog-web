import Navbar from "./navbar"

type layoutProps = {
    children: React.ReactNode
}

export default function Layout ({ children }: layoutProps){
    return (
        <div className="w-screen h-screen flex flex-col">
            <Navbar />
            <main className={`w-full h-full bg-gradient-to-tr from-slate-200 via-slate-300 to-slate-400`}>{ children }</main>
        </div>
    )
}