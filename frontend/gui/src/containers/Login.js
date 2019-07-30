import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import * as action from '../Store/actions/auth';
import '../App.css';
const Login = (props) => {
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
        const password = e.target.elements.password.value;
        dispatch(action.authLogin(userName, password))
        console.log(userName +"\n"+password)
        props.history.push('/')
        
    }
    return ( 
         <Fragment>
             <h1>Login Form</h1>
             {errorMessage}
            {
                loading ?
                <div class="loader"></div>
                :
            <form className="mb-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" name="username" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Password:</label>
                    <input type="password" className="form-control" name="password" required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/signup/' className="ml-5 btn btn-success">Signup</Link>
            </form>
            
            }
        </Fragment>
   );
}
 
export default Login;