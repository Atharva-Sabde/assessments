import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/login.css'

function Login(){
    const navigate=useNavigate()
    const [fname,setUsername]=useState('')
    const [email,setEmail]= useState('')
    const [pass,setPass]=useState('')
    
    const handleChange=(e,key)=>{
        if(key==='name')
        setUsername(e.target.value)
        if(key==='pass')
        setPass(e.target.value)
        if(key==='email')
        setEmail(e.target.value)
    }
   const  handleLogin=(e)=>{
        e.preventDefault()
        if(fname==='admin' && pass==='admin') 
         return navigate('/products')
        if(!fname||!pass)
        return alert("Please enter all the fields")
        
       else alert('Invalid Username and Password')

    }
    return(
    <div className="loginBody">
        <div className="loginbox">
        <h3> Login into Perfect Products  </h3>
        <form>
            <input type='text' placeholder='UserName' onChange={(e)=>handleChange(e,'name')}></input>
             <br></br>
            <input type='password' placeholder='Password' onChange={(e)=>handleChange(e,'pass')}></input>
            <br></br>
            <button onClick={(e)=>handleLogin(e)}> Login </button>
        </form>
    </div>
    </div>
    )
}


export default Login