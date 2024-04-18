import { createContext, useState } from "react";

export const ProjectContext = createContext({
  addPost: () => {},
  data: [],
});

export const ProjectDataContext = ({ children }) => {
  const [data, setData] = useState([]);
  const addPost = (postData) => {
    setData([...data, postData]);
    console.log(data);
  };
  return (
    <>
      <ProjectContext.Provider value={{ addPost, data, }}>
        {children}
      </ProjectContext.Provider>
    </>
  );
};
