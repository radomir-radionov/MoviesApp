import { FilmList } from "modules";
import { useSelector } from "react-redux";

import { getMoviesInPortfolioSelector } from "redux/user/selectors";
import {
  MovieContainer,
  PortfolioPageContainer,
  Title,
  TitleBox,
} from "./styles";

const PortfolioPage = () => {
  let movies = useSelector(getMoviesInPortfolioSelector);

  return (
    <PortfolioPageContainer>
      <TitleBox>
        <Title>Your movies</Title>
      </TitleBox>
      <MovieContainer>
        <FilmList movies={movies} />
      </MovieContainer>
    </PortfolioPageContainer>
  );
};

export default PortfolioPage;
