import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
];

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key="name" path={path} element={<Component />}></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
