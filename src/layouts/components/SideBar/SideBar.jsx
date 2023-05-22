import clsx from "clsx";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";
import { useState, memo } from "react";
import { useDispatch } from "react-redux";

import { changeSortValue } from "@/store/Slices/sortSlice";
import styles from "./SideBar.module.scss";
import Button from "@/components/Button/Button";
import SelectSort from "./SelectSort";

function SideBar() {
  const [enableSort, setEnableSort] = useState(false);
  const [sortLabel, setSortLabel] = useState("Popularity Descending");
  const [sortValue, setSortValue] = useState("popularity.desc");
  const [sortHistory, setSortHistory] = useState([sortValue]);

  const dispatch = useDispatch();

  const [open, setOpen] = useState({
    sort: false,
    filter: false,
  });

  const toggleSortButton = () => {
    setOpen((prev) => ({ ...prev, sort: !open.sort }));
  };

  const toggleFilterButton = () => {
    setOpen((prev) => ({ ...prev, filter: !open.filter }));
  };

  const handleChangeSort = (item) => {
    const sortedValue = sortHistory.includes(item.value);
    if (sortedValue) {
      setEnableSort(false);
    } else {
      setSortValue(item.value);
      setSortLabel(item.label);
      setEnableSort(true);
    }
  };

  const handleSortMovie = () => {
    dispatch(changeSortValue(sortValue));
    setSortHistory(sortValue);
    setEnableSort(false);
  };

  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.filterPanel)}>
        <div onClick={toggleSortButton} className={clsx(styles.filterTitle)}>
          Sort{" "}
          {open.sort ? (
            <BiChevronDown size="2.4rem" />
          ) : (
            <BiChevronRight size="2.4rem" />
          )}
        </div>
        {open.sort && (
          <div className={clsx(styles.filterBody)}>
            <p>Sort Results By</p>
            <SelectSort onchangeSort={handleChangeSort} label={sortLabel} />
          </div>
        )}
      </div>

      <div className={clsx(styles.filterPanel)} onClick={toggleFilterButton}>
        <div className={clsx(styles.filterTitle)}>
          Filters
          {open.filter ? (
            <BiChevronDown size="2.4rem" />
          ) : (
            <BiChevronRight size="2.4rem" />
          )}
        </div>
      </div>
      <Button
        disabled={!enableSort}
        onClick={handleSortMovie}
        className={clsx(styles.searchButton)}
      >
        Search
      </Button>
    </div>
  );
}

export default memo(SideBar);
