import { useState, useEffect } from 'react'
import axios from 'axios'


export default function AllUser() {

  const [value, setValue] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [loading, setLoading] = useState(false)

  const fetchAPIData = async () => {
    try {
      setLoading(true)
      const url = `https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=${limit}`

      const response = await axios.get(url)

      setValue(response?.data?.data?.data || [])
      console.log(response?.data?.data?.data || [])
    }
    catch (err) { console.error(err?.message || 'Server Error') }
    finally { setLoading(false) }
  }

  useEffect(() => {
    fetchAPIData()
  }, [])

  return (
    <div className="bg-black h-screen text-9xl text-white">
      {loading && 'loading'}
    </div>
  )
}
