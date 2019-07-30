import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () =>(
    <Fragment>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/article/:articleID/' component={ArticleDetail} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
    </Fragment>
);
export default BaseRouter;