import React,{useState} from 'react'
import {Button, Input} from './Styled'
import {showUser, signIn} from '../services/authServices'
import {useGlobalState} from '../utils/stateContext'
import './styles/Forms.css'


// allows user to sign in using email and password
export default function SignIn({history}) {
	const initialFormState = {
		email: '',
		password: '',
		errorMessage: ''
	}
	const [formState, setFormState] = useState(initialFormState)
	const {dispatch} = useGlobalState()
	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}
	// posts sign in data to validate with railsAPI
	function handleSubmit(event) {
		event.preventDefault()
		signIn(formState)
		.then(({username,jwt}) => {
			console.log(username, jwt);
			// stores username and jwt token in session storage
			sessionStorage.setItem("token", jwt);
			sessionStorage.setItem("user", username);
			dispatch({type: 'setLoggedInUser', data: username})
			dispatch({type: 'setToken', data: jwt})
			showUser()
			.then((user) => dispatch({ type: "setProfile", data: user }))
      		.catch((error) => console.log(error));
			history.push('/dashboard/flick')
		})
		// customer error message
		.catch((error) => setFormState({
			errorMessage: "Login Failed, please check email and password"}))
		}
		// allows user to return to index page
		function handleBack(event){
			event.preventDefault()
			history.push('/')
		}
	
	return (
		<div className="formContainer signin">
             <div className="forms">
                 <h1>Sign In</h1>
                 <form className="signForm">
                     <div className="fields"> 
						<Input placeholder="email" className = "email placeColor" id="email" type='email' name='email' value={formState.username} onChange={handleChange} data-testid="email_signin"></Input>
						<Input type='password' className="passwords placeColor" placeholder="password" name="password" id="password" value={formState.password} onChange={handleChange} data-testid="password_signin"></Input>
						<Button className="btn" value="sign in" type="submit" onClick={handleSubmit} data-testid="login">Log in</Button>
					</div>
					<div>
						{/* error message displays if log in details cannot be validated */}
						{formState.errorMessage && <h2>{formState.errorMessage}</h2>}
					</div>
					<div>
						<Button className="btn" onClick={handleBack}>Back To Home Page</Button>
					</div>
				</form>
			</div>
		</div>
	)
}