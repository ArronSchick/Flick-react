import React,{useState} from "react";
import {addFriends} from '../services/friendServices'
import './styles/templateDashboard.css';
import {Button, Input} from './Styled'
import ShowFriends from './ShowFriends'
import {useHistory} from 'react-router-dom'

// displays current friends and has function to add friends through a form
export default function Friends() {
  const initialFormState = {
    email: "",
    errorMessage: "",
  };

    const [formState, setFormState] = useState(initialFormState)

    const history = useHistory()
    // handles submit and re-renders the page by refreshing page
    function handleSubmit(event) {
        event.preventDefault()
        addFriends(formState)
        .then(({email}) => {
            console.log(email);
            history.push('/dashboard')
            history.push('/dashboard/friends')
        })
        // customer error message if error occurs during adding friends
        .catch((error) => setFormState({
            errorMessage: "Cannot find user, please check email is correct and resubmit"}))
        setFormState(initialFormState);
    }
    // handles the form and maintains the input until submitted
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
                    {/* error message will only appear if error occurs */}
                    <div>
                        {formState.errorMessage && <h2>{formState.errorMessage}</h2>}
                    </div>
                    {/* search bar to take in input of friends email to search and add friends */}
                    <div className="dtSearch">
                        <Input placeholder="email" className = "email placeColor" id="email" type='email' name='email' value={formState.email} onChange={handleChange}data-testid="addFriendField"></Input>
                        <Button onClick={handleSubmit} value="Add Friend" data-testid="addFriendButton">Add Friend</Button>
                    </div>
                    {/* rendering showFriends component */}
                    <div className="dtListContainer">
                        <ShowFriends />
                    </div>
                </div>
            </div>
        </div>
  );
}
