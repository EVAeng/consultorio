import React from 'react'
import 'materialize-css';

import "commons/Navbar/Navbar.css"
import { Link } from 'react-router-dom';
import MainSearchBar from "commons/Navbar/MainSearchBar/MainSearchBar";
// import NoUserOptions from "components/common/NoUserOptions/NoUserOptions";
// import UserOptions from "components/common/UserOptions/UserOptions";

export default function Nav() {

    return (
        <div className='header'>
            <div className="header__left">
                <Link to='/'>
                    <img
                        className="header_icon"
                        src="https://cdn.pixabay.com/photo/2018/05/08/21/28/airbnb-3384008_640.png"
                        alt=""
                    />
                </Link>
                <MainSearchBar />
            </div>
           


            <div className='header_right'>
                {/* {!user && <NoUserOptions />}
                { user && <UserOptions/>} */}
            </div>
        </div>
    )
}
