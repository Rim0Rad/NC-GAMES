import { useState } from 'react';
import axios from 'axios';

function LikeButton ( { target }) {

    const [ votes, setvotes ] = useState(target.votes)

    async function handleLikeClick (event) {
        setvotes(++target.votes)
        if(target.comment_id){
            await axios.patch(`https://nc-games-x7ut.onrender.com/api/comments/${target.comment_id}`, {inc_vote: 1})
        }else{
            await axios.patch(`https://nc-games-x7ut.onrender.com/api/reviews/${target.review_id}`, {inc_vote: 1})
        }
    }

    return (
        <button id="votebuttons" onClick={handleLikeClick}>{votes}
            <img className="upvoteimg" src='https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-upward-arrow-icon-png-image_925603.jpg'></img>
        </button>
    )
}

export default LikeButton;