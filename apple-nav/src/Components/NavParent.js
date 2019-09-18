import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Collapse } from 'reactstrap';
import SubNav from './SubNav';
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

const LinksContainer = styled.div`
    border: 2px solid white;
    display:flex
`

// console.log('data', data);
// const sub = `props.match.params.${Data}`
    



function NavParent() {
    // const [DataState] = useState(Data);
    const [close, setClose] = useState(false);

    return(
        <>
            <Header>

                {/* {DataState.map((Data, index) => (
                    <Link key={index} style={stylesLinks} to={`/apple/${Data}`}>{`${Data}`}</Link>

                ))} */}
                <LinksContainer>
                    <Link style={stylesLinks} to='/apple/' onClick={() => setClose(!close)}><i className="fab fa-apple"></i></Link>
                    <Link style={stylesLinks} to='/apple/home' onClick={() => console.log('HYPERSHOME')}>Home</Link>
                    <Link style={stylesLinks} to='/apple/mac'>Mac</Link>
                    <Link style={stylesLinks} to='/apple/ipad'>iPad</Link>
                    <Link style={stylesLinks} to='/apple/iphone'>iPhone</Link>
                    <Link style={stylesLinks} to='/apple/watch'>Watch</Link>
                    <Link style={stylesLinks} to='/apple/tv'>TV</Link>
                    <Link style={stylesLinks} to='/apple/music'>Music</Link>
                    <Link style={stylesLinks} to='/apple/support'>Support</Link>
                    <Link style={stylesLinks} to='/apple/search'><i className="fas fa-search"></i></Link>
                    <Link style={stylesLinks} to='/apple/bag'><i className="fas fa-shopping-bag"></i></Link>
                </LinksContainer>
                <Collapse isOpen={close}>
                    <SubNav />
                </Collapse>
            </Header>
        </>
    )
}

export default NavParent;