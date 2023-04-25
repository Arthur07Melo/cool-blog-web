import Layout from "@/components/layout"; 
import LatestsPosts from "@/components/latestsPosts";
import FirstSegment from "@/components/firstSegment";
import SecondSegment from "@/components/secondSegment";


export default function Home() {
  return (
  <Layout>
    <div className="w-full h-full flex flex-col items-center">
      <FirstSegment />
      <SecondSegment />
    </div>
  </Layout>
  )
}
