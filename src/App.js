import { Routes, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import "./SCSS/App.scss";
import Archive from "./Pages/Archive";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
