import MovieCard from "./MovieCard"

function Movies() {
  return (
    <div className="p-5">
        <div className="m-5 text-2xl font-bold text-center">
            Trending Movies
        </div>
        <div className="my-5 flex flex-wrap  justify-around ">
        <MovieCard/>        
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>        
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>        
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>        
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        </div>
    </div>
  )
}

export default Movies