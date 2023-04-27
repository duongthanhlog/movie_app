import clsx from "clsx";
import styles from "./Popper.module.scss";
import { forwardRef } from "react";

function Popper({ children, className }, ref) {
  const classes = clsx(styles.popper, className);
  return <div ref={ref} className={classes}>{children}</div>;
}


export default forwardRef(Popper);
