import { useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { SearchBox } from "./Filter.styled";

export function Filter() {
  const dispatch = useDispatch();
  
    return (
      <SearchBox>
        <label>
          <span>Find contacts by name</span>
          <input
            type="text"
            onChange={e => dispatch(setFilter(e.target.value.toLowerCase()))}
          />
        </label>
      </SearchBox>
    );
}