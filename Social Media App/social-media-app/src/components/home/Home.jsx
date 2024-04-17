import styles from './Home.module.css'

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" placeholder="Enter Your Name : " />
        </div>
        <div>
          <label htmlFor="schoolname">School : </label>
          <input type="text" id="schoolname" placeholder="Enter Your School Name : " />
        </div>
        <div>
          <label htmlFor="goal">Goal : </label>
          <input type="text" id="goal" placeholder="Describe Your Goal : " />
        </div>
        <div>
          <label htmlFor="job">Job : </label>
          <input type="text" id="job" placeholder="Enter Your Job : " />
        </div>
      </form>
    </div>
  );
};

export default Home;
