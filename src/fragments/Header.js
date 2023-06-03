import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
function Header() {
    return (
        <header className="app-header">
            <div className="container">
                <ul className="breadcrumb">
                    <li className="breadcrumb__item breadcrumb__item-firstChild">
                        <span className="breadcrumb__inner">
                            <span className="breadcrumb__title"> <Link to="/buttons">Buttons</Link></span>
                        </span>
                    </li>
                    <li className="breadcrumb__item">
                        <span className="breadcrumb__inner">
                            <span className="breadcrumb__title">  <Link to="/divs">Divs</Link></span>
                        </span>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
