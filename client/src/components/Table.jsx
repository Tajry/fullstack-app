import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Table = () => {
    const [data , setData] = useState([]);
    const [reload , setReload] = useState(0);


    const handledel = (event)=>{

        const id = event.target.id
        if (confirm("Do you want ot Delete ") == true) {
            fetch(import.meta.env.VITE_APP_API+'/delete/'+id).then(res =>res.json()).then((res)=>{
            // console.log(res)
            if (res.msg == 'delete successfully') {
                alert(res.msg)
                setReload(reload => reload +1)
            }
            
        })
        }
    }

    const conf = (event)=>{

        const id = event.target.id
        const confirmed = window.confirm("Do you want to Edit !!!")
        // console.log(confirmed)
        if (confirmed) {
            window.location = '/edit/'+id
        }
    }

    



    useEffect(()=>{
        fetch(import.meta.env.VITE_APP_API+'/show').then(res =>res.json()).then((res)=>{
            // console.log(res)
            setData(res)
        })
    },[reload])
  return (
    <div className='flex flex-col  p-5 '>
              
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            First Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Age
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tel
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ManageMent
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {data?.map((e)=>{
                        return(

                            <tr key={e.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {e.id}
                                </th>
                                <td className="px-6 py-4">
                                    {e.fname}
                                </td>
                                <td className="px-6 py-4">
                                    {e.lname}
                                </td>
                                <td className="px-6 py-4">
                                    {e.address}
                                </td>
                                <td className="px-6 py-4">
                                    {e.gender}
                                </td>
                                <td className="px-6 py-4">
                                    {e.age}
                                </td>
                                <td className="px-6 py-4">
                                    {e.tel == null ? 'null' : e.tel}
                                </td>
                                <td className="px-6 py-4 d-flex justify-center">
                                    <Link onClick={conf}  id={e.id} className='text-white bg-sky-500 p-2 rounded-md mx-3 
                                    hover:shadow-md'>Edit</Link>
                                    <button onClick={handledel} id={e.id} className='text-white bg-rose-600 p-2 rounded-md mx-3
                                    hover:shadow-md'>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Table