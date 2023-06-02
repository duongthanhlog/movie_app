import clsx from "clsx";
import {
  AiOutlineSearch,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import { memo, useEffect, useLayoutEffect, useMemo, useState, useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import useClickOutside from "@/hooks/useClickOutSide";
import styles from "./Search.module.scss";
import Popper from "@/components/Popper/Popper";
import Filter from "./Filter/Filter";
import { resetResult, searchMovies } from "@/store/Slices/searchSlice";
import usePressKey from "@/hooks/usePressKey";
import { selectSearchResult } from "@/store/selectors";
import { useCallback } from "react";
import useDebounce from "@/hooks/useDebounce";
import Spinners from "./Spinner";

function Search() {
  const dispatch = useDispatch();

  const {
    result: searchResult,
    loading,
    noResult,
  } = useSelector(selectSearchResult);

  const [openFilter, setOpenFilter] = useState(false);
  const [filterValue, setFilterValue] = useState("All");
  const [filterSlug, setFilterSlug] = useState("multi");
  const [searchValue, setSearchValue] = useState("");
  const [showSearchResult, setShowSearchResult] = useState(false);

  const [activeIndex, onKeyDown] = usePressKey(searchResult);
  const debounceValue = useDebounce(searchValue, 500);


  const filterButtonRef = useClickOutside(() => {
    setOpenFilter(false);
  });

  const searchRef = useClickOutside(() => {
    setShowSearchResult(false);
  });

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  useEffect(() => {
    handleSearch();
  }, [filterSlug, debounceValue]);
  

  const handleSearch = () => {
    if (!debounceValue.trim()) {
      setShowSearchResult(false);
      dispatch(resetResult());
      return;
    }
    dispatch(searchMovies({ filterSlug, debounceValue }));
    setShowSearchResult(true);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  };

  const handleFocus = () => {
    if(debounceValue.trim()) {
      setShowSearchResult(true);
    }
  };

  const handleChangeFilter = useCallback(
    (item) => {
      setFilterValue(item.label);
      setFilterSlug(item.filterSlug);
      setOpenFilter(false)
    },
    [filterValue]
  );



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
        onFocus={handleFocus}
      />

      <div className={clsx(styles.searchButton)}>
        <AiOutlineSearch size="2rem" />
      </div>

      {showSearchResult && (
        <Popper className={clsx(styles.searchResultWrapper)}>
          {loading && <Spinners/>}
          {searchResult.length > 0 &&
            !loading &&
            searchResult?.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={clsx(styles.resultItem, {
                    [styles.active]: activeIndex === index,
                  })}
                >
                  <h4>{item.name || item.title}</h4>
                </div>
              );
            })}
          {noResult && !loading && debounceValue && (
            <div className={clsx(styles.footer)}>NO RESULTS</div>
          )}
        </Popper>
      )}
    </div>
  );
}

export default memo(Search);
