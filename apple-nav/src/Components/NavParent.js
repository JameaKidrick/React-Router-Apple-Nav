import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { Data } from './Data';

// NavParent will hold the links for each parent category.

const Header = styled.div`
    border: 2px solid red;
    background-color: #333333;
    color: white;
`

const stylesLinks = {
    border: '2px solid green',
    color: 'white',
    textDecoration: 'none'
}


function NavParent() {
    // const [DataState] = useState(Data);

    return(
        <>
            <Header>
                <i className="fab fa-apple"></i>
                <div> Hello World! </div>

                {/* {DataState.map((Data, index) => (
                    <Link key={index} style={stylesLinks} to={`/apple/${Data}`}>{`${Data}`}</Link>

                ))} */}
                <Link style={stylesLinks} to='/apple/'>Home</Link>
                <Link style={stylesLinks} to='/apple/mac'>Mac</Link>
                <Link style={stylesLinks} to='/apple/ipad'>iPad</Link>
                <Link style={stylesLinks} to='/apple/iphone'>iPhone</Link>
                <Link style={stylesLinks} to='/apple/watch'>Watch</Link>
                <Link style={stylesLinks} to='/apple/tv'>TV</Link>
                <Link style={stylesLinks} to='/apple/music'>Music</Link>
                <Link style={stylesLinks} to='/apple/support'>Support</Link>
                <Link style={stylesLinks} to='/apple/search'><i className="fas fa-search"></i></Link>
                <Link style={stylesLinks} to='/apple/bag'><i className="fas fa-shopping-bag"></i></Link>
            </Header>
        </>
    )
}

export default NavParent;