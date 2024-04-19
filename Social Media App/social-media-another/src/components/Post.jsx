import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const Post = ({ namee, age, classs, job, jobDes }) => {
  const {deletePost} = useContext(PostListContext)
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Name : {namee}</h5>
          <h5 className="card-title">Age : {age}</h5>
          <h5 className="card-title">Class : {classs}</h5>
          <h5 className="card-title">Job : {job}</h5>
          <h5 className="card-title">Job Description : {jobDes}</h5>
          <button onClick={()=> deletePost(namee)}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default Post;
