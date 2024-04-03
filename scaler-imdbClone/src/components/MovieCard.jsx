function MovieCard() {
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXzZvZ_he-Ph2k8YbkYjV_2-e1xHZDb2GYladEJaWSQ&s)`,
      }}
    ></div>
  );
}

export default MovieCard;
