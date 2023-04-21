

export default function Loading() {
    return (
        <>
        {[...Array(5).keys()].map((el) => (
            <div key={el} className="flex flex-col gap-2">
                <div className="bg-gray-200 rounded-sm max-w-[12rem] h-5 animate-pulse"></div>
                <div className="bg-gray-200 rounded-sm max-w-[25rem] h-14 animate-pulse"></div>
            </div>
            )
        )}
        </>
    )
}