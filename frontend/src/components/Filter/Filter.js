import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  resetFilter,
  selectTitleFilter,
  selectAuthorFilter,
  setAuthorFilter,
} from "../../redux/slices/filterSlice";
import "./Filter.css";


const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);


  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
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
        <button type="button" onClick={handleResetFilter}>Reset Filters</button>
      </div>
    </div>
  );
};

export default Filter;
