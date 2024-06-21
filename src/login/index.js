import "./index.css"
import { useState } from "react";
import {login } from "./utils";

export const Login = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState ('');

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const results = await login ({username, password})
        console.log({results});
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input placeholder="Enter username" type="text" onChange={(event) => setUsername(event.target.value)}></input>
            <br></br>
            <input placeholder="Enter Password" type="password" onChange={(event) => setPassword(event.target.value)}></input>
            <br></br>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;
