import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import NoPost from "./NoPost";
import Post from "./Post";

const PostLists = () => {
  const { postList, addPostFromServer } = useContext(PostListContext);
  console.log(postList);

  const onFetchPost = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPostFromServer(data.posts)
      });
  };
  return (
    <div className="postLists">
      {postList.length === 0 ? (
        <NoPost onFetchPost={onFetchPost} />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostLists;
