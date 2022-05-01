import { SearchBar, FilmList, Pagination } from "modules";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { filmsActions } from "redux/films/FilmsSlice";
import {
  getFilmsSelector,
  getSearchedFilmsSelector,
} from "redux/films/selectors";
import { getMoviesInPortfolioSelector } from "redux/user/selectors";
import { MovieContainer, HomePageContainer, Title } from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const films = useSelector(getFilmsSelector);
  const searchedFilms = useSelector(getSearchedFilmsSelector);
  const movies = useSelector(getMoviesInPortfolioSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(4);

  localStorage.setItem("movies", JSON.stringify(movies));

  const searchText = searchParams.get("searchText") || "";

  const onSelectedValues = (key, searchParam) => {
    searchParams.set(key, searchParam);
    setSearchParams(searchParams);
  };

  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);
  const currentSearchedFilms = searchedFilms.slice(
    indexOfFirstFilm,
    indexOfLastFilm
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(filmsActions.setSearchText(searchText));
    if (searchText) {
      dispatch(filmsActions.getSeacrchedFilms());
    }
  }, [dispatch, searchText]);

  return (
    <HomePageContainer>
      <SearchBar searchParam={searchText} onSelectedParams={onSelectedValues} />
      {Boolean(searchedFilms.length) && (
        <>
          <Title>Searched movies</Title>
          <MovieContainer>
            <FilmList movies={currentSearchedFilms} />
            <Pagination
              filmsPerPage={filmsPerPage}
              totalFilms={searchedFilms.length}
              paginate={paginate}
            />
          </MovieContainer>
        </>
      )}
      <Title>Popular movies</Title>
      <MovieContainer>
        <FilmList movies={currentFilms} />
        <Pagination
          filmsPerPage={filmsPerPage}
          totalFilms={films.length}
          paginate={paginate}
        />
      </MovieContainer>
    </HomePageContainer>
  );
};

export default Home;
