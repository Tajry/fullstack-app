import { useEffect } from "react"

const Login = () => {


  const handleshowpassword = (event) =>{
    const password = document.getElementById('password');
    const show = document.getElementById('show');

    if(show.checked == true) {
      if(password.type == 'password') {
        password.type = 'text'
      } else {
      password.type = 'password'

      }
    }else {
      password.type = 'password'
    }
    
  }

  const handlesubmit = (event)=>{
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const items = {
      username:data.get('username'),
      password:data.get('password')
    }
    fetch('http://localhost:5500/login',{
      method:'post',
      headers: {
        "Content-Type":'application/json'
      },
      body:JSON.stringify(items)
    }).then(res => res.json())
    .then((res)=>{
      // console.log(res.msg)
      if (res.msg == 'login successfully') {
        localStorage.setItem('token' , res.token)
        window.location = '/'
      }else {
        alert("Username or Passworng is worng")
      }
    })
  }


  useEffect(()=>{

  },[])


  return (
    <div className='w-hull h-96 flex items-center justify-center '>
        <div className='w-80 p-5 border-2 shadow-md rounded-md'>
          <h1 className='text-center text-sky-500'>Login</h1>
          <form onSubmit={handlesubmit}>
              <div className='flex flex-col mt-2'>
                  <label htmlFor="username">username</label>
                  <input type="text" name='username' className='border-2 rounded-md p-1 mt-1' />
              </div>
              <div className='flex flex-col mt-2'>
                  <label htmlFor="passsword">password</label>
                  <input type="password" id="password" name='password' className='border-2 rounded-md p-1 mt-1' />
              </div>
              <div className='flex mt-3'>
                  <label htmlFor="passsword">show password</label>
                  <input type="checkbox" id="show" onClick={handleshowpassword} className='border-2 rounded-md ml-4' />
              </div>
              <div className='flex flex-col mt-2'>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4
               focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2
                dark:bg-blue-600
                dark:hover:bg-blue-700
                 dark:focus:ring-blue-800 mt-3">Login</button>
              </div>
          </form>
        </div>
    </div>
  )
}

export default Login