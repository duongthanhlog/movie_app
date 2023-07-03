import clsx from "clsx";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";
import { useState, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./SideBar.module.scss";
import Button from "@/components/Button/Button";
import Sort from "../../../pages/Explore/Sort";

import { changeSortValue } from "@/store/Slices/sortSlice";
import { fetchGenres } from "@/store/Slices/homeSlice";
import { selectGenre } from "@/store/selectors";
import { getGenreIds } from "@/store/Slices/filterGenresSlice";

function SideBar() {
  const [enableSearch, setEnableSearch] = useState(false);
  const [sortLabel, setSortLabel] = useState("Popularity Descending");
  const [sortValue, setSortValue] = useState("popularity.desc");
  const [sortHistory, setSortHistory] = useState([sortValue]);
  const [genreIds, setGenreIds] = useState([])

  const dispatch = useDispatch();
  const { mediaType } = useParams();

  const [open, setOpen] = useState({
    sort: false,
    filter: false,
  });

  const { genres } = useSelector(selectGenre);

  useEffect(() => {
    dispatch(fetchGenres(mediaType));
  }, [mediaType]);

  useEffect(() => {
    dispatch(getGenreIds(genreIds))
  }, [genreIds])

  const toggleSortButton = () => {
    setOpen((prev) => ({ ...prev, sort: !open.sort }));
  };

  const toggleFilterButton = () => {
    setOpen((prev) => ({ ...prev, filter: !open.filter }));
  };

  const handleChangeSort = (item) => {
    const sortedValue = sortHistory.includes(item.value);
    if (sortedValue) {
      setEnableSearch(false);
    } else {
      setSortValue(item.value);
      setSortLabel(item.label);
      setEnableSearch(true);
    }
  };

  
  const handleChangeFilter = (id) => {
    setGenreIds(prev => {
      if(prev.includes(id)) {
        return prev.filter(item => item !== id)
      }
      else {
        return [...prev, id]
      }
    })
    setEnableSearch(true);
  }


  const handleFilterMovie = () => {
    dispatch(changeSortValue(sortValue));
    setSortHistory(sortValue);
    setEnableSearch(false);
  };


  return (
    <div className={clsx(styles.container)}>
      {/* <div className={clsx(styles.filterPanel)}>
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
            <Sort onchangeSort={handleChangeSort} label={sortLabel} />
            <p>Genres</p>
            <ul className={clsx(styles.genreList)}>
              {genres?.map((genre) => {
                return (
                  <li onClick={() => handleChangeFilter(genre.id)} className={clsx(styles.tag, {
                    [styles.active] : genreIds.includes(genre.id)
                  })} key={genre.id}>
                      {genre.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <Button
        disabled={!enableSearch}
        onClick={handleFilterMovie}
        className={clsx(styles.searchButton)}
      >
        Search
      </Button> */}
    </div>
  );
}

export default memo(SideBar);
