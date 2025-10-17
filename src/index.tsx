import React from "react";
import { createRoot } from "react-dom/client"; 
import { Provider } from 'react-redux';
import App from "./App";
import GlobalStyle from '~/styles/GlobalStyle';
import store from '~/store';

const container = document.querySelector("#root"); // 루트 DOM 요소 가져옴

if (container) {
    const root = createRoot(container); //createRoot로 새 루트를 생성

    root.render( // root.render 호출
        <React.Fragment>
            <GlobalStyle/>
            <Provider store={store}>
                <App />
            </Provider>
        </React.Fragment>
    );
}