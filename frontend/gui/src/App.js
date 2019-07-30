import React,{useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import CustomLayout from './containers/Layout';
import {useDispatch, useSelector} from 'react-redux';
import * as action from './Store/actions/auth';
import './App.css'
const App = () => { 
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(action.authCheckState())
    })
  
    const token = useSelector(state => state.token) 
    const isAuth = token !== null
  
    return (
      <div>
        <Router>
          <CustomLayout authenticated={isAuth}>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
}

export default App;
