import LikeButton from '../LikeButton.jsx'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function LikeBar ( { review } ) {

    function handleShareBtClick() {
        const url = window.location.href;
        navigator.clipboard.writeText(url)
    }

    return (
        <section id="likebar">
            
            <LikeButton target={review}/>
            <Popup onOpen={handleShareBtClick} trigger={
                <button id="sharebt">
                    <img id="shareimg" src="https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_share-512.png"></img>
                </button>} position="right center">
                    <span>
                        Link coppied!
                    </span>
            </Popup>
        </section>
    )
}

export default LikeBar;