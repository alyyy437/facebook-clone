import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import {auth, provider} from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";
function Login() {
        const [state, dispatch] = useStateValue();

    const signIn = () => {
auth
.signInWithPopup(provider)
.then((result)=>{
    dispatch({
        type:actionTypes.SET_USER,
        user:result.user,
    });
    
})
.catch((error)=> alert(error.message));
    };
    return (
        <div className="login">
            <div className="login-log">
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwRckJ9kkGqRPCVMwDXJXmqadDVFmh7CSOg&usqp=CAU"
                alt=""/>
               
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
