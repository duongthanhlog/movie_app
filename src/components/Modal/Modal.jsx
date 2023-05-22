import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Modal.module.scss";
import { useContext, useEffect } from "react";
import { ModalContext } from "@/context/Context";
import { Logo } from "@/assests/Icons";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";

function Modal() {
  const { open , closeModal } = useContext(ModalContext);
  
  useEffect(() => {
    if(open) {
      document.body.style.overflowY = 'hidden'
    }
    else {
      document.body.style.overflowY = 'auto'
    }
  }, [open])


  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ translateY: '-100%' }}
          animate={{ translateY: 0 }}
          exit={{ translateY: '-100%' }}
          transition={{ duration: 0.3 }}
          className={clsx(styles.container)}
        >
          <div className={clsx(styles.heading)}>
            <Link onClick={closeModal} to='/'>
              <Logo width="100px" height="100px"/>
            </Link>
            <button onClick={closeModal} className={clsx(styles.closeIcon)}>
              <GrClose />
            </button>
          </div>
            <nav className={clsx(styles.menu)}>
                <h1><MdLocalMovies className={clsx(styles.menuHeadingIcon)}/>Discover</h1>
                <ul>
                  <Link onClick={closeModal} className={clsx(styles.menuItem)} to='movie'>Movie</Link>
                  <Link onClick={closeModal} className={clsx(styles.menuItem)} to='tv'>Tv</Link>
                </ul>
            </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
