import Coin from "./coins";
export default function Market(){
    return(
        <>
            <div className="w-screen mt-8 p-5 lg:px-20 text-white" id="market">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-col gap-2 justify-center items-center text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">Market Trends</h2>
                        <p className="text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste fuga eos id sapiente error harum.</p>
                    </div>
                    <div className="w-full md:w-2/3 overflow-x-scroll sm:overflow-hidden">
                        <Coin />
                    </div>
                </div>
            </div>
        </>
    );
}