import clsx from "clsx";
import styles from "./Carosel.module.scss";
import { BiChevronRight } from "react-icons/bi";

const NextButton = (props) => {
  if (props.onClick === null) return;
  return (
    <BiChevronRight
      onClick={props.onClick}
      className={clsx(styles.rightButton)}
    />
  );
};

export default NextButton;
