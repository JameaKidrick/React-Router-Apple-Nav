import React from 'react';
import { Route } from 'react-router-dom'
import { Collapse } from 'reactstrap';
import NavParent from './NavParent';
import SubNav from './SubNav';
import Home from './Subcomponents/Home';
import Mac from './Subcomponents/Mac';


// NavWrapper will be responsible for holding the parent category (NavParent) and SubNav. It will also control SubNav collapse.

function NavWrapper() {

    return(
        <>
            <div className='parent'> 
                <NavParent />
                    <Collapse>
                        <SubNav />
                    </Collapse>
            </div>

            <Route exact path='/apple/' component={Home}/>
            <Route path='/apple/mac' component={Mac}/>
        </>
    )
}

export default NavWrapper;