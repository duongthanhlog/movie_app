import clsx from "clsx";
import Popper from "~/components/Popper/Popper";
import styles from "./Filter.module.scss";
import Button from "~/components/Button/Button";
import { AnimatePresence, motion } from "framer-motion";
import { listFilter } from "./contants";

function Filter({ className, onChangeFilter, value, show }) {
  const classes = clsx(styles.popper, className);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, translateY: "-8px" }}
          animate={{ opacity: 1, translateY: "0" }}
          exit={{ opacity: 0, translateY: "-8px" }}
          className={classes}
        >
          <Popper>
            {listFilter.map((item) => {
              if (item.footer) {
                return (
                  <Button
                    className={clsx(styles.filterItem)}
                    leftIcon={item.leftIcon}
                    rightIcon={item.rightIcon}
                    key={item.id}
                  >
                    {item.label}
                  </Button>
                );
              }
              return (
                <Button
                  className={clsx(styles.filterItem, {
                    [styles.active]: value === item.label,
                  })}
                  leftIcon={item.icon}
                  key={item.id}
                  onClick={() => onChangeFilter(item)}
                >
                  {item.label}
                </Button>
              );
            })}
          </Popper>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Filter;
