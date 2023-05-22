import { createContext, useState } from "react";

export const ModalContext = createContext(null);

function ContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const toggleModal = () => {
    setOpen(!open);
  };

  const value = {
    openModal,
    closeModal,
    toggleModal,
    open,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export default ContextProvider;
