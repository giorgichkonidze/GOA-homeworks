function LikeView({ likes, onLike }) {
    return (
        <div>
            <h2>Likes: {likes}</h2>
            <button onClick={onLike}>
                LIKE
            </button>
        </div>
    )
}
export default LikeView;