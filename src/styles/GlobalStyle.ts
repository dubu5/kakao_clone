import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    
    /* 전역 크기 및 기본 Reset */
    body {
      width: 100%;
      height: 100%;
      // 폰트 기본값 설정
      font-family: 'Nanum Gothic', sans-serif;
      color: #222;
      font-size: 13px;
      line-height: 1.5;
    }
    
    /* 모든 주요 요소의 margin/padding 초기화 */
    body, div, ul, li, dl, dd, dt, ol, 
    h1, h2, h3, h4, h5, h6, p, 
    input, select, textarea, button, 
    table, th, td, tr, 
    fieldset, legend, form, figure, figcaption {
      margin: 0;
      padding: 0;
    }

    /* 링크 스타일 */
    a {
      color: #222;
      text-decoration: none;
    }

    /* 텍스트 요소 초기화 */
    em, address {
      font-style: normal;
    }

    /* 목록 초기화 */
    dl, ul, li, ol, menu {
      list-style: none;
    }

    /* 이미지 초기화 */
    button {
      border: none;
      outline: none;
      background: none;
    }
    img, fieldset {
      border: 0;
    }
    
    /* 폰트/제목 태그 초기화 */
    body, input, textarea, select, button, table {
        font-family: 'Nanum Gothic', sans-serif;
        color: #222;
        font-size: 13px;
        line-height: 1.5;
    }
    h1, h2, h3, h4, h5, h6 {
      font-size: 13px;
      font-weight: normal;
    }
`;

export default GlobalStyle;