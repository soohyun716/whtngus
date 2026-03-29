import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SwipeNavigator from './components/SwipeNavigator/SwipeNavigator';


// Reacr.lazy를 사용하여 FullscreenMenu를 지연로드
const FullscreenMenu = React.lazy(() => import('./components/FullscreenMenu/FullscreenMenu'));

function App() {
  // 상태 관리: 메뉴 표시 여부와 버튼 숨김 여부
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // 토글 버튼 누르면 메뉴 보이기
  const openMenu = () => {
    setIsMenuVisible(true);
  };

  //메뉴 닫기 
  const closeMenu = () => {
    setIsMenuVisible(false);
  };


  return (

    <Router>
      <div className="app">
        {/* 공통: 네비게이션 바 */}
        <Navbar onMenuClick={openMenu} />

        {/* 라우팅 및 스와이프 기능 관리 */}
        <SwipeNavigator />

        {/* 필요시-> 풀스크린 메뉴: Suspense로 감싸서 로딩 중 상태처리 */}
        {isMenuVisible && (
          <Suspense fallback={<div>Loading...</div>}>
            <FullscreenMenu onClose={closeMenu} />
          </Suspense>
        )}

        {/* 공통: footer 인스타 주소 */}
        <Footer />

      </div>
    </Router>


  );
}


export default App;