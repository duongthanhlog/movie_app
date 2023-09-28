import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import router from './router/router';
import store from './store/store';
import { ThemeProvider } from 'react-bootstrap';
import ContextProvider from './context/Context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
   <Provider store={store}>
      <GlobalStyles>
         <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <ContextProvider>
               <QueryClientProvider client={queryClient}>
                  <RouterProvider router={router} />
               </QueryClientProvider>
            </ContextProvider>
         </ThemeProvider>
      </GlobalStyles>
   </Provider>
);
