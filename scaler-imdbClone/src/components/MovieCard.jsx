function MovieCard({ data, handelAddToWatchlist, removeWatchlist, watchlist }) {
  const doesContain = (data) => {
    return watchlist.some((movie) => movie.id === data.id);
  };

  return (
    <>
      <div
        className="mt-8 h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex  flex-col justify-between items-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data.poster_path})`,
        }}
      >
        {doesContain(data) ? (
          <div
            onClick={() => removeWatchlist(data)}
            className=" h-8 w-8 m-4 flex  rounded-lg items-center justify-center  bg-gray-900/60 "
          >
            &#10060;
          </div>
        ) : (
          <div
            onClick={() => handelAddToWatchlist(data)}
            className=" h-8 w-8 m-4 flex  rounded-lg items-center justify-center  bg-gray-900/60 "
          >
            &#128525;
          </div>
        )}

        <div className="text-white  text-xl w-full  p-2 text-center  bg-gray-900/60">
          {data.original_title}
        </div>
      </div>
    </>
  );
}

export default MovieCard;
