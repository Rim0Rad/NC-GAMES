

function ListParameters ( {sortParameters, setSortParameters}) {

    return (
        <section id="reviewSort">
            <label for="sortBy">Sort By </label>
            <select id="sortBy" onChange={(event) => {updateSortParameter('sort_by', event.target.value, sortParameters, setSortParameters)}}>
                    <option value="created_at">Date</option>
                    <option value="comment_count">Comments</option>
                    <option value="votes">Votes</option>
            </select>

            <label for="sortOrder"> Order </label>
            <select id="sortOrder" onChange={(event) => {updateSortParameter('order', event.target.value, sortParameters, setSortParameters)}}>
                    <option value="DESC">Decending</option>
                    <option value="ASC">Ascending</option>
            </select>
        </section>
    )
}

export default ListParameters;

function updateSortParameter(targetParam, paramValue, searParams, setSearchParams){
    const parameters = { ...searParams };
    parameters[targetParam] = paramValue;
    setSearchParams(parameters)
}
