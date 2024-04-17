import { useRef } from 'react';
import styles from './Home.module.css'

const Home = () => {
  const nameRef = useRef("")
  const schoolnameRef = useRef("")
  const goalRef = useRef("")
  const jobRef = useRef("")

  const handleSubmit = (e) => {
    e.preventDefault();
        const name = nameRef.current.value
        const schoolname = schoolnameRef.current.value
        const goal = goalRef.current.value
        const job = jobRef.current.value
    addPost({name,schoolname,goal,job})
  };
  return (
    <div className={styles.main}>
      <form>
        <div>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" placeholder="Enter Your Name : " ref={nameRef}/>
        </div>
        <div>
          <label htmlFor="schoolname">School : </label>
          <input type="text" id="schoolname" placeholder="Enter Your School Name : " ref={schoolnameRef}/>
        </div>
        <div>
          <label htmlFor="goal">Goal : </label>
          <input type="text" id="goal" placeholder="Describe Your Goal : " ref={goalRef}/>
        </div>
        <div>
          <label htmlFor="job">Job : </label>
          <input type="text" id="job" placeholder="Enter Your Job : " ref={jobRef}/>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
