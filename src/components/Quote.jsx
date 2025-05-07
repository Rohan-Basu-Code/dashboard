import { useEffect, useState } from 'react';

export default function Quote({errorHandle}){
    const quoteurl = "https://api.quotable.io/random?maxLength=50";
    const [quote,setQuote]= useState(null);
    const [isQLoading, setisQloading] = useState(true);

    useEffect(()=>{
        const fetchQuote= async()=>{
            try{
                const response = await fetch(quoteurl);
                const qData = await response.json();
                setQuote(qData);
                setisQloading(false);
            }
            catch(err){
                console.error("Quote fetch failed:", err);
                errorHandle('quote');
                setisQloading(false);
            }
        }
        fetchQuote();
    },[])

    return(
        <div className='flex w-full items-center h-full'>
        {
            isQLoading?(
                <p className='text-center'>Inspiration Inbound...</p>
            ):(
                <div>
                <p>{quote.content}</p>
                <p className='text-right'>-{quote.author}</p>
                </div>
            )
        }
        
        </div>
    )
}