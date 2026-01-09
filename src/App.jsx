import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Home from "./pages/Home.jsx"
import CellPowered from "./pages/CellPowered.jsx"

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const pageClasses = ["page-home", "page-cell-powered"];
    const { pathname } = location;

    const pageClass = pathname.startsWith("/cell-powered")
      ? "page-cell-powered"
      : "page-home";

    document.documentElement.classList.remove(...pageClasses);
    document.body.classList.remove(...pageClasses);

    document.documentElement.classList.add(pageClass);
    document.body.classList.add(pageClass);

    return () => {
      document.documentElement.classList.remove(pageClass);
      document.body.classList.remove(pageClass);
    };
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cell-powered" element={<CellPowered />} />
    </Routes>
  );
}
