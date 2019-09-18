import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

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

    return(
        <>
            <Header>
                <i class="fab fa-apple"></i>
                <div> Hello World! </div>
                <Link style={stylesLinks} to='/apple/'>Home</Link>
                <Link style={stylesLinks} to='/apple/mac'>Mac</Link>
            </Header>
        </>
    )
}

export default NavParent;