import Post from './Post'
const News = ()=>{
    return(
        <>
            <section className="w-screen p-5 lg:px-20 text-white py-8 mt-4" id='Blog'>
                <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col items-center text-center">
                        <h2 className='text-3xl md:text-4xl font-bold mb-2'>News on cryptocurrency</h2>
                        <p className='font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloribus culpa eius sed, error quae?</p>
                    </div>
                    <div className="w-full">
                        <Post />
                    </div>
                </div>
            </section>
        </>
    );
}

export default News;