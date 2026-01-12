function MovieHeader({ title, posterImg }) {
    return (
        <>
            <h2>{title}</h2>
            <img src={posterImg} alt={title} />
        </>
    )
}
export default MovieHeader;