import NewComment from './NewComment.jsx';
import CommentList from './CommnetList.jsx';

import { fetchCommentsByReview } from '../../../../api/comments.js'

import { useState, useEffect } from 'react';

function Comments ( { review_id } ) {
    const [ commentList, setCommentList ] = useState( [] )
    const [ isLoading, setIsLoading ] = useState( true )

    useEffect( () => {
        fetchCommentsByReview(review_id)
        .then( comments => {
            setCommentList(comments);
            setIsLoading(false)
        })
    }, [])

    if( isLoading ){
        return (
            <section>
                <p> Loading comments...</p>
            </section>
        )
    }

    return (
        <section>
            <NewComment/>
            <CommentList commentList={commentList}/>
        </section>
    )
}

export default Comments;