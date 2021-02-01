<<<<<<< HEAD
=======

>>>>>>> 1ddc42112c5de2153ec0378a8d9e2105e3814cbf
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Panel,Label, Input, Button} from './Styled'
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
		.then((user) => {
			dispatch({type: 'setLoggedInUser', data: user.email})
			history.push('/dashboard')
		})
	}
	return (
		<>
		<Panel>
			<Label>Username:</Label>
			<Input type="text" name='username' value={formState.username} onChange={handleChange}></Input>
			<Label>Email:</Label>
			<Input type='email' name='email' value={formState.email} onChange={handleChange}></Input>
		</Panel>
		<Panel>
			<Label>Password:</Label>
			<Input type='password' name='password' value={formState.password} onChange={handleChange}></Input>
			<Label>Password Confirmation:</Label>
			<Input type='password' name='password_confirmation' value={formState.password_confirmation} onChange={handleChange}></Input>
			<Button onClick={handleRegister}>Register</Button>
		</Panel>
		</>
	)
}


// }

//     return (
//         <div className="formContainer signup">
//             <div className="forms">
//                 <h1>Create Account</h1>
//                 <form className="signForm">
//                     <div className="fields">
//                         <input className="profilename placeColor" autoFocus placeholder="profilename" name="profilename" id="profilename"/>
//                         <input className="email placeColor" placeholder="email@..." name="email" id="email"/>
//                         <input className="passwords placeColor" placeholder="password" name="password" id="password"/>
//                         <input className="passwords placeColor" placeholder="password" name="confirmpassword" id="confirmpassword"/>
//                     </div>
//                     <input className="btn" type="submit" onSubmit={handleSubmit} value="sign up"/>
//                 </form>
//                 <br></br>
//                 <Link to="/"><button className="back btn">BACK</button></Link>
//             </div>
//         </div>
//     );
// }
<<<<<<< HEAD
=======

>>>>>>> 1ddc42112c5de2153ec0378a8d9e2105e3814cbf

// export default SignUp