import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/post-list-store";
import Loading from "./Loading";
import NoPost from "./NoPost";
import Post from "./Post";

const PostLists = () => {
  const { postList, addPostFromServer } = useContext(PostListContext);
  console.log(postList);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPostFromServer(data.posts);
        setFetching(false);
      });
  }, []);

  return (
    <div className="postLists">
      {fetching && <Loading />}
      {!fetching && postList.length === 0 ? (
        <NoPost />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostLists;
