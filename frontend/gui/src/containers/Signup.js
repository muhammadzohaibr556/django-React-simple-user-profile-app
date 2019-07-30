import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import * as action from '../Store/actions/auth';
import '../App.css'
const Signup = (props) => {
    const error = useSelector(state=> state.error)
    const loading = useSelector(state => state.loading)    
    const dispatch = useDispatch() 
    let errorMessage=null;
    if (error){
        errorMessage = (
            <p>{error.message}</p>
        )
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const userName = e.target.elements.username.value;
        const email = e.target.elements.email.value;
        const password1 = e.target.elements.password1.value;
        const password2 = e.target.elements.password2.value;
        if (password1!==password2){
            alert("Password Not Match")
        }
        else{
        dispatch(action.authSignUp(userName, email, password1, password2))
        props.history.push('/')
        }
    }
    return ( 
        <Fragment>
        <h1>Signup Form</h1>
        {errorMessage}
        {
                loading ?
                <div class="loader"></div>
                :
        <form onSubmit={handleSubmit} className="mb-5">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" name="username" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" name="email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password1">Password:</label>
                    <input type="password" className="form-control" name="password1" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password:</label>
                    <input type="password" className="form-control" name="password2" required/>
                </div>
                <button type="submit" className="mb-5 btn btn-success">Submit</button>
                <Link to='/login/' className="ml-5 mb-5 btn btn-primary">Login</Link>
            </form>
        }
        </Fragment>
     );
}
 
export default Signup;