import React ,{Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import CustomForm from '../components/Form';
const ArticleDetail =(props)=>{
    
    const [article, setArticle] = useState([]);
    
    useEffect(()=>{
        getRec();
    })
    const getRec = async()=>{
        const articleID = props.match.params.articleID;
        axios.get(`http://localhost:8000/api/${articleID}`)
            .then(res=>setArticle(res.data))
    }

    const handleDelete=(e)=>{
        e.preventDefault()
        const articleID = props.match.params.articleID;        
        axios.delete(`http://localhost:8000/api/${articleID}`);
        props.history.push('/');
    }
    return(
        <Fragment>
            <form onSubmit={handleDelete}>
                <button className="float-right btn btn-danger" type="submit">Delete</button>
            </form>
            <br clear="all"/>
            <br/>
            <div className="card lfloat-none">
                <div className="card-body">
                    <h4 className="card-title">{article.title}</h4>
                    <p className="card-text">{article.content}</p>
                </div>
            </div>
            <CustomForm 
            requestType="put"
            articleID={props.match.params.articleID}
            btnText="Update"
            />
        
        </Fragment>
    );
}
export default ArticleDetail;