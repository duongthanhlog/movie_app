import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import GlobalStyles from './components/GlobalStyles/GlobalStyles'

import App from './App';
import router from './router';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </RouterProvider>
    </Provider>
);