import "./App.scss";
import Counter from "./pages/Counter/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./pages/Table/Table";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
