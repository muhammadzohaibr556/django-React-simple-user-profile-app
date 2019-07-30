import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import Article from '../components/Article';
import CustomForm from '../components/Form';
const ArticleList =()=>{
    const [article, setArticle] = useState([]);
    useEffect(()=>{
        getRec();
      })
      
      const getRec = async ()=>{
        axios.get('http://localhost:8000/api/')
        .then(res=> setArticle(res.data));
      }
    
    return(
        <Fragment>
            <Article rec={article}/>
            
            <h1>Get Create More Articles</h1>
            <CustomForm 
                requestType="post"
                articleID={null}
                btnText="Create"
            />
        </Fragment>
    );
}
export default ArticleList;