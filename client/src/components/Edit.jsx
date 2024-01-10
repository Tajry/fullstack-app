import { useEffect, useState  } from "react"
import { useParams } from "react-router-dom"

const Edit = () => {

    const [row , setRow] = useState([]);

    const {id} = useParams()
    useEffect(()=>{
       
        fetch(import.meta.env.VITE_APP_API+'edit/'+id).then(res =>res.json()).then((res)=>{
            // console.log(res)
            setRow(res[0])
        })
    },[])



    


    return (
      <div className='p-5'>
          <form className=' '>
              <div className='flex  flex-wrap'> 
                  <div className="form-groub m-2">
                      <label htmlFor="">First Name</label>
                      <input type="text" name='fname' defaultValue={row?.fname}  className='border-2  p-1  rounded-md mx-1 '/>
                  </div>
                  <div className="form-groub m-2">
                      <label htmlFor="">Last Name</label>
                      <input type="text" name='lname' defaultValue={row?.lname}  className='border-2   p-1  rounded-md mx-1'/>
                  </div>
                  
                  <div className="form-groub m-2">
                      <label htmlFor="">Gender</label>
                      <select name="gender" id="" value={row?.gender} className='border-2 p-1  rounded-md mx-1'>
                        {row?.gender === 'male' ? 
                            <>
                                <option value="male" >male</option> 
                                <option value="female">female</option>

                            </>
                        :  
                            <>
                            
                                <option value="male">male</option> 
                                <option value="female" >female</option>
                            </>
                        }
                          
                      </select>
                  </div>
                  <div className="form-groub m-2">
                      <label htmlFor="">Tel</label>
                      <input type="text" name='tel' defaultValue={row?.tel}  className='border-2  p-1  rounded-md mx-1' />
                  </div>
                  <div className="form-groub m-2">
                      <label htmlFor="">Age</label>
                      <input type="number" name='age' defaultValue={row?.age}   className='border-2 w-16   p-1  rounded-md mx-1'/>
                  </div>
                  <div className="form-groub m-2">
                      <label htmlFor="address" >Address</label>
                      <textarea id="address" cols="100" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
                      focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                            {row?.address}
                      </textarea>
                  </div>
                  
              </div>
              <div className="form-groub m-2">
                  <button type='submit' className='text-white bg-sky-500 rounded-md py-1 px-5 text-center'>Save</button>
              </div>
  
              <hr className='text-black' />
              
          </form>
      </div>
    )
  }
  
  export default Edit