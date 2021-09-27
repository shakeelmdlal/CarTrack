import react, { useEffect, useState } from 'react';
import UserDetails from './UserDetails'

interface ISearchData {
    name: String,
    email: String,
    username: String,
    phone?: string,
    id: number,
    address: { suite: String, city: String, street: String, zipcode: String },
    website: String,
    company: { name: String },
}

function Search() {
    const [searchData, setsearchData] = useState<ISearchData[]>([]);
    const [filterData, setfilterData] = useState<ISearchData[]>([]);
    const [inputVal, setinputVal] = useState('');
    const [noData, setnoData] = useState(false);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url, { method: "GET" })
            .then(res => res.json())
            .then(data => setsearchData(data))
            .catch(error => {
                console.log('error is :', error)
            })
    }, [])

    const searchList = (e) => {
        e.preventDefault();
        console.log(searchData)
        if (inputVal) {
            const getInputVal = inputVal.toLowerCase();
            const findData = searchData.filter(item => item.name.toLowerCase() === getInputVal || item.email.toLowerCase() === getInputVal || item.username.toLowerCase() === getInputVal || item.phone === getInputVal)
            if (findData.length > 0) {
                setfilterData(findData);
                setinputVal('')
                setnoData(false);
            } else {
                setinputVal('')
                setfilterData([]);
                setnoData(true);
            }
        }
    }
    
    return (
        <react.Fragment>
            <div className="search-main">
                <div className="search-form">
                <form data-testid="form" onSubmit={(e) => searchList(e)} autoComplete="off">

                    <div className="input-wrapper">
                    <input
                        type="text"
                        autoFocus
                        tabIndex={1}
                        data-testid="searchInput"
                        autoComplete="off"
                        placeholder="Search by Name/Email/UserName/Phone"
                        name="searchData"
                        value={inputVal}
                        onChange={(e) => setinputVal(e.target.value)}
                    />
                    </div>
                    <div className="button-wrapper">
                    <button type="submit" data-testid="searchBtn" tabIndex={2} value="Search">Search</button>
                    </div>
                    </form>
                    <div className="not-found">{noData ? "Data not found..." : ""}</div>
                    <UserDetails filterData={filterData} /> 
                </div>
                {/* <form data-testid="form" onSubmit={(e) => searchList(e)} autoComplete="off">
                    <input
                        type="text"
                        autoFocus
                        tabIndex={1}
                        data-testid="searchInput"
                        autoComplete="off"
                        placeholder="Search by Name/Email/UserName/Phone"
                        name="searchData"
                        value={inputVal}
                        onChange={(e) => setinputVal(e.target.value)}
                    />
                    <button type="submit" data-testid="searchBtn" tabIndex={2} value="Search">Search</button>
                </form>
                <div className="not-found">{noData ? "Data not found..." : ""}</div>
                <UserDetails filterData={filterData} /> */}
            </div>
        </react.Fragment>
    )
}

export default Search;