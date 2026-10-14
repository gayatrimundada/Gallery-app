import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const App = () => {


  const [data, setdata] = useState([])

  const [index, setindex] = useState(1)

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
    setdata(response.data)
    console.log(response.data)

  }





  useEffect(function () {
    getdata()
  }, [index])
  let printuserdata = <h3 className='text-gray-400 text-xs absolute top=1/2 left=1/2 translate-x-1 translate-y-1'> Loading...</h3>

  if (data.length > 0) {
    printuserdata = data.map(function (e, idx) {
      return <div className='h-50 w-44    bg-white text-black  ' key={idx}>
        <a href={e.url} target='_blank'>
          <div className=' h-40 w-44 overflow-hidden bg-white rounded-2xl'>
            <img className='h-full w-full object-cover py-1 px-1 ' src={e.download_url} alt="" />
          </div>
          <h3 className='font-bold text-lg px-0.5 py-2 text-center'>{e.author}</h3>


        </a></div>

    })
  }




  return (
    <div className='bg-black h-screen p-4 overflow-auto text-white' >
      <div className='flex flex-wrap gap-4' > {printuserdata}</div>

      <div className=' flex gap=10 justify-center items-center p-4'>
        <button onClick={() => {
          if(index> 1){
            setindex(index-1)
            setdata([])
          }

        }} className='bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold '>Prev</button>
        
        <h4> Page {index}</h4>
        <button onClick={() => {
          setindex(index+1)
         setdata([])


        }} className='bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold '>next</button>
      </div>

    </div>
  )
}

export default App