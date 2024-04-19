const CreatePost = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Enter Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Enter Your Age
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="class" className="form-label">
            Enter Your Class
          </label>
          <input
            type="text"
            className="form-control"
            id="class"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="job" className="form-label">
            Enter Your Job
          </label>
          <input
            type="text"
            className="form-control"
            id="job"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Enter Your Job Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreatePost;
