import { Tick } from "assets/images";
import { Button } from "components";
import requestsURL from "constants/requestsURL";
import { FilmList, Pagination } from "modules";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { filmsActions } from "redux/films/FilmsSlice";
import {
  getMovieDetailsSelector,
  getMovieRecommendationsSelector,
} from "redux/films/selectors";
import { getMoviesInPortfolioSelector } from "redux/user/selectors";
import { userActions } from "redux/user/UserSlice";
import { v4 as uuidv4 } from "uuid";
import {
  MovieCard,
  MovieListContainer,
  MoviePageContainer,
  Image,
  Title,
  Header,
  LeftContainer,
  RightContainer,
  Body,
  CardText,
  CardTitle,
  InfoBox,
  ImageTick,
} from "./styles";

const FilmPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(4);
  const movieDetails = useSelector(getMovieDetailsSelector);
  const movieRecommendations = useSelector(getMovieRecommendationsSelector);
  const userMovies = useSelector(getMoviesInPortfolioSelector);

  const isFavorites = userMovies.find((movie) => movie.id === movieDetails.id);
  const locationArray = location.pathname.split("/");
  const currentID = locationArray[2];

  const onClickAddToPortfolio = () => {
    dispatch(userActions.addToPortfolio(movieDetails));
  };

  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;

  const currentMovies = movieRecommendations.slice(
    indexOfFirstFilm,
    indexOfLastFilm
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(filmsActions.getMovieDetailsData(currentID));
    dispatch(filmsActions.getMovieRecommendationsData(currentID));
  }, [currentID, dispatch]);

  return (
    <MoviePageContainer>
      <MovieCard>
        <LeftContainer>
          <Image src={requestsURL.IMAGE_FILM + movieDetails.poster_path} />
        </LeftContainer>
        <RightContainer
          img={requestsURL.IMAGE_FILM + movieDetails.backdrop_path}
        >
          <InfoBox>
            <Header>
              <Title>{movieDetails.original_title}</Title>
            </Header>
            <Body>
              <CardTitle>Overview</CardTitle>
              <CardText>{movieDetails.overview}</CardText>
              <CardTitle>Release date</CardTitle>
              <CardText>{movieDetails.release_date}</CardText>
              <CardTitle>Duration</CardTitle>
              <CardText>{movieDetails.runtime}m.</CardText>
              <CardTitle>Genres</CardTitle>
              <CardText>
                {movieDetails.genres &&
                  movieDetails.genres.length &&
                  movieDetails.genres.map((genre) => (
                    <span key={uuidv4()}> {genre.name}</span>
                  ))}
              </CardText>
            </Body>
            <Button onClick={onClickAddToPortfolio} disabled={isFavorites}>
              Add to portfolio
            </Button>
          </InfoBox>
          {isFavorites && <ImageTick src={Tick} alt="Tick" />}
        </RightContainer>
      </MovieCard>
      {Boolean(movieRecommendations.length) && (
        <>
          <Title>Movies recommendations</Title>
          <MovieListContainer>
            <FilmList movies={currentMovies} />
            <Pagination
              filmsPerPage={filmsPerPage}
              totalFilms={movieRecommendations.length}
              paginate={paginate}
            />
          </MovieListContainer>
        </>
      )}
    </MoviePageContainer>
  );
};

export default FilmPage;
