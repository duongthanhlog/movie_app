import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchConfigUrl, fetchLanguage } from './store/Slices/homeSlice';
import Modal from './components/Modal/Modal';

function App() {
   const dispatch = useDispatch();

   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   useEffect(() => {
      dispatch(fetchConfigUrl());
      dispatch(fetchLanguage());
   }, [dispatch]);

   return (
      <div className="App">
         <Outlet />
      </div>
   );
}

export default App;
