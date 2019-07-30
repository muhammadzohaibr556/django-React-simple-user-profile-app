import React,{Fragment, useEffect} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const CustomForm =(props)=>{
    useEffect(()=>{
        if (props.articleID !== null){
        axios.get(`http://localhost:8000/api/${props.articleID}/`)
        .then(res => {
        document.getElementById('title').value=res.data.title
        document.getElementById('content').value=res.data.content
        })
    }},[])
    
    const submitHandle = (event, requestType, articleID) =>{
        event.preventDefault();
        const title = event.target.elements.title.value
        const content = event.target.elements.content.value
        switch(requestType){
            case 'post':
                return axios.post('http://localhost:8000/api/',{
                title:title,
                content:content
                })
                .then(res => {console.log(res)
                document.getElementById('title').value=''
                document.getElementById('content').value=''})
                .catch(error => console.log(error))
            case 'put':
                return axios.put(`http://localhost:8000/api/${articleID}/`,{
                title:title,
                content:content
                })
                .then(res => {
                    console.log(res)
                    props.history.push('/')})
                .catch(error => console.log(error))           
            default:
                return null
        }
    
    }
    return (
        <Fragment>
            <form onSubmit={(event) => submitHandle(
                event,
                props.requestType,
                props.articleID
            )}>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control" name="title" id="title"/>
            </div>
            <div className="form-group">
                <label htmlFor="content">Content:</label>
                <input type="text" className="form-control" name="content" id="content"/>
            </div>
            <button type="submit" className="btn btn-primary mb-3">{props.btnText}</button>
            </form>
        </Fragment>
    )
} 

export default withRouter( CustomForm);