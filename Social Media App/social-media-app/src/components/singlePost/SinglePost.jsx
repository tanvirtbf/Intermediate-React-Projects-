import { useContext } from "react";
import styles from "./SinglePost.module.css";
import { ProjectContext } from "../../store/project-context";

const SinglePost = ({name,schoolname,goal,job}) => {
  const {handleDelete} = useContext(ProjectContext)
  return (
    <div className={styles.main}>
      <div>
        <h4>Name: </h4>
        <p>{name}</p>
      </div>
      <div>
        <h4>School: </h4>
        <p>{schoolname}</p>
      </div>
      <div>
        <h4>Goal: </h4>
        <p>{goal}</p>
      </div>
      <div>
        <h4>Job: </h4>
        <p>{job}</p>
      </div>
      <div>
        <button onClick={() => handleDelete(name)}>Delete This Post</button>
      </div>
    </div>
  );
};

export default SinglePost;
