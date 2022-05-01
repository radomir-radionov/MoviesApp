import { Spinner } from "components";
import { FilmItem } from "modules";
import { useSelector } from "react-redux";
import { getLoadingSelector } from "redux/films/selectors";
import { MovieContainer } from "./styles";

const FilmList = ({ movies }) => {
  const loading = useSelector(getLoadingSelector);

  return (
    <MovieContainer>
      {loading ? (
        <Spinner />
      ) : (
        movies.map((film) => <FilmItem key={film.id} film={film} />)
      )}
    </MovieContainer>
  );
};

export default FilmList;
