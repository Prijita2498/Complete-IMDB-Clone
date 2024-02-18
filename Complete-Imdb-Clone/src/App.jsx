import "./App.css";
import Home from "./Pages/Home";
import MoviesCategory from "./Pages/MoviesCategory";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routePath } from "./assets/Route";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routePath.home} element={<Home />}/>
          <Route path={routePath.moviescategory} element={<MoviesCategory />}/>
          <Route path={routePath.invalid} element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
