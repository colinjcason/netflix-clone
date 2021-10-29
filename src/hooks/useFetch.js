import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url, key, endpoint) => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${url}${endpoint}`, {
      params: {
        api_key: key
      }
    })
    .then(res => setData(res.data.results))
    console.log(data)
  }, [])

  return { data }
}

export default useFetch
