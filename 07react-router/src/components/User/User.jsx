import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return <div className="bg-orange-700 text-5xl text-white">User: {userId}</div>;
}

export default User;
