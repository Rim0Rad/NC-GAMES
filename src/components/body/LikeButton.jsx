import { useEffect, useState } from 'react';
import axios from 'axios';

function LikeButton ( { target, logedIn }) {

    const [ votes, setvotes ] = useState(target.votes)

    //get the state of the vote from the localstorage to prevent from voting twice 
    const [ haveVoted, setHaveVoted ] = useState( localStorage.getItem(`${target.comment_id}`) ?
         localStorage.getItem(`${target.comment_id}`) : (localStorage.getItem(`${target.review_id}`) ?
         localStorage.getItem(`${target.review_id}`) : false ))

    async function handleLikeClick (event) {
        setHaveVoted(true)
        setvotes(++target.votes)
        if(target.comment_id){
            await axios.patch(`https://nc-games-x7ut.onrender.com/api/comments/${target.comment_id}`, {inc_vote: 1})
            localStorage.setItem(`${target.comment_id}`, true )
        }else{
            await axios.patch(`https://nc-games-x7ut.onrender.com/api/reviews/${target.review_id}`, {inc_vote: 1})
            localStorage.setItem(`${target.review_id}`, true )
        }
    }

    useEffect( () => {

    }, [haveVoted])

    if(logedIn.username && !haveVoted){
        return (
            <button id="votebuttons" onClick={handleLikeClick}>{votes}
                <img className="upvoteimg" src='https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-upward-arrow-icon-png-image_925603.jpg'></img>
            </button>
        )
    }else{
        return <button id="votebuttons" disabled>{votes}</button>
    }
   
}

export default LikeButton;