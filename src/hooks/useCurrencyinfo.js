import { useEffect,useState } from "react";


//This is my custom hook
//The data I fetch from api need to be stored! (here- it is stored in data)
function useCurrencyinfo(currency) {

    const [data,setData]=useState({});

    //This fetches data as every time the currency will change(so, we have added currency to dependency array!)
    //So, this api return date and usd, inr, list as I need only currency 
    //I explicitily mentioned to setData with only currency!
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=> 
            (res.json())
        )
        .then((res)=> 
            setData(res[currency])
        )
        //while using {} brakets make sure to return the data to the chain!
        // .then((res) => { return res.json() }) 
        // .then((res) => { setData(res[currency]) })
    },[currency]);

    console.log(data)
    return data



}

export default useCurrencyinfo;