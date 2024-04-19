import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import Post from "./Post";

const PostLists = () => {
  const { PostList } = useContext(PostListContext);
  return (
    <div>
      {PostList.length !== 0 && PostList.map((item) => (
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
