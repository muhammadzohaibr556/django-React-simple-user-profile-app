import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
const Article = (props) =>{
    return(
        <Fragment>
                <div className="list-group">
                    {props.rec.map(item => (
                        <span key={item.id}>
                            <Link to={`/article/${item.id}`}>
                                <p className="list-group-item list-group-item-action">{item.title}</p>
                            </Link>
                        </span>
                    ))}
                </div>
        </Fragment>
    );
}
export default Article;