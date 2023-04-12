import Post from "./post";


export default function Trending(){
    return (
        <div>
            <h1 className="text-2xl font-bold pb-2">Trending Posts</h1>
            <div className="flex flex-col justify-center gap-3">
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}