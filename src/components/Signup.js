import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Input, Button} from './Styled'
import {signUp} from '../services/authServices'
import {useGlobalState} from '../utils/stateContext'

export default function NewUser() {
	const initialFormState = {
		username: '', 
		email: '', 
		password: '', 
		password_confirmation: ''
	}
	const [formState, setFormState] = useState(initialFormState)
	const {dispatch} = useGlobalState()
	let history = useHistory()
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
			dispatch({type: 'setLoggedInUser', data: data.email})
			history.push('/dashboard')
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
					</div>
				</form>
			</div>
		</div>
	)
}