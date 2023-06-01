import {BiCoinStack} from 'react-icons/bi';
import {BsFillShareFill} from 'react-icons/bs';
import {AiOutlineStock} from 'react-icons/ai';

export default function WhyChoose(){
    return(
        <>
            <section className="w-screen text-white p-5 py-8 lg:px-20">
                <div className="w-full flex flex-col items-center justify-center text-center gap-8 p-2">
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-2xl lg:text-4xl font-bold">Why kryptoWatch</h2>
                        <p className=" font-light text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam explicabo rem reprehenderit, optio animi ea.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-2">
                        <div className='flex gap-2 w-full md:w-1/3'>
                            <div className='w-fit h-fit bg-yellow-600 p-3 rounded-md text-xl'> <BiCoinStack /> </div>
                            <div className="flex flex-col items-start text-left">
                                <h3 className='font-semibold'>Marketplace to see all coins activities</h3>
                                <p className='font-light text-gray-300 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum mollitia neque deserunt totam tempore libero?</p>
                            </div>
                        </div>
                        <div className='flex gap-2 w-full md:w-1/3'>
                            <div className='w-fit h-fit bg-purple-600 p-3 rounded-md text-xl'><BsFillShareFill /></div>
                            <div className="flex flex-col items-start text-left">
                                <h3 className='font-semibold'>Marketplace to see all coins activities</h3>
                                <p className='font-light text-gray-300 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, quibusdam dignissimos? Omnis, suscipit. Ex, cupiditate!</p>
                            </div>
                        </div>
                        <div className='flex gap-2 w-full md:w-1/3'>
                            <div className='w-fit h-fit bg-red-500 p-3 rounded-md text-xl'><AiOutlineStock /></div>
                            <div className="flex flex-col items-start text-left">
                                <h3 className='font-semibold'>Marketplace to see all coins activities</h3>
                                <p className='font-light text-gray-300 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui enim esse eaque sunt nihil illo?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
