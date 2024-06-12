import { useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  console.log({email,password});

  const handelEmail=(e) =>{
    setemail(e.target.value)

  }
  const handelpassword =(e) =>{
    setpassword(e.target.value)

  }
  const handleApi=()=>{
    console.log({email,password});
    axios.post('https://reqres.in/api/login',{
      email: email,
      password: password
    })
    .then(result=>{
      alert("successfully")
      console.log(result)
    })
    .catch(error=>{
      alert("service error")
      console.log(error);
    })
  }

  return (
    <>
   <h1 className='h1'>Login</h1>

   <div className='d1'>
    Email: <input value={email} onChange={handelEmail} type='email'/> <br/> <br/>
    Password: <input value={password} onChange={ handelpassword} type='password' /> <br/> <br/>
    <button onClick={handleApi}>Login</button>


   </div>
   </>
  )
}

export default App
