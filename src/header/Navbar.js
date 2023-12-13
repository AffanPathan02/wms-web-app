import React from 'react-dom';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <>
            <p> Navbar element </p>
            <Link to="/">Home Page</Link>
        </>
    );
}

export default Navbar;