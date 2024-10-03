import React from 'react';
import { useId } from 'react';


//props from parent(App.jsx)
//Provided with de-fault values 
function Inputbox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency="usd",
    amountDisabled=false,
    currencyDisabled=false,
    className="",

}) {

    const id=useId();
    

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1-2'>
                <label  htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
                <input
                id="currency"
                type="number"
                className='outline-none w-full bg-transparent py-1.5'
                placeholder='Amount'
                disabled={amountDisabled}
                value={amount}
                onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                // 1.checking is the input is true then,converting a string to a number

                />
            </div>


            {/* 2. Right part of the input box */}
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>Currency Type</p>
             {/* Select field useddd - select a currency type */}
             <select 
             className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
             value={selectedCurrency}
             onChange={(e)=> {onCurrencyChange && onCurrencyChange(e.target.value)}}
             disabled={currencyDisabled}
             >
            {/* In the below function use only () after currency if we use {} we need to return. */}
            
            {currencyOptions.map((currency)=> (
                <option key={currency} value={currency}>{currency}</option>
            ))}
            
             </select>
            
            </div>
        </div>
        
    )

}

export default Inputbox;