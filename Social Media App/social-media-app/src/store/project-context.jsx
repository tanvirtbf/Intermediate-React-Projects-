import { createContext, useState } from "react";

export const ProjectContext = createContext({
  addPost: () => {},
  data: [],
  handleDelete: () => {},
});

export const ProjectDataContext = ({ children }) => {
  const [data, setData] = useState([]);
  const addPost = (postData) => {
    setData([...data, postData]);
    console.log(data);
  };
  const handleDelete = (num) => {
    const newData = data.filter((item) => item.name !== num)
    setData(newData)
  }
  return (
    <>
      <ProjectContext.Provider value={{ addPost, data, handleDelete }}>
        {children}
      </ProjectContext.Provider>
    </>
  );
};
