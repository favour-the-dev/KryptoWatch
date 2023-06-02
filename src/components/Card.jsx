export default function Card({title, body, url, date}){
    return(
        <>
            <div className="w-full lg:w-1/4 lg:h-72 flex flex-col gap-2 bg-[#1B1A17] text-white p-4 rounded-md hover:translate-y-2 duration-100 ease-in-out">
                <div className="text-sm bg-[#B799FF] w-fit p-1 rounded-full">Crypto News</div>
                <h2 className="font-bold text-xl hover:underline"><a href={url} target="blank_">{title}</a></h2>
                <p className="text-xs">{body}</p>
                <p className="text-xs font-semibold">{date}</p>
            </div>
        </>
    );
}