import clsx from "clsx";
import {
  AiOutlineSearch,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import useClickOutside from "@/hooks/useClickOutSide";
import styles from "./Search.module.scss";
import Popper from "@/components/Popper/Popper";
import Filter from "./Filter/Filter";
import { filterMovies } from "@/store/Slices/searchSlice";
import usePressKey from "@/hooks/usePressKey";
import { selectSearchResult } from "@/store/selectors";
import { useCallback } from "react";

function Search() {
  const dispatch = useDispatch();

  const { result : searchResult } = useSelector(selectSearchResult)
  
  const [openFilter, setOpenFilter] = useState(false);
  const [filterValue, setFilterValue] = useState("All");
  const [filterSlug, setFilterSlug] = useState('multi');
  const [searchValue, setSearchValue] = useState('');
  const [showSearchResult, setShowSearchResult] = useState(false);

  const [activeIndex, onKeyDown] = usePressKey(searchResult);

  const filterButtonRef = useClickOutside(() => {
    setOpenFilter(false);
  });

  const searchRef = useClickOutside(() => {
    setShowSearchResult(false);
  });

  useEffect(() => {
    handleFilterMovie()
  }, [filterSlug, searchValue, dispatch])

  const handleFilterMovie = () => {
    if (searchValue.trim()) {
      setShowSearchResult(true);
    }
    dispatch(filterMovies({filterSlug, searchValue }))
    setOpenFilter(false);
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  const handleChangeFilter = useCallback((item) => {
    setFilterValue(item.label);
    setFilterSlug(item.filterSlug);
  }, [filterValue])

  return (
    <div ref={searchRef} className={clsx(styles.search)}>
      <div ref={filterButtonRef} className={clsx(styles.filterButton)}>
        <div className={clsx(styles.filterText)} onClick={handleOpenFilter}>
          <span>{filterValue}</span>
          {!openFilter && <AiFillCaretDown size="1rem" />}
          {openFilter && <AiFillCaretUp size="1rem" />}
        </div>
        <Filter
          show={openFilter}
          onChangeFilter={handleChangeFilter}
          className={clsx(styles.filterBox)}
          value={filterValue}
        />
      </div>

      <input
        type="text"
        placeholder="Enter keywords..."
        value={searchValue}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        onFocus={() => setShowSearchResult(true)}
      />

      <div className={clsx(styles.searchButton)}>
        <AiOutlineSearch size="2rem" />
      </div>

      {showSearchResult && searchResult.length > 0 && (
        <Popper className={clsx(styles.searchResultWrapper)}>
          {searchResult.map((item, index) => {
            return (
              <div key={uuidv4()} className={clsx(styles.resultItem, {
                [styles.active] : activeIndex === index
              })}>
                <h4>{item.name || item.title}</h4>
              </div>
            );
          })}
        </Popper>
      )}
    </div>
  );
}

export default memo(Search);
