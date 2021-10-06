import React, { useState } from 'react';
//-----------React-router-dom
import { Link } from 'react-router-dom'

//style
import { Nav, Links, Ham } from '../styleComponents/NavBar.style';
//icon

import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../Img&Ico/The DBmovies.png'


const NavBar = () => {
    let none = "none";
    const [menu, setMenu] = useState(none);
    const display = () => {
        let block = "block";
        let none = "none";
        if (menu === none) {
            setMenu(block)
        }
        else {
            setMenu(none)
        }

    }


    return (
        <>
       
            
        
            <Nav>
                <Ham onClick={display}> <GiHamburgerMenu /></Ham>
                <img src={logo} alt="The DBMovies" />
                <Links display={menu} className="fw-bold">

                    <div><Link to="/" style={{textDecoration: "none"}}><div >Movies</div></Link></div>
                   <div> <Link to="/TvShow" style={{textDecoration: "none"}}><div >TvShow</div></Link></div>
                </Links>
            </Nav>
 
        </>
    )
}
export default NavBar;
