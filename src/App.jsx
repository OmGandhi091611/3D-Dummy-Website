import Spline from "@splinetool/react-spline";
import { useState, useEffect, useRef } from "react";
import Pagination from "./Pagination";
export default function App() {
  const [page, setPage] = useState(1);
  const prevPage = useRef(0);
  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
  }, []);
  const handleWheel = (e) => {
    window.removeEventListener("wheel", handleWheel);
    if (e.deltaY < 0) {
      if (prevPage.current > 0) {
        prevPage.current -= 1;
        setPage(prevPage.current + 1);
      }
    } else if (e.deltaY > 0) {
      if (prevPage.current < 2) {
        prevPage.current += 1;
        setPage(prevPage.current + 1);
      }
    }
    setTimeout(() => {
      window.addEventListener("wheel", handleWheel);
    }, 2000);
  };
  const handlePageChange = (index) => {
    setPage(index);
  };
  return (
    <>
      {page === 1 && (
        <Spline
          className="fade-in"
          scene="https://prod.spline.design/VVB9qLT8ul6D8HBm/scene.splinecode"
        />
      )}
      {page === 2 && (
        <Spline
          className="fade-in"
          scene="https://prod.spline.design/7tYRgnsxa8djTyAK/scene.splinecode"
        />
      )}
      {page === 3 && (
        <Spline
          className="fade-in"
          scene="https://prod.spline.design/sGcAZ69TckKHGzBo/scene.splinecode"
        />
      )}
      <Pagination activePage={page} setActivePage={handlePageChange} />
    </>
  );
}
