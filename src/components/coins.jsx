import { useEffect, useMemo, useState } from 'react';
export default function Coin(){
    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
    const options = useMemo(()=>{
        return {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '788d4c2c7cmsh6d917adc023661ep1519b7jsn94278f9cec63',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };
    }, [])
    const [coina, setCoina] = useState([]);
    const [color, setColor] = useState('')
    useEffect(()=>{
        fetch(url, options)
        .then(Response => Response.json())
        .then(data =>{
            const {coins} = data.data;
            const coinss = coins.slice(0, 10)
            setCoina(coinss)
            coinss.forEach(coin=>{
               let change = coin.change;
               change = Number(change);
              return  change <= +0 ? setColor('text-red-700') : setColor('text-green-700');
            })
        })
        .catch(error=>{
            console.log(error)
        });
    }, [options])
    return(
       <>
            <table className='w-full bg-[#1B1A17] rounded-md'>
                <thead className=''>
                    <tr className='w-full p-2 flex items-center justify-around text-left capitalise border-b-2 border-white border-opacity-25 gap-8 md:gap-0'>
                        <th className='uppercase'>No</th>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Marketcap</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {coina.map((coin)=>{
                        return(
                            <tr className='w-full flex items-center justify-around p-4 border-b-2 border-white border-opacity-25 text-left gap-8 md:gap-1' key={coin.rank}>
                            <td>{coin.rank}</td>
                            <td className='flex items-center'><div className='w-5'><img src={coin.iconUrl} alt="" className='w-full'/></div>{coin.symbol}</td>
                            <td className=''>{coin.name}</td>
                            <td>${coin.price.slice(0, 8)}</td>
                            <td className={`${color}`}>{coin.change}</td>
                            <td>${coin.marketCap}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
       </> 
    );
}