import React, { useState, useEffect } from 'react';
import './MainSlider.css'; // 슬라이드 스타일을 정의하는 CSS 파일

function MainSlider() {
  // 슬라이드 인덱스를 상태로 관리
  const [mainIndex, setMainIndex] = useState(0);

  // 슬라이드 이미지 배열 (예제)
  const slides = [
    '/image/main1.png',    
    '/image/main2.png',
  ];

  // 슬라이드를 주기적으로 전환
  useEffect(() => {
    const interval = setInterval(() => {
      setMainIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // 3초마다 전환

    // 컴포넌트가 언마운트될 때 interval 정리
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="main-slider" style={{ overflow: 'hidden', width: '100%' }}>
      <div
        className="main-slides-container"
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(${-mainIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="main-slide"
            style={{ width: '100%', flexShrink: 0 }}
          />
        ))}
      </div>
    </div>
  );
}

export default MainSlider;