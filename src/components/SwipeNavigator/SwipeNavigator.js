import React, { useState } from 'react';
import { useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import './SwipeNavigator'
import Mainpage from '../../pages/Mainpage/Mainpage';
import Human from '../../pages/Letterpage/Human';
import Social from '../../pages/Letterpage/Social';
import Nature from '../../pages/Letterpage/Nature';

// 다른 페이지도 필요에 따라 임포트하세요

function SwipeNavigator() {
    const navigate = useNavigate();
    const location = useLocation(); // 현재 페이지 경로를 가져옴
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    // 터치 시작 이벤트 핸들러
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    // 터치 이동 이벤트 핸들러
    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;

        // 스와이프 거리가 일정 기준 이상일 때 페이지 전환
        if (diffX > 50) { // 왼쪽으로 스와이프 (다음 페이지)
            if (location.pathname === '/') {
                navigate('/human');
            } else if (location.pathname === '/human') {
                navigate('/social');
            } else if (location.pathname === '/social') {
                navigate('/nature');
            } else if (location.pathname === '/nature') {
                navigate('/');
            }
            setIsDragging(false);
        } else if (diffX < -50) { // 오른쪽으로 스와이프 (이전 페이지)
            if (location.pathname === '/nature') {
                navigate('/social');
            } else if (location.pathname === '/social') {
                navigate('/human');
            } else if (location.pathname === '/human') {
                navigate('/');
            }
            setIsDragging(false);
        }
    };

    // 터치 끝 이벤트 핸들러
    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="swipe-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <Routes>
                <Route path="/" element={<Mainpage />} />
                <Route path="/human" element={<Human />} />
                <Route path="/social" element={<Social />} />
                <Route path="/nature" element={<Nature />} />
                {/* 다른 페이지 라우팅을 추가하세요 */}
            </Routes>
        </div>
    );
}

export default SwipeNavigator;
