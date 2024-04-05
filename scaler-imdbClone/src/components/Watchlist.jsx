import { useEffect, useState } from "react";
import genreids from "../utils/Genre";
import Search from "./Search";

function Watchlist({ watchlist, removeWatchlist, setWatchlist }) {
  // console.log(watchlist[0].genreids);
  const [search, setSearch] = useState("");
  const [genreList, setGenresList] = useState(["All Genres"]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const sortInc = () => {
    const sortedInc = [...watchlist].sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist(sortedInc);
  };

  const sortDesc = () => {
    const sortedDesc = [...watchlist].sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist(sortedDesc);
  };

  const handelFilter = (genre)=>{
    setCurrentGenre(genre);
  }

  useEffect(() => {
    let temp = watchlist.map((movie) => {
      return genreids[movie.genre_ids[0]];
    });
    temp = new Set(temp)
    setGenresList(["All Genres", ...temp]);
    // console.log(temp);
  }, [watchlist]);

  // useEffect(()=>{},[watchlist])

  return (
    <>
      <div className="flex justify-center flex-wrap gap-5 mt-5">
        {genreList.map((genre,index) => {
          return <div key={index} onClick={()=>handelFilter(genre)} className={ currentGenre==genre ?"flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white font-bold bg-blue-400 " :"flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white font-bold bg-gray-400 "}>
            {genre}
          </div>;
          
        })}
      </div>
      <Search handleSearch={handleSearch} searchText={search} />
      <div className="rounded-lg overflow-hidden border border-gray-200 mt-8 w-full">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center items-center">
                <div onClick={sortInc} className="p-2">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Rating</div>
                <div onClick={sortDesc} className="p-2">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Release Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {watchlist?.filter((movie)=>{
              if (currentGenre == "All Genres") {
                return true;
              }
              else{
                return genreids[movie.genre_ids[0]] == currentGenre
              }
            })
              ?.filter((movie) =>
                movie.original_title
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((movie, index) => (
                <tr key={index}>
                  <td className="flex items-center p-4">
                    <img
                      className="h-[10rem] w-[10rem]"
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt="movie image"
                    />
                    <div className="mx-6">{movie.original_title}</div>
                  </td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.release_date}</td>
                  <td
                    onClick={() => removeWatchlist(movie)}
                    className="text-red-800 font-semibold hover:cursor-pointer"
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
