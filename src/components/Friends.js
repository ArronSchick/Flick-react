import React,{useState} from "react";
import {addFriends} from '../services/friendServices'
import './styles/templateDashboard.css';
import {Button, Input} from './Styled'
import ShowFriends from './ShowFriends'
import {useHistory} from 'react-router-dom'


export default function Friends() {
  const initialFormState = {
    email: "",
    errorMessage: "",
  };

    const [formState, setFormState] = useState(initialFormState)

    const history = useHistory()
    
    function handleSubmit(event) {
        event.preventDefault()
        addFriends(formState)
        .then(({email}) => {
            console.log(email);
            history.push('/dashboard')
            history.push('/dashboard/friends')
        })
        .catch((error) => setFormState({
            errorMessage: "Cannot find user, please check email is correct and resubmit"}))
        setFormState(initialFormState);
    }

    function handleChange(event) {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div className="dtContainer">
            <div className="dtMain">
                <h1 className="dtTitle">FRIENDS</h1>
                <div className="dtCard">
                    <div>
                        {formState.errorMessage && <h2>{formState.errorMessage}</h2>}
                    </div>
                    <div className="dtSearch">
                        <Input placeholder="email" className = "email placeColor" id="email" type='email' name='email' value={formState.email} onChange={handleChange}data-testid="addFriendField"></Input>
                        <Button onClick={handleSubmit} value="Add Friend" data-testid="addFriendButton">Add Friend</Button>
                    </div>
                    <div className="dtListContainer">
                        <ShowFriends />
                    </div>
                </div>
            </div>
        </div>
  );
}
