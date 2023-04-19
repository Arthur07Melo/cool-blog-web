import Layout from "@/components/layout"; 
import Trending from "@/components/trending";


export default function Home() {
  return (
  <Layout>
    <div className="w-full h-full flex flex-col p-5">
      <Trending />
    </div>
  </Layout>
  )
}
