import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./components/MainPage";
import DetailPageEcc from "./components/DetailPageEcc";
import RoutePage from "./components/Route";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/detailPage/ECC" element={<DetailPageEcc />} />
          <Route path="/RoutePage" element={<RoutePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
