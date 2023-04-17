import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Habit from "./Pages/Habit";
import New from "./Pages/New";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Habit" element={<Habit />}></Route>
          <Route path="/New" element={<New />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
