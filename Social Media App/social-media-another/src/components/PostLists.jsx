import { useContext, useState } from "react";
import { PostListContext } from "../store/post-list-store";
import NoPost from "./NoPost";
import Post from "./Post";

const PostLists = () => {
  const { postList, addPostFromServer } = useContext(PostListContext);
  console.log(postList);
  const [fetched, setFetched] = useState(false);

  if (!fetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPostFromServer(data.posts);
      });
    setFetched(true)
  }

  return (
    <div className="postLists">
      {postList.length === 0 ? (
        <NoPost />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostLists;
