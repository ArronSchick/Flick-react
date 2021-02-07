import React, {useState} from 'react'
import { Input, Button} from './Styled'
import {showUser, signUp} from '../services/authServices'
import {useGlobalState} from '../utils/stateContext'
import { Link } from "react-router-dom";

export default function NewUser() {
	const initialFormState = {
		username: '', 
		email: '', 
		password: '', 
		password_confirmation: ''
	}
	
	const [submitted, setSubmitted] = useState(false)
	const [formState, setFormState] = useState(initialFormState)
	const { dispatch} = useGlobalState()
	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}
	function handleRegister(event) {
		event.preventDefault()
		signUp(formState)
		.then((data) => {
			sessionStorage.setItem("token", data.jwt);
			sessionStorage.setItem("user", data.username);
			dispatch({type: 'setLoggedInUser', data: data.username})
			setSubmitted(true)
			showUser()
			.then((user) => dispatch({ type: "setProfile", data: user }))
      		.catch((error) => console.log(error));
			// history.push('/dashboard/flick')
		})
	}
	return (
		<div className="formContainer signup">
			<div className="forms">
				<h1>Create Account</h1>
				<form className="signForm">
					<div className="fields">
						<Input placeholder="username" type="text" name='username' value={formState.username} onChange={handleChange}></Input>
						<Input placeholder="email" type='email' name='email' value={formState.email} onChange={handleChange}></Input>
						<Input placeholder="password" type='password' name='password' value={formState.password} onChange={handleChange}></Input>
						<Input placeholder="confirm password" type='password' name='password_confirmation' value={formState.password_confirmation} onChange={handleChange}></Input>
						<Button className="btn" onClick={handleRegister}>Register</Button>
							{submitted ? 
							<div>
							<h1>Success! Thank you for registering!</h1>
							<Link to={"/dashboard/flick"} className="links profilelink">Click Here to Start Using Flick!</Link>
							</div>
							 : null}
					</div>
				</form>
			</div>
		</div>
	)
}