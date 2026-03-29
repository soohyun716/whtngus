import React from 'react';
import MainSlider from './MainSlider';
import LetterSlider from './LetterSlider';
import './Mainpage.css';

function Mainpage() {
    return (
        <div className="mainpage">
            {/* 메인이미지 슬라이더 */}
            <MainSlider />

            {/* 사이트 소개 */}
            <div className="start">
                <p>From. 이화여대CCC</p>
                <p>25학번 예비 새내기를 위한 응원편지가 도착했어요!</p>
            </div>
            {/* 편지 사진 슬라이드 */}
            <LetterSlider />

               {/* 버튼 */}
               <button className="more_letter">
               <a href="/human" style={{ textDecoration: 'none', color: 'inherit' }}><p>단과대별 선배들 편지 더보기</p></a>
        
            </button>
        </div >
    );
}

export default Mainpage;