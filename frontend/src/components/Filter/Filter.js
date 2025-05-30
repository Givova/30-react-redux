import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilter,
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from "../../redux/slices/filterSlice";
import "./Filter.css";


const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);


  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };


  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter());
  };

  const handleResetFilter = () => {
    dispatch(resetFilter());
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Filter by title..."
            onChange={handleTitleFilterChange}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            value={authorFilter}
            placeholder="Filter by author..."
            onChange={handleAuthorFilterChange}
          />
        </div>
        <div className="filter-group">
          <label>
            <input type="checkbox" checked={onlyFavoriteFilter} onChange={handleOnlyFavoriteFilterChange} />
            Only Favorites
          </label>
        </div>
        <button type="button" onClick={handleResetFilter}>Reset Filters</button>
      </div>
    </div>
  );
};

export default Filter;
