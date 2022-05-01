import { pageRoutes } from "constants/pageRoutes";
import NavBar from "modules/NavBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { filmsActions } from "redux/films/FilmsSlice";
import { publicRoutes } from "routes/routes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filmsActions.getFilmsData());
    dispatch(filmsActions.getGenresData());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} />
          ))}
          <Route path="*" element={<Navigate to={pageRoutes.HOME_ROUTE} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
