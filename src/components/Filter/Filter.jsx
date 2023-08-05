import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, setFilter } from 'redux/contacts/filtersSlice';
import { selectFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  const handleFilterClear = () => {
    dispatch(clearFilter());
  };

  return (
    <label className="d-block ">
      Find contacts by name
      <div className="input-group input-group-lg mb-2">
        <input
          className="form-control"
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleFilterClear}
          disabled={!filter}
        >
          clean up
        </button>
      </div>
    </label>
  );
};

export default Filter;
