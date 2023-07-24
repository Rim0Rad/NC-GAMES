

function ReviewInfo ( { title, owner, created_at, designer, category} ) {

    return (
        <section className="pageHeader">
            <p className="pageTitle">{title}</p>
            <section id="reviewDetailsContainer">
                <p>by {owner}</p>
                <p className="date">{ new Date(created_at).toUTCString() }</p>
                <section>

                    <p>Designer: {designer} <br/>
                    Category: {category}
                    </p>
                </section>
            </section>
        </section>
    )
}

export default ReviewInfo;