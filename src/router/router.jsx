import { createBrowserRouter } from 'react-router-dom';

import HeaderOnly from '../layouts/HeaderOnly/HeaderOnly';
import Home from '@/pages/Home/Home';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import App from '@/App';
import Explore from '@/pages/Explore/Explore';
import Details from '@/pages/Details/Details';
import NotFound from '@/pages/NotFound/NotFound';
import exploreLoader from './exploreLoader';
import SignUp from '@/pages/SignUp/SignUp';
import SignIn from '@/pages/SignIn/SignIn';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
         {
            path: '/',
            element: <HeaderOnly />,
            children: [
               {
                  index: true,
                  element: <Home />,
               },
               {
                  path: ':mediaType/:id',
                  element: <Details />,
               },
               {
                  path: 'signup',
                  element: <SignUp />,
               },
               {
                  path: 'signin',
                  element: <SignIn />,
               },
            ],
         },
         {
            path: '/',
            element: <MainLayout />,
            children: [
               {
                  path: ':mediaType',
                  element: <Explore />,
                  loader: exploreLoader,
               },
            ],
         },
      ],
   },
   // {
   //   path: '/contact',
   //   element: <Contact />
   // },
]);

export default router;
