import { useState, useEffect } from 'react'
import axios from 'axios'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


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
  }, [limit, page])



  return (
    <div className="bg-black min-h-screen  text-white">
      {/* top  */}

      <div className="pt-30 flex justify-between px-20">
        <h1></h1>
        <h1 className="text-3xl">All Users</h1>

        <select onClick={(e) => setLimit(e.target.value)} className="" name="" id="">
          {
            [5, 10, 25, 50, 100].map((v, i) =>
              <option key={i} className="text-black" value={v}>{v}</option>
            )
          }
        </select>
      </div>

      {/* card section  */}

      <div className="flex  flex-wrap justify-between  px-10 gap-5 mt-10">
        {
          value.length == 0 ?
            <div className="flex justify-center w-full items-center">
              <h1>Data Not Found</h1>
            </div>
            :
            value.map((item, index) =>
              <div key={index}><img src={item.picture.large} alt="" /></div>
            )

        }


      </div>

      {/* Pagination Section  */}
      <div className="flex items-center justify-center gap-3 mt-10">
        {/* Previous */}
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="flex items-center gap-2 px-4 py-2 rounded-lg 
               bg-gray-100 dark:bg-gray-800 
               text-gray-700 dark:text-gray-200
               hover:bg-blue-600 hover:text-white
               dark:hover:bg-blue-600
               transition-all duration-200
               disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <FiChevronLeft size={20} />
          <span>Previous</span>
        </button>

        {/* Page */}
        <div className="px-5 py-2 rounded-lg 
                  bg-blue-600 text-white 
                  font-semibold shadow-md">
          Page {page}
        </div>

        {/* Next */}
        <button
          onClick={() => setPage(page + 1)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg 
               bg-gray-100 dark:bg-gray-800 
               text-gray-700 dark:text-gray-200
               hover:bg-blue-600 hover:text-white
               dark:hover:bg-blue-600
               transition-all duration-200"
        >
          <span>Next</span>
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
