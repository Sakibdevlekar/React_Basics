import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";


function Movies({handelAddToWatchlist, removeWatchlist,watchlist}) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  
  const handlePreviousPage = () =>{
    if (page !==0 && Math.sin(page) !== -1) {
      setPage((prev)=>prev-1)
    }
    setPage(1)

  }

  const handleNextPage = () =>{
    setPage((prev)=>prev+1)
  }
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzNkNmEzNzQzNDEzYWJiOWVlNWQzY2M1NWExY2FjNiIsInN1YiI6IjY2MGQ1OGZiMTQ5NTY1MDE3ZGJjNjRiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X8pKJfkZ3Q0QCR_AsOQ3qow1QnKdXYkbhyQmxgP4Gxg",
      },
    };
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
        options
      )
      .then((response) =>  setMovies(response.data.results));
  },[page]);
  return (
    <div className="p-5">
      <div className="m-5 text-2xl font-bold text-center">Trending Movies</div>
      <div className="my-5 flex flex-wrap  justify-around ">
        {movies.map((movieData,index) => {
          return <MovieCard key={index} data={movieData} handelAddToWatchlist={handelAddToWatchlist} removeWatchlist={removeWatchlist} watchlist={watchlist}/>;
        })}
      </div>
      <Pagination handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} page={page}/>
    </div>
  );
}

export default Movies;
