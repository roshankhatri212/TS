import { useState } from "react"
import { login, logout } from "../store";
import { Dispatch } from "react";
import { useDispatch,useSelector } from "react-redux";

export const Login= ()=>{

    const [newUsername,setNewUsername]=useState("");

    const dispatch = useDispatch();
    const username=useSelector((state:any)=>state.user.value.username)
    return (
        <div>
        <h1>THIS IS THE LOGIN PAGE
        {username}</h1>
        <input onChange={(e)=>{setNewUsername(e.target.value)}}/>
        <button onClick={()=>dispatch(login({username:newUsername}))}>LOG IN SUBMIT</button>
        <button onClick={()=>dispatch(logout())}>LOG OUT</button>
        </div>
    )
    }