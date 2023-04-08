import React,{useEffect,useState} from "react";
import axios from "axios"
import {useNavigate,Link} from "react-router-dom"

function Login(){

    const history=useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                     alert("user not sign up")
                }
            })
            .catch(e=>{
                alert("wrong detais")
                console.log(e);
            })
        }
        catch(e)
        {
            console.log(e);
        }
    }

    return(
        <div className="login">
            <h1>Login</h1>
            <form action="POST">
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="email" name="" id="" />
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" name="" id="" />
            
            <input type="submit" onClick={submit}/>
            </form>
            <br></br>
            <p>OR</p>
            <br></br>
            <Link to="/signup">Sign Up</Link>
        </div>
    )
}

export default Login;