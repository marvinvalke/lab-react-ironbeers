import React from 'react'
import {Link} from 'react-router-dom'



function Home() {
    return (
        <div>
            <Link to='/beers'><h1>All Beers</h1></Link>
            <Link to='/random-beer'><h1>Random Beer</h1></Link>
            <Link to='/new-beer'><h1>New Beer</h1></Link>
        </div>
    )
}

export default Home
