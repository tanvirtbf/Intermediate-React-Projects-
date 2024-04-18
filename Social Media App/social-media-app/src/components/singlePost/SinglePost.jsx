import styles from "./SinglePost.module.css";

const SinglePost = ({name,schoolname,goal,job}) => {
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
    </div>
  );
};

export default SinglePost;
