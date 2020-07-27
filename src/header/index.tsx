import React from 'react';
import './styles.css';

function Header () {

    return (
        <header className="header">
            <h1>My Techs</h1>
            <div className="menus">
                <ul>
                    <li><input type="button" value="Home"/></li>
                    <li><input type="button" value="Aprendidas"/></li>
                    <li><input type="button" value="Para Aprender"/></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;