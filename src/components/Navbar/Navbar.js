import React from 'react';
import './Navbar.css';

function Navbar({ onMenuClick }) {
    return (
        <nav className="navbar">
            {/* 로고 영역 */}
            <div className="navbar-logo">
                <a href="/">
                    <img src="/image/logo.png" alt="EwhaCCC_Logo" />
                </a>
            </div>

            {/* 햄버거 메뉴 토글 버튼 */}
            <div className="navbor_toggleBtn" onClick={onMenuClick}>
                <p>☰</p>
            </div>
        </nav>
    );
}

export default Navbar;