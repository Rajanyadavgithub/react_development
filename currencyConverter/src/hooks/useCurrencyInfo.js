import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setdata] = useState({})
    useEffect(() => {
        fetch( `https://api.apyhub.com/data/convert/currency/multiple`)
        .then((res) => res.json())
        .then((res) => setdata(res[currency]))
        console.log(data)
    }, [currency])

    return data
}

export default useCurrencyInfo;