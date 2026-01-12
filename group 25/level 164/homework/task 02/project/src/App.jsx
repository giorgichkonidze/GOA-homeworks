import movieData from "./movieData";
import MovieCard from "./MovieCard";

function App() {
  return (
    <div>
      {movieData.map((movie, index) => (

        <MovieCard key={index} movieObject={movie} />
        
      ))}
    </div>
  )
}

export default App