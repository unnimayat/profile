import React,{useEffect,useState} from "react";
import axios from "axios"
import {useNavigate,Link} from "react-router-dom"

function Signup(){

    const history=useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("user already exist")
                    }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
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
            <h1>Sign up</h1>
            <form action="POST">
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="email" name="" id="" />
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" name="" id="" />
            
            <input type="submit" onClick={submit}/>
            </form>
            <br></br>
            <p>OR</p>
            <br></br>
            <Link to="/">Login Page</Link>
        </div>
    )
}

export default Signup;