import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import Post from "./Post";
import NoPost from "./NoPost";

const PostLists = () => {
  const { postList } = useContext(PostListContext);
  console.log(postList)

  const onFetchPost = () =>{
    console.log('hello')
  }
  return (
    <div className="postLists">
      { postList.length ===0 ? <NoPost onFetchPost={onFetchPost}/> : postList.map((post) => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostLists;
