import Navbar from "./navbar"

type layoutProps = {
    children: React.ReactNode
}

export default function Layout ({ children }: layoutProps){
    return (
        <div className="w-screen h-screen flex flex-col">
            <Navbar />
            <main>{ children }</main>
        </div>
    )
}