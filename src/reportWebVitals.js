/* 웹 성능 지표 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // 페이지 로드되는 동안의 레이아웃 변화 측정
      getFID(onPerfEntry); // 사용자와 최초 페이지 간의 지연시간 측정
      getFCP(onPerfEntry); // 페이지에서 첫 번째 콘텐츠가 렌더링될 때까지 걸리는 시간 측정 
      getLCP(onPerfEntry); // 가장 큰 콘텐츠 요소가 렌더링될 때까지 걸리는 시간 측정
      getTTFB(onPerfEntry); // 브라우저가 서버로부터 첫 번째 바이트 받는 데 걸리는 시간 측정
    });
  }
};

export default reportWebVitals;
 