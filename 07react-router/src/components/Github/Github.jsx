// import { useEffect, useState} from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //     fetch(`https://api.github.com/users/sakibdevlekar`)
  //     .then(response => response.json())
  //     .then(data => {
  //         setData(data)
  //     }
  //     );
  // }, [])
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">
      <img
        className="rounded-full w-96 h-96"
        src={data.avatar_url}
        alt="profile image"
      />
      Github followers:{data.followers}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/sakibdevlekar`);
  return response.json();
};
