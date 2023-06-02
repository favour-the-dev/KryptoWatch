import {BsInstagram, BsTwitter, BsLinkedin, BsYoutube} from 'react-icons/bs';
export default function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <>
            <footer className="w-screen bg-[#100F0F] p-5 lg:px-20 flex flex-col gap-8 text-white mt-4">
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 pb-4 md:items-center md:justify-around border-b-2 border-opacity-10 border-gray-200">
                    <div className="flex justify-around md:w-1/2">
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold text-lg mb-2">Company</h3>
                            <a href="#" className="text-sm text-gray-200 hover:text-white">Home</a>
                            <a href="#" className="text-sm text-gray-200 hover:text-white">Market</a>
                            <a href="#" className="text-sm text-gray-200 hover:text-white">Features</a>
                            <a href="#" className="text-sm text-gray-200 hover:text-white">Blog</a>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold text-lg mb-2">Support</h3>
                            <a href="#" className="text-sm text-gray-200 hover:text-white">Help center</a>
                            <a href="#" className="text-sm text-gray-200 hover:text-white">Safety center</a>
                            <a href="#" className="text-sm text-gray-200 hover:text-white">Community Guidelines</a>
                        </div>
                    </div>
                    <div className="flex justify-around md:w-1/2">
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold text-lg mb-2">Legal</h3>
                            <a href="#" className="text-sm text-gray-200 hover:text-white">Cookie Policy</a>
                            <a href="#" className="text-sm text-gray-200 hover:text-white">Privacy Policy</a>
                            <a href="#" className="text-sm text-gray-200 hover:text-white">Terms of services</a>
                            <a href="#" className="text-sm text-gray-200 hover:text-white">Low Enhancement</a>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold text-lg mb-2">Install App</h3>
                            <div><img src={''} alt="" /></div>
                            <div><img src={''} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between lg:px-20">
                    <div className="font-semibold mb-2">&copy; {currentYear} KryptoWatch. All right reserved</div>
                    <div className="flex items-center gap-2">
                        <div className='bg-[#3D3C42] w-fit p-2 rounded-full hover:translate-y-2 duration-100 ease-linear'><BsInstagram /></div>
                        <div className='bg-[#3D3C42] w-fit p-2 rounded-full hover:translate-y-2 duration-100 ease-linear'><BsTwitter /></div>
                        <div className='bg-[#3D3C42] w-fit p-2 rounded-full hover:translate-y-2 duration-100 ease-linear'><BsLinkedin /></div>
                        <div className='bg-[#3D3C42] w-fit p-2 rounded-full hover:translate-y-2 duration-100 ease-linear'><BsYoutube /></div>
                    </div>
                </div>
                <div className='w-full text-center md:w-2/3 md:mx-auto'>
                        Designed <a href="https://dribbble.com/shots/17692742-CryptoWatch-Landing-Page/attachments/12851683?mode=media" className='text-gray-200 underline font-bold' target='blank_'>here</a>.
                        Developed by <a href="https://github.com/favour-the-dev?tab=repositories" className='text-gray-200 underline font-bold' target='blank_'>Favour</a> with Love❤️ 
                    </div>  
            </footer>
        </>
    );
}