import { Input } from "components";
import { Form, SearchBarContainer } from "./styles";

const SearchBar = ({ searchParam, onSelectedParams }) => {
  const onChangeEnterTextHandler = (e) => {
    onSelectedParams("searchText", e.target.value);
  };

  return (
    <SearchBarContainer>
      <Form>
        <Input value={searchParam} onChange={onChangeEnterTextHandler} />
      </Form>
    </SearchBarContainer>
  );
};

export default SearchBar;
