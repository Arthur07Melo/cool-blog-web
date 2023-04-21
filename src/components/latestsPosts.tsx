import api from "@/lib/api";
import Loading from "./loading";
import Link from "next/link";
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
        <div className="w-2/4 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold pb-2">Latest Posts</h1>
            <div className="flex flex-col justify-center items-center gap-3 w-full">
                {isLoading && 
                    <Loading />
                }

                {!isLoading && posts?.map((post, id) => (
                    <div key={id} className="flex flex-col gap-3 border rounded-md w-[25rem] border-gray-500 p-3">
                        <Link className="text-xl font-semibold hover:border-b border-gray-900 w-fit" href="/">- {post.title}</Link>
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