import NewComment from './NewComment.jsx';
import CommentList from './CommnetList.jsx';

import { fetchCommentsByReview } from '../../../../api/comments.js'

import { useState, useEffect } from 'react';

function Comments ( { review_id, logedIn } ) {

    const [ commentList, setCommentList ] = useState( [] )
    const [ isLoading, setIsLoading ] = useState( true )
    
    useEffect( () => {
        fetchCommentsByReview(review_id)
        .then( comments => {
            setCommentList(comments);
            setIsLoading(false)
        })
    }, [])

    
    useEffect( () => {
    }, [commentList]) 

    if( isLoading ){
        return (
            <section>
                <p> Loading comments...</p>
            </section>
        )
    }
    
    return (
        <section id="commentsContainer">
            <NewComment commentList={commentList} setCommentList={setCommentList} logedIn={logedIn} review_id={review_id}/>
            <CommentList commentList={commentList} setCommentList={setCommentList} logedIn={logedIn}/>
        </section>
    )
}

export default Comments;