import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/login.css'

function Login(){
    const navigate=useNavigate()
    const [email,setEmail]= useState('')
    const [Uname,setUsername]=useState('')
    const [pwd,setPass]=useState('')
    
    
   const  handleLogin=(e)=>{
        e.preventDefault()
        if(Uname==='admin' && pwd==='admin') 
         return navigate('/products')
        if(!Uname||!pwd)
            return alert("invalid inputs")
       else alert('Invalid Username and Password')

    }
    const handleChange=(e,key)=>{
        if(key==='name')
        setUsername(e.target.value)
        if(key==='pass')
        setPass(e.target.value)
        if(key==='email')
        setEmail(e.target.value)
    }
    return(
    <div className="loginBody">
        <div className="loginbox">
        <h3> Login into Perfect Products  </h3>
        <form>
            <input onChange={(e)=>handleChange(e,'name')} type='text' placeholder='UserName' ></input>
             <br></br>
            <input  onChange={(e)=>handleChange(e,'pass')}type='password' placeholder='Password'></input>
            <br></br>
            <button onClick={(e)=>handleLogin(e)}> Login </button>
        </form>
        <hr></hr>
        <label> Note: </label> <br></br>
        <label> Use admin for username </label> <br></br>
        <label> Use admin for password </label>
    </div>
    </div>
    )
}


export default Login