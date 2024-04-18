import { useContext, useState } from "react";
import styles from "./Home.module.css";
import { ProjectContext } from "../../store/project-context";

const Home = () => {

  const {addPost} = useContext(ProjectContext)
  const [data,setData] = useState({
    names: "",
    schoolname:"",
    goal:"",
    job:"",
  })

  // const nameRef = useRef();
  // const schoolnameRef = useRef();
  // const goalRef = useRef();
  // const jobRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const name = nameRef.current.value;
    // const schoolname = schoolnameRef.current.value;
    // const goal = goalRef.current.value;
    // const job = jobRef.current.value;
    setData({})
    addPost(data);
    console.log(data)
  };
  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            // ref={nameRef}
            onChange={(e)=> setData((prevState) => ({...prevState, name: e.target.value}))}
            id="name"
            placeholder="Enter Your Name : "
          />
        </div>
        <div>
          <label htmlFor="schoolname">School : </label>
          <input
            type="text"
            // ref={schoolnameRef}
            onChange={(e)=> setData((prevState) => ({...prevState, schoolname: e.target.value}))}
            id="schoolname"
            placeholder="Enter Your School Name : "
          />
        </div>
        <div>
          <label htmlFor="goal">Goal : </label>
          <input
            type="text"
            // ref={goalRef}
            onChange={(e)=> setData((prevState) => ({...prevState, goal: e.target.value}))}
            id="goal"
            placeholder="Describe Your Goal : "
          />
        </div>
        <div>
          <label htmlFor="job">Job : </label>
          <input
            type="text"
            // ref={jobRef}
            onChange={(e)=> setData((prevState) => ({...prevState, job: e.target.value}))}
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
