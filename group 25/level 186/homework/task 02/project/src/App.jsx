import { useState } from "react";
import LikeView from "./Likeview";

function LikeContainer() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <LikeView
      likes={likes}
      onLike={handleLike}
    />
  );
}

export default LikeContainer;