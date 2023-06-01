import {RiLeafFill} from 'react-icons/ri';
import {SiBinance} from 'react-icons/si';
import {FaBitcoin, FaLifeRing} from 'react-icons/fa';
export default function Hero(){
    return(
        <>
            <section className="main-sect w-screen p-5 lg:px-20 my-2 text-white">
                <div className="w-full flex flex-col items-center justify-center gap-8 py-12">
                    <div className="flex flex-col items-center gap-12 lg:w-2/3 text-center py-8 mt-4">
                        <h1 className="font-bold text-4xl md:text-5xl">Best Place to Monitor all Your Coins with Ease.</h1>
                        <p className="md:w-2/3 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam exercitationem, sint nobis impedit sit tempore qui at voluptate quas nihil.</p>
                        <button className="bg-prim text-white px-8 py-2 border-2 border-transparent duration-150 ease-in-out rounded-md hover:bg-opacity-25 hover:text-prim hover:border-2 hover:border-prim">Get Started</button>
                    </div>
                    <div className="border-t-2 border-opacity-25 p-4 font-bold text-xs sm:text-sm lg:text-3xl text-gray-500 border-b-2 border-gray-500 flex flex-wrap items-center justify-around w-full">
                        <div className='flex items-center md:gap-1 font-mono'>BITFINEX<RiLeafFill /></div>
                        <div>coinbase</div>
                        <div className='flex italic items-center md:gap-1'><FaBitcoin />bitcoin</div>
                        <div className='flex items-center md:gap-1'><FaLifeRing /> coinone</div>
                        <div className='flex items-center md:gap-1'><SiBinance />BINANCE</div>
                    </div>
                </div>
            </section>
        </>
    )
}