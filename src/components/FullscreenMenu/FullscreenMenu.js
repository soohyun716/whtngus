import React from 'react';
import './FullscreenMenu.css';

function FullscreenMenu({ onClose }) {
    return (
        <div className="fullscreen-menu" id="fullscreenMenu">
            <button className="close-btn" onClick={onClose} id="closeBtn">
                &times;
            </button>
            <div className="fullscreen-menu-title">
                <p>EWHA<br />Campus Crusade for Christ<br /><br />단과대별 선배들 편지 읽어보기</p>
            </div>
            <div className="fullscreen-menu-list">
                <a href="/">HOME</a>
                <a href="/human">인문과학대학</a>
                <a href="/social">사회과학대학</a>
                <a href="/nature">자연과학대학</a>
                <a href="/tech">공과/인공지능대학</a>
                <a href="/music">음악/조형예술대학</a>
                <a href="/teach">사범대학</a>
                <a href="/manage">경영/신산업융합대학</a>
                <a href="/hokma">호크마교양대학</a>
                <a href="/med">약학/스크랜튼대학</a>
            </div >
        </div >

    );
}

export default FullscreenMenu;