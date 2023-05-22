import { Outlet } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchConfigUrl } from "./store/Slices/homeSlice";
import Modal from "./components/Modal/Modal";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchConfigUrl());
  }, [dispatch])

  return (
      <div className="App">
        <Outlet />
        <Modal />
      </div>
  );
}

export default App;
