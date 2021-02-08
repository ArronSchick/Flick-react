import React, {useState} from 'react'
import { Input, Button} from './Styled'
import {showUser, signUp} from '../services/authServices'
import {useGlobalState} from '../utils/stateContext'
import { useHistory } from "react-router-dom";
export default function NewUser() {
	const initialFormState = {
		username: '', 
		email: '', 
		password: '', 
		password_confirmation: ''
	}
	
	const [formState, setFormState] = useState(initialFormState)
	const { dispatch} = useGlobalState()
	const history = useHistory()

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
			showUser()
			.then((user) => dispatch({ type: "setProfile", data: user }))
      		.catch((error) => console.log(error));
			history.push('/dashboard/flick')
		})
	}

	function handleBack(event){
		event.preventDefault()
		history.push('/')
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
					</div>
					<div>
						<Button className="btn" onClick={handleBack}>Back To Home Page</Button>
					</div>
				</form>
			</div>
		</div>
	)
}