import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import NoPost from "./NoPost";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";

const PostLists = () => {

  const postList = useLoaderData()

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

export const PostLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
