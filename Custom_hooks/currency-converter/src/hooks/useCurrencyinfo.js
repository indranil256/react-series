import { useEffect, useState} from 'react'

function useCurrencyinfo(currency) {
    const [data, setData] = useState({})
  useEffect(()=>{
    // get api call value in string format convert it into json
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((data) => data.json())
    .then((res) => setData(res[currency]) )
  }, [currency])

  return data;
}

export default useCurrencyinfo