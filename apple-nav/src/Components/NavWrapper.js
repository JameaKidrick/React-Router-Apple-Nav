import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import { Collapse } from 'reactstrap';
import NavParent from './NavParent';
import SubNav from './SubNav';
import Home from './Subcomponents/Home';
import Mac from './Subcomponents/Mac';
import iPad from './Subcomponents/iPad';
import iPhone from './Subcomponents/iPhone';
import Watch from './Subcomponents/Watch';
import TV from './Subcomponents/TV';
import Music from './Subcomponents/Music';
import Support from './Subcomponents/Support';
import Search from './Subcomponents/Search';
import Bag from './Subcomponents/Bag';
// import { Data } from './Data'



// NavWrapper will be responsible for holding the parent category (NavParent) and SubNav. It will also control SubNav collapse.

function NavWrapper() {
    // const [DataState] = useState(Data);
    
        return(
        <>
            <div className='parent'> 
                <NavParent />
                {/* <Collapse> */}
                    {/* <SubNav /> */}
                {/* </Collapse> */}
            </div>

            {/* {DataState.map((Data, index) => (
                <Route key={index} path={`/apple/${Data}`} component={`${Data}`}/>
            ))} */}

            <Route exact path='/apple/home' component={Home}/>
            <Route path='/apple/mac' component={Mac}/>
            <Route path='/apple/ipad' component={iPad}/>
            <Route path='/apple/iphone' component={iPhone}/>
            <Route path='/apple/watch' component={Watch}/>
            <Route path='/apple/tv' component={TV}/>
            <Route path='/apple/music' component={Music}/>
            <Route path='/apple/support' component={Support}/>
            <Route path='/apple/search' component={Search}/>
            <Route path='/apple/bag' component={Bag}/>
        </>
    )
}

export default NavWrapper;