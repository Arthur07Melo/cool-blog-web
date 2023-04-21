import Layout from "@/components/layout"; 
import LatestsPosts from "@/components/latestsPosts";


export default function Home() {
  return (
  <Layout>
    <div className="w-full h-full flex flex-col items-center p-5">
      <LatestsPosts />
    </div>
  </Layout>
  )
}
