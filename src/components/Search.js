import React from 'react'

function Search(props) {
    return (
        <div>
            <input onChange={props.search} type="text" placeholder="Search for Beer"/>
        </div>
    )
}

export default Search


