import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Page from "./loginpage/page";
import Home from "./home/home";
import Detail from "./home/detail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Page />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
