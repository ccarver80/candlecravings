import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
