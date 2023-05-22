import styles from "./SideBar.module.scss";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import clsx from "clsx";
import { AiOutlineCaretDown } from "react-icons/ai";

import Popper from "@/components/Popper/Popper";
import useClickOutside from "@/hooks/useClickOutSide";
import Button from "@/components/Button/Button";
import { memo } from "react";


const sortByData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
  { value: "original_title.desc", label: "Title (Z-A)" },
];
function SelectSort({ onchangeSort, label }) {
  const [open, setOpen] = useState(false)

  const selectSortRef = useClickOutside(() => {
    setOpen(false);
  });

  return (
    <Button
      onClick={() => setOpen(!open)}
      className={clsx(styles.select)}
      rightIcon={<AiOutlineCaretDown />}
      ref={selectSortRef}
    >
      <div className={clsx(styles.selectTitle)}>{label}</div>
      {open && (
        <Popper className={clsx(styles.optionsWrap)}>
          {sortByData.map(item => (
            <div
              onClick={() => onchangeSort(item)}
              className={clsx(styles.option)}
              key={uuidv4()}
              value={item.value}
            >
              {item.label}
            </div>
          ))}
        </Popper>
      )}
    </Button>
  );
}

export default memo(SelectSort);
