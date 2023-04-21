

export default function Loading() {
    return (
        <>
        {[...Array(5).keys()].map((el) => (
            <div key={el} className="flex flex-col w-2/4 gap-2">
                <div className="flex flex-col gap-2">
                    <div className="bg-slate-300 rounded-sm max-w-[13rem] h-5 animate-pulse"></div>
                    <div className="bg-slate-300 rounded-sm h-16 animate-pulse"></div>
                </div>
                
            </div>
            )
        )}
        </>
    )
}