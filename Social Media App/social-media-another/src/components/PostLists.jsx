import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import Loading from "./Loading";
import NoPost from "./NoPost";
import Post from "./Post";

const PostLists = () => {
  const { postList, fetching } = useContext(PostListContext);
  console.log(postList);

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
