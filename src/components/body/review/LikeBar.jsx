

function LikeBar ( { votes } ) {

    return (
        <section>
            <h4>Like and Share</h4>
            <p>Votes: {votes}</p>
            <button>like</button>
            <button>share</button>
        </section>
    )
}

export default LikeBar;