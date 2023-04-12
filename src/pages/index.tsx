import Navbar from "@/components/navbar";
import Trending from "@/components/trending";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar />

      <div className="w-full h-full flex flex-col p-5">
        <Trending />
      </div>

    </main>
  )
}
