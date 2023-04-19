import api from "@/lib/api";
import Loading from "@/pages/loading";
import { useEffect, useState } from "react";

type posts = {
    id: number,
    title: string,
    description: string,
    created_at: string,
    userId: string
}[]

export default function Trending(){
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<posts>([]);

    useEffect(() => {
        api.get("/post")
        .then(res => {
            setPosts(res.data);
        }).catch(err => {
            setPosts([])
            console.log(err);
        }).finally(() => {
            setIsLoading(false);
        });
    }, [])

    return (
        <div>
            <h1 className="text-2xl font-bold pb-2">Trending Posts</h1>
            <div className="flex flex-col justify-center gap-3">
                {isLoading && 
                    <Loading />
                }

                {!isLoading && posts?.map((post, id) => (
                    <div key={id} className="border w-fit rounded-md border-gray-300 p-2">
                        <h1 className="text-lg font-semibold">- {post.title}</h1>
                        <p className="text-gray-800">{post.description}</p>
                    </div>
                ))}

                {posts.length === 0 && !isLoading && 
                    <h1>no posts available</h1>
                }
            </div>
        </div>
    )
}