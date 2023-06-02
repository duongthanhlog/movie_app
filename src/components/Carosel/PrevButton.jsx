import clsx from "clsx";
import styles from './Carosel.module.scss'
import { BiChevronLeft } from "react-icons/bi";

const PrevButton = (props) => {
    if (props.onClick === null) return;
    return (
      <BiChevronLeft
        onClick={props.onClick}
        className={clsx(styles.leftButton)}
      />
    );
};
export default PrevButton
