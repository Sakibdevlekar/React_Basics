import { useState , useEffect} from 'react'
import './App.css'
import searchIcon from  "./search.svg"

// 1f00898a
const API_URL = `https://www.omdbapi.com?apikey=1f00898a`

function App() {
  const [count, setCount] = useState(0)
  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data);
    return data
  }

  useEffect(()=>{
    searchMovies('avengers')

  },[])

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input type="text"
        placeholder='search for a movie'
        value={'superman'}
        onChange={() => {}}
        />
        <img src={searchIcon} alt="search" 
        onClick={searchMovies}
        />
      </div>
    </div>
  )
}

export default App
