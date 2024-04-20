import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/post-list-store";
import Loading from "./Loading";
import NoPost from "./NoPost";
import Post from "./Post";

const PostLists = () => {
  const { postList } = useContext(PostListContext);
  console.log(postList);

  // const [fetching, setFetching] = useState(false);

  // useEffect(() => {
  //   setFetching(true);

  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   fetch("https://dummyjson.com/posts", {signal})
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addPostFromServer(data.posts);
  //       setFetching(false);
  //     });
    
  //     return () => {
  //       console.log('Cleaning up useEffect..')
  //       controller.abort();
  //     }
  // }, []);

  return (
    <div className="postLists">
      { postList.length === 0 ? (
        <NoPost />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostLists;
