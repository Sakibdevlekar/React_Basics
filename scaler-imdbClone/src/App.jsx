import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  
  const [watchlist, setWatchlist] = useState([]);
  const addWatchlist = (movie) => {
    let newWatchlist = [...watchlist, movie];
    localStorage.setItem("movieApp", JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
   
  };
  const removeWatchlist = (movie) => {
    let newWatchlist = watchlist.filter((item) => item.id!== movie.id);
    localStorage.setItem("movieApp", JSON.stringify(newWatchlist));
    setWatchlist([...newWatchlist]);
  };
  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem("movieApp");
    if (!moviesFromLocalStorage) {
    return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage));
  },[watchlist])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies handelAddToWatchlist={addWatchlist} removeWatchlist={removeWatchlist} watchlist={watchlist} />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} removeWatchlist={removeWatchlist} setWatchlist={setWatchlist}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
