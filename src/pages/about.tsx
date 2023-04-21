import Layout from "@/components/layout";



export default function About() {
    return(
        <Layout>
            <div className="flex flex-col items-center justify-center pt-10">
                <p className="max-w-[75rem] text-lg">
                This website was created with the purpose of serving a personal portfolio.
                It should be a template for a forum page connected to an API that has users and posts, and some other features as like,
                that is represented by a one to one connection in the database.
                </p>
            </div>
        </Layout>
    )
}