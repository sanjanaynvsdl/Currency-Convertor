import { useState } from 'react'
import './App.css'
import './components/Inputbox';
import {Inputbox} from './components/index.js';
import useCurrencyinfo from './hooks/useCurrencyinfo';

function App() {

  //1. Amount (which we need to convert - input field!)
  const [Amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState('inr');

  //2. To show the converted amount!
  const [convertAmount, setConvertedAmount]=useState(0)


  //3. I have designed a custom hook (where we return data) - Let's see how this is useful in this!
  //Call this
  const currencyInfo = useCurrencyinfo(from);

  //As, I need all the options
  const options=Object.keys(currencyInfo);

  const convert=()=> {
    setConvertedAmount(Amount*currencyInfo[to]);
  }

  //Implementing the swap method (echanging to-from)
  const swap=()=> {
    setFrom(to)
    setTo(from)
    setConvertedAmount(Amount)
    setAmount(convertAmount)
  }

  //Till NOw, Implemented all the functionalities!
  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{background:`url(https://media.istockphoto.com/id/528219721/vector/dollar-sign-for-background.jpg?s=612x612&w=0&k=20&c=V4AhDrXC5oidLiGJ6c0u-KH3iFmLh0lhQTTCbQ5JdIw=)`}}>
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <h1 className='text-black text-center font-bold p-3 text-3xl '>Currency Converter!</h1>
          
            <form onSubmit={(e)=>{
              // prevent this form to submitting to url's
              e.preventDefault()
              convert()
            }}>
              <div className='w-full mb-1'>
                <Inputbox
                label="from"
                amount={Amount}
                currencyOptions={options}
                onCurrencyChange={(currency)=> setFrom(currency)}
                onAmountChange={(Amount)=> setAmount(Amount)}
                selectedCurrency={from}
                />
              </div>
              <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'>
                <button onClick={swap}>Swap</button>
              </div>
              <div className='w-full mb-1'>
                <Inputbox
                label="to"
                amount={convertAmount}
                amountDisabled={true}
                currencyOptions={options}
                onCurrencyChange={(currency)=> setTo(currency)}
                selectedCurrency={to}
                />
              </div>
              <div>
                <button
                type='submit'
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-bold'>
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
