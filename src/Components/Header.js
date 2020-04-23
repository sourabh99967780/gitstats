import React, { useState } from "react";
import {ReactComponent as GitStatsLogo} from '../Images/logo.svg';

function Header() {
    let [dayStatus, setTheme] = useState(true);
    let [imageUrl, setImageUrl] = useState("img/sun.png");
    const [searchString, setSearchString] = useState("")
    let body = document.querySelector("body");

    function changeTheme() {
        if (dayStatus) {
            body.classList = "";
            setImageUrl("/img/moon.png");
        } else {
            body.classList = "night-mode";
            setImageUrl("/img/sun.png");
        }
        setTheme(!dayStatus);
    };

    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand text-white logo" href="#" >
                        <GitStatsLogo height={30}/>
                        {/* <img src={process.env.PUBLIC_URL + "/cat-logo.png"} alt="" /> */}
          </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link text-light-gray" href="#">
                                    <input
                                        type="text"
                                        className="search"
                                        placeholder="Search..."
                                        value={searchString}
                                        onChange={(event) => setSearchString(event.target.value)}
                                    />
                                </a>
                            </li>
                            <li>
                                <div className="change-theme mt-2 font-size-13">
                                    <button onClick={changeTheme}>
                                        <img className="mr-1" src={process.env.PUBLIC_URL + imageUrl} alt="" />
                                        {dayStatus ? "Night Mode" : "Day Mode"}
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;