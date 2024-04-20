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
      { postList.length ===0 ? <NoPost onFetchPost={onFetchPost}/> : postList.map((item) => (
        <Post
          key={item.namee}
          namee={item.namee}
          age={item.age}
          classs={item.classs}
          job={item.job}
          jobDes={item.jobDes}
        />
      ))}
    </div>
  );
};

export default PostLists;
