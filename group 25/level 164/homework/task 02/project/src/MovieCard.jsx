import MovieHeader from "./MovieHeader";
import ReviewBody from "./ReviewBody";
import Reviewer from "./Reviewer";

function MovieCard({ movieObject }) {
    return (
        <div className="movie-card">
            <MovieHeader
                title={movieObject.title}
                posterImg={movieObject.posterImg} />
            
            <ReviewBody reviewText={movieObject.reviewText} />
            <Reviewer reviewer={movieObject.reviewer} />
        </div>
    )
}

export default MovieCard;