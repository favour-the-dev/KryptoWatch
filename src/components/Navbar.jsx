import {SiCoinmarketcap} from 'react-icons/si';
import {CiMenuFries} from 'react-icons/ci';
import {AiOutlineClose} from 'react-icons/ai';
import { useState, useEffect } from 'react';
export default function Navbar(){
    const [open, setOpen] = useState(false);
    const [fixed, setfixed] = useState('');
    function handleScroll(){
        const scroll = window.scrollY;
        if(scroll > 0){
            return setfixed('sticky top-[-1px] left-0 h-fit shadow-md')
        }else{
            return setfixed('relative h-fit')
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)

        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return(
        <>
            <header className={`w-screen ${fixed} bg-black p-5 lg:px-20`}>
                <div className={`w-full text-white flex items-center justify-between`}>
                    <div className='flex items-center justify-between w-full lg:w-fit'>
                        <div className='flex items-center text-white'>
                            <div className='bg-prim text-white w-fit p-1 text-center mr-1 rounded-full text-xl'>
                            <SiCoinmarketcap />
                            </div>
                            <p className='text-2xl'>KryptoWatch</p>
                        </div>
                        <div className='text-white font-bold text-xl lg:hidden z-40' onClick={()=>{
                            setOpen(!open)
                        }}>
                            {!open? <CiMenuFries /> : <AiOutlineClose />}
                        </div>
                    </div>
                    <div className={`flex flex-col absolute z-30 lg:static bg-black ${open? 'top-0' : 'top-[-500%]'} lg:py-0 py-4 w-screen h-fit lg:flex-row items-center lg:justify-around gap-4 lg:w-2/3 right-0 duration-200 ease-linear lg:duration-0`}>
                        <div className='flex flex-col lg:flex-row items-center py-4 lg:py-0 gap-8 lg:gap-4'>
                        <a href="#" className='hover:text-white'>Home</a>
                        <a href="#market" className='text-gray-200 hover:text-white'>Market</a>
                        <a href="#Blog" className='text-gray-200 hover:text-white'>Blog</a>
                        <a href="#" className='text-gray-200 hover:text-white'>Feature</a>
                        </div>
                        <button className='text-center capitalize bg-prim bg-opacity-25 text-prim border-2 border-prim px-4 py-1 rounded-lg hover:bg-opacity-100 hover:text-white duration-150 ease-in'>sign up</button>
                    </div>
                </div>
            </header>
        </>
    )
}