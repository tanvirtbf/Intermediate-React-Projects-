import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";


const CreatePost = () => {

  const {addPost} = useContext(PostList)

  const nameRef = useRef('')
  const ageRef = useRef('')
  const classRef = useRef('')
  const jobRef = useRef('')
  const jobDesRef = useRef('')

  const onSubmitFunc = (e) => {
    e.preventDefault();
    const namee = nameRef.current.value
    const age = nameRef.current.value
    const classs = classRef.current.value
    const job = jobRef.current.value
    const jobDes = jobDesRef.current.value
    addPost({namee,age,classs,job,jobDes})
  }

  return (
    <>
      <form onSubmit={onSubmitFunc}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Enter Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            ref={nameRef}
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
            ref={ageRef}
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
            ref={classRef}
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
            ref={jobRef}
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
            ref={jobDesRef}
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
