import styles from "./Search.module.scss";
import clsx from "clsx";
import {
  AiOutlineSearch,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import { useEffect, useState } from "react";

import Filter from "./Filter/Filter";
import useClickOutside from "~/hooks/useClickOutSide";
import request from "~/request/request";
import LazyImage from "~/components/LazyImage/LazyImage";
import Popper from "~/components/Popper/Popper";

function Search() {
  const [openFilter, setOpenFilter] = useState(false);
  const [filterValue, setFilterValue] = useState("All");
  const [filterEndpoint, setFilterEndpoint] = useState("multi");

  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSearchResult, setShowSearchResult] = useState(false);

  useEffect(() => {
    if (searchValue.trim()) {
      setShowSearchResult(true);
    }
    const fetchApi = async () => {
      const params = {
        api_key: process.env.REACT_APP_API_KEY,
        language: "en-US",
        query: searchValue,
        page: 1,
        include_adult: false,
      };
      try {
        const { data } = await request.get(`search/${filterEndpoint}`, {params});
        setSearchResult(data.results);
        setOpenFilter(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchApi();
  }, [searchValue, filterEndpoint]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filterButtonRef = useClickOutside(() => {
    setOpenFilter(false);
  });

  const searchRef = useClickOutside(() => {
    setShowSearchResult(false);
  });

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  const handleChangeFilter = (item) => {
    setFilterValue(item.label);
    setFilterEndpoint(item.filterEndpoint);
  };



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
          className={clsx(styles.fsilterBox)}
          value={filterValue}
        />
      </div>

      <input
        value={searchValue}
        onChange={handleChange}
        onFocus={() => setShowSearchResult(true)}
        placeholder="Enter keywords..."
        type="text"
      />

      <div className={clsx(styles.searchButton)}>
        <AiOutlineSearch size="2rem" />
      </div>

      {showSearchResult && searchResult.length > 0 && (
        <Popper className={clsx(styles.searchResultWrapper)}>
          {searchResult.map((item) => {
            let year;
            if (item.firstAirDate) {
              year = item.firstAirDate.split("-")[0];
            }
            console.log(item);
            return (
              <div key={item.id} className={clsx(styles.resultItem)}>
                <LazyImage
                  src={`${process.env.REACT_APP_IMAGE_BASE_URL}${item.backdropPath}`}
                />
                <div className={clsx(styles.resultBody)}>
                  <h4>{item.name || item.title}</h4>
                  <p>{year}</p>
                  <p>{item.originalName}</p>
                </div>
              </div>
            );
          })}
        </Popper>
      )}
    </div>
  );
}

export default Search;
