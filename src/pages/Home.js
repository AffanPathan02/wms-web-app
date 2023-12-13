import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <h2>Home Page route</h2>
            <Link to='/about'>About Page</Link>
        </div>
    )
}

export default Home;