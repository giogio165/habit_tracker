import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Habit from "./Pages/Habit";
import Table from "./Pages/Table";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Table" element={<Table />}></Route>
          <Route path="/Habit" element={<Habit />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
