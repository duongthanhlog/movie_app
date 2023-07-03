import styles from './ContentWrapper.module.scss'
import clsx from "clsx";

function ContentWrapper({ children, className }) {
  return (
    <div className={clsx(styles.container, className)}>
      {children}
    </div>
  );
}

export default ContentWrapper;
