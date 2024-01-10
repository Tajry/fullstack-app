import { useEffect } from "react"


const Add = () => {

    const handlesubmit = (event)=>{
        event.preventDefault()
        const items = new FormData(event.currentTarget)
        const id = Math.floor(Math.random() * 100000)
        const data = {
            id:id,
            fname:items.get('fname'),
            lname:items.get('lname'),
            address:items.get('address'),
            gender:items.get('gender'),
            age:items.get('age'),
            tel:items.get('tel')
        }

        fetch(import.meta.env.VITE_APP_API+'/insert',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(res => res.json())
        .then((res)=>{
            if (res.msg == 'insert successfully') {
                alert("insert success fully")

                setTimeout(()=>{
                    location.reload()
                },3000)
            }
        })
    }

    useEffect(()=>{

    },[])




  return (
    <div className='p-5'>
        <form className='' onSubmit={handlesubmit}>
            <div className='flex  flex-wrap'> 
                <div className="form-groub m-2">
                    <label htmlFor="">First Name</label>
                    <input type="text" name='fname' className='border-2  p-1  rounded-md mx-1 '/>
                </div>
                <div className="form-groub m-2">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name='lname' className='border-2   p-1  rounded-md mx-1'/>
                </div>
                
                <div className="form-groub m-2">
                    <label htmlFor="">Gender</label>
                    <select name="gender" id="" className='border-2 p-1  rounded-md mx-1'>
                        <option defaultValue="null">--- gender ---</option>
                        <option defaultValue="male">male</option>
                        <option defaultValue="female">female</option>
                    </select>
                </div>
                <div className="form-groub m-2">
                    <label htmlFor="">Tel</label>
                    <input type="text" name='tel' className='border-2  p-1  rounded-md mx-1' />
                </div>
                <div className="form-groub m-2">
                    <label htmlFor="">Age</label>
                    <input type="number" name='age'  className='border-2 w-16   p-1  rounded-md mx-1'/>
                </div>
                <div className="form-groub m-2">
                    <label htmlFor="address" >Address</label>
                    <textarea id="address" name="address" cols="100" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
                    focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                        
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

export default Add