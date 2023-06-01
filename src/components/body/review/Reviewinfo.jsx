

function ReviewInfo ( { title, owner, created_at, designer, category} ) {

    return (
        <section>
            <h3>{title}</h3>
            {/* TODO: formate the date */}
            <p className="date">{ new Date(created_at).toUTCString()}</p> 
            <h4>by {owner}</h4>
            <h5>Game Designer: {designer} <br/>
                Game Category: {category}
            </h5>
        </section>
    )
}

export default ReviewInfo;