import { useContext, useRef } from "react";
import styles from "./Home.module.css";
import { ProjectContext } from "../../store/project-context";

const Home = () => {

  const {addPost} = useContext(ProjectContext)


  const nameRef = useRef();
  const schoolnameRef = useRef();
  const goalRef = useRef();
  const jobRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const schoolname = schoolnameRef.current.value;
    const goal = goalRef.current.value;
    const job = jobRef.current.value;

    nameRef.current.value = ""
    schoolnameRef.current.value = ""
    goalRef.current.value = ""
    jobRef.current.value = ""
    
    addPost({name,schoolname,goal,job});
    console.log({name,schoolname,goal,job})
  };
  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            ref={nameRef}
            id="name"
            placeholder="Enter Your Name : "
          />
        </div>
        <div>
          <label htmlFor="schoolname">School : </label>
          <input
            type="text"
            ref={schoolnameRef}
            id="schoolname"
            placeholder="Enter Your School Name : "
          />
        </div>
        <div>
          <label htmlFor="goal">Goal : </label>
          <input
            type="text"
            ref={goalRef}
            id="goal"
            placeholder="Describe Your Goal : "
          />
        </div>
        <div>
          <label htmlFor="job">Job : </label>
          <input
            type="text"
            ref={jobRef}
            id="job"
            placeholder="Enter Your Job : "
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
