import { pageRoutes } from "constants/pageRoutes";
import { Home, FilmPage, PortfolioPage } from "pages";

export const publicRoutes = [
  {
    path: pageRoutes.HOME_ROUTE,
    Component: <Home />,
  },
  {
    path: pageRoutes.FILM_ROUTE + "/:id",
    Component: <FilmPage />,
  },
  {
    path: pageRoutes.PORTFOLIO_ROUTE,
    Component: <PortfolioPage />,
  },
];
