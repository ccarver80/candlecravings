import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { About, Blog } from "./Components/Pages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
