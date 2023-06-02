import { useEffect, useMemo, useState } from "react";
import Card from "./Card";
export default function Post(){
    const url = 'https://crypto-news16.p.rapidapi.com/news/top/6';
    const [posts, setPost] = useState([]);
    const options = useMemo(()=>{
        return(
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '788d4c2c7cmsh6d917adc023661ep1519b7jsn94278f9cec63',
                    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
                }
            }
        );
    }, [])
    useEffect(()=>{
        fetch(url, options)
        .then(response => response.json())
        .then(data => setPost(data))
    }, [options])
    return(
        <>
            <div className="flex flex-col flex-wrap items-center lg:flex-row gap-8 justify-center">
                {posts.map((post, index)=>{
                    return(
                        <Card 
                            key={index}
                            title ={post.title}
                            body ={post.description}
                            url={post.url}
                            date = {post.date}
                        />
                    );
                })}
            </div>
        </>
    );
}