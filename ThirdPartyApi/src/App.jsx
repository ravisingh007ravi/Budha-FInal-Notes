import { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {

  const [value, setValue] = useState([])
  const fetchData = async () => {
    try {
      const url = "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=5"
      const respose = await axios.get(url)

      console.log(respose?.data?.data?.data)
      setValue(respose?.data?.data?.data)
    }
    catch (err) {
      console.error(err?.message || 'server error')
    }

  }
  
  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <div className="bg-black min-h-screen text-white">
     {
      value.map((v,i)=>(
        <div key={i}>
          <img src={v?.thumbnail} alt="" />
        </div>
      ))
     }
    </div>
  )
}
