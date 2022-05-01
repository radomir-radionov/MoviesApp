import { useLocation, useNavigate } from "react-router-dom";
import requestsURL from "constants/requestsURL";
import { useSelector } from "react-redux";
import { getGenresSelector } from "redux/films/selectors";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { pageRoutes } from "constants/pageRoutes";
import { userActions } from "redux/user/UserSlice";
import {
  Back,
  Body,
  ButtonBox,
  Card,
  CardText,
  Front,
  Image,
  ImageTick,
  Span,
  Title,
} from "./styles";
import { Button } from "components";
import { getMoviesInPortfolioSelector } from "redux/user/selectors";
import { Tick } from "assets/images";

const FilmItem = ({ film }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const genres = useSelector(getGenresSelector);
  const userMovies = useSelector(getMoviesInPortfolioSelector);

  const isFavorites = userMovies.find((movie) => movie.id === film.id);
  const filmGenres = film.genre_ids;

  const currentGenres = genres.filter(
    (genre) => filmGenres && filmGenres.includes(genre.id)
  );

  const onClickOpenFilmPage = () => {
    navigate(pageRoutes.FILM_ROUTE + "/" + film.id);
  };

  const onClickAddToPortfolio = () => {
    dispatch(userActions.addToPortfolio(film));
  };

  const onClickDeleteFromPortfolio = () => {
    dispatch(userActions.deleteFromPortfolio(film));
  };

  return (
    <Card>
      <Front>
        <Image
          src={requestsURL.IMAGE_FILM + film.poster_path}
          onClick={onClickOpenFilmPage}
        />
        {isFavorites && <ImageTick src={Tick} alt="Tick" />}
        <Body>
          <Title>{film.original_title}</Title>
          <CardText>
            Genres:
            {currentGenres &&
              currentGenres.map((genre) => (
                <Span key={uuidv4()}> {genre.name}</Span>
              ))}
          </CardText>
          <CardText>Rating: {film.vote_average}</CardText>
        </Body>
      </Front>
      <Back>
        <Image
          src={requestsURL.IMAGE_FILM + film.poster_path}
          onClick={onClickOpenFilmPage}
        />
        {isFavorites && <ImageTick src={Tick} alt="Tick" />}
        <ButtonBox>
          {location.pathname === pageRoutes.PORTFOLIO_ROUTE ? (
            <Button onClick={onClickDeleteFromPortfolio}>Delete</Button>
          ) : (
            <Button onClick={onClickAddToPortfolio} disabled={isFavorites}>
              Add to portfolio
            </Button>
          )}
        </ButtonBox>
      </Back>
    </Card>
  );
};

export default FilmItem;
