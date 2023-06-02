

function ListParameters ( {sortParameters, setSortParameters}) {

    return (
        <section>
            <h3>""List parameters""</h3>
            <form>
                <label>Sort By
                    <select onChange={(event) => {
                        updateSortParameter('sort_by', event.target.value, sortParameters, setSortParameters)
                    }}>
                        <option value="created_at">Date</option>
                        <option value="comment_count">Comments</option>
                        <option value="votes">Votes</option>
                    </select>
                </label>
                <label>Order
                    <select onChange={(event) => {
                        updateSortParameter('order', event.target.value, sortParameters, setSortParameters)
                    }}>
                        <option value="DESC">Decending</option>
                        <option value="ASC">Ascending</option>
                    </select>
                </label>
            </form>
        </section>
    )
}

export default ListParameters;

function updateSortParameter(targetParam, paramValue, searParams, setSearchParams){
    const parameters = { ...searParams };
    parameters[targetParam] = paramValue;
    setSearchParams(parameters)
}
