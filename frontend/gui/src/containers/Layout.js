import React, {useEffect,useState,Fragment} from 'react';
import {Link} from 'react-router-dom';
import * as action from '../Store/actions/auth';
import {useDispatch} from 'react-redux';
const CustomLayout = (props) => {
    const dispatch = useDispatch();
    const [user,setUser] = useState();
    useEffect(()=>{
      if (props.authenticated){
      setUser(localStorage.getItem('userName'))
      }
    })
    return (
      
        <Fragment>
        <nav className="navbar navbar-expand-md bg-info navbar-dark">
        <div className="container">
        <a className="navbar-brand" href="/">Navbar</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <Link to='/'><li className="nav-item">
              <span className="nav-link">Post</span>
            </li></Link>
            { props.authenticated ?
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="" id="navbardrop" data-toggle="dropdown">
                {user}
              </a>
              <div className="dropdown-menu">
                <span className="dropdown-item" onClick={()=>{dispatch(action.logout())}}>Logout</span>
              </div>
          </li>
            
            :
            <Link to='/login/'><li className="nav-item">
              <span className="nav-link">Login</span>
            </li></Link>
            }
          </ul>
        </div> 
        </div> 
      </nav>
      <div className="container my-5">
          {props.children}
        </div>
        <footer>
            <nav className="py-4 navbar navbar-expand-sm bg-info navbar-dark text-center">
                <div className="navbar-brand mx-auto">Logo</div>
            </nav>
        </footer>
      </Fragment>
    );
}


export default CustomLayout;