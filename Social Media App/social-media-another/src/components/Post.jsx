const Post = ({ namee, age, classs, job, jobDes }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{namee}</h5>
          <h5 className="card-title">{age}</h5>
          <h5 className="card-title">{classs}</h5>
          <h5 className="card-title">{job}</h5>
          <h5 className="card-title">{jobDes}</h5>
        </div>
      </div>
    </>
  );
};

export default Post;
