<<<<<<< HEAD
=======

>>>>>>> 1ddc42112c5de2153ec0378a8d9e2105e3814cbf
import React,{useState} from 'react'
import {Button, Label, Input} from './Styled'
import {signIn} from '../services/authServices'
import {useGlobalState} from '../utils/stateContext'
<<<<<<< HEAD
=======

>>>>>>> 1ddc42112c5de2153ec0378a8d9e2105e3814cbf

export default function SignIn({history}) {
	const initialFormState = {
		email: '',
		password: ''
	}
	const [formState, setFormState] = useState(initialFormState)
	const {dispatch} = useGlobalState()
	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}
	function handleSubmit(event) {
		event.preventDefault()
		signIn(formState)
		.then(({username,jwt}) => {
			console.log(username, jwt);
			dispatch({type: 'setLoggedInUser', data: username})
			dispatch({type: 'setToken', data: jwt})
			history.push('/dashboard')
		})
		.catch((error) => console.log(error))

	}
	return (
		<form >
			<Label>Email:</Label>
			<Input type='email' name='email' value={formState.username} onChange={handleChange}></Input>
			<Label>Password:</Label>
			<Input type='password' name='password' value={formState.password} onChange={handleChange}></Input>
			<Button onClick={handleSubmit}>Login</Button>
		</form>
	)
}



// import React from "react";
// import {
//     BrowserRouter as Router,
//     Link,
//   } from "react-router-dom";
// import Navbar from "./Navbar";
// import './Forms.css';

// const handleSubmit = () => {

// }

// const SignIn = () => {
//     return (
//         <div className="formContainer signin">
//             <div className="forms">
//                 <h1>Sign In</h1>
//                 <form className="signForm">
//                     <div className="fields"> 
//                         <input className="email placeColor" autoFocus placeholder="email@..." name="email" id="email"></input>
//                         <input className="passwords placeColor" placeholder="password" name="password" id="password"></input>
//                     </div>
//                     <input className="btn" type="submit" onSubmit={handleSubmit} value="sign in"/>
//                 </form>
//                 <br></br>
//                 <Link to="/"><button className="back btn">BACK</button></Link>
//             </div>
//         </div>
//     );
// }

// export default SignIn