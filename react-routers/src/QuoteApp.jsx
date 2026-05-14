import { useState } from 'react'
import {useEffect } from 'react'
import QuoteCard from './QuoteCard'

function QuoteApp() {
  const [quote, setQuotes] = useState(null)
  const [loading, setLoading]=useState(true)
  const [error,setError]=useState(null)//xatolik korish uchun

  const getnewQuote=async ()=>{
    setLoading(true)
    setError(null)
    try{
      //keling, eng ishonchli ochiq manzilni sinaymiz
      const res=await fetch('https://dummyjson.com/quotes/random');
      const data =await res.json();

      setQuotes({
        content:data.quote,
        author:data.author
      });
    } catch (err){
      setError('Error❌');
      console.error('Xato tafsiloti:', err);
    }
    setLoading(false)
  };

  useEffect(()=>{
    getnewQuote();
  }, []);

//   useEffect(()=>{
//     if(quote){
//       const ranglar =['#1abc9c','#3498DB','#9B59B6','#f1c40f,"#e67e22',"#e74c3c"];
//       const tasodifiyrang=ranglar[Math.floor(Math.random()* ranglar.length)];
//       document.body.style.backgroundColor=tasodifiyrang;
//       document.body.style.transition="0.5s";
//     }

//   },[quote]);

  return (
    <div style={{maxWidth:"600px", margin:'50px auto', textAlign:"center"}}>
      <h1 style={{color:'#fff'}}>Kun Hikmati</h1>

      {loading && <p>Loading....</p>}

      {error && <p style={{color:"red"}}>{error}</p>}

      {!loading && !error && quote &&(
        <QuoteCard matn={quote.content} muallif={quote.author}/>
      )}

      <button onClick={getnewQuote} style={{marginTop:"20px",padding:"10px"}}>
        Yangi hikmat
      </button>
    </div>
  )
}

export default QuoteApp
