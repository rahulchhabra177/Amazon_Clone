import React,{useState} from 'react'
import "./Login.css"
import {useStateValue} from './StateProvider'
import {auth} from "./firebase"
import {Link,useHistory } from "react-router-dom"

function Login() {
const history=useHistory();
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const signIn=e=>{

	auth.signInWithEmailAndPassword(email,password).then((auth)=>{	

if (auth){
	// alert("success");
	history.push('/');
}}
		).catch(error=>alert(error.message))

}


const register=e=>{
	console.log("Clicked");
	auth.createUserWithEmailAndPassword(email,password).then((auth)=>{	
console.log(auth);

if (auth){
	history.push('/');
}
}

		).catch(error=>alert(error.message))

}
	return (
		<div className="login">
		<div>
			<img  className="login__logo" src="data:image/png;base64,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"/>
}
</div>
<div className="login__container">

<h1>Sign in </h1>
<form >


<h5>Email</h5>
<input  type="text" value={email} onChange={e=>{setEmail(e.target.value)}} />

<h5>Password</h5>
<input type="text"  value={password}  onChange={e=>setPassword(e.target.value)}/>


</form>
<button  type='submit' className="login__signinbutton" onClick={signIn}>Sign in</button>

<p>
By Signing in you agreee to Amazon's Terms and Condition and the pricaty poicies we will impose on you and all

</p>


<button type='submit' className="login__registerbutton" onClick={register}>Create New accout</button>
</div>
		</div>
	)
}

export default Login