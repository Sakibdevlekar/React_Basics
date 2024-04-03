import { Link,useParams } from "react-router-dom";
import FilmIcon from "../assets/cinema-preview.png";
function Navbar() {
  const {userId} = useParams()
  console.log(userId);
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4 text-blue-500 font-bold text-2xl">
      <Link to="/">
        <img className="w-[50px]" src={FilmIcon} alt="" />
      </Link>
      <Link to="/">Movies</Link>
      <Link to="/watchlist">Watchlist</Link>
    </div>
  );
}

export default Navbar;
