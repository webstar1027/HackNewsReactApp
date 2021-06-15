import Search from './Search'
import List from './list';

function SearchableList({ list }) {
    return (
        <div>
            <h1> Test </h1>
            <Search>Search List:</Search>
            <List list={list} />
        </div>
    );
}

export default SearchableList;