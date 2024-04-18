import { createContext, useState } from "react";

export const ProjectContext = createContext(null)


export const ProjectDataContext = ({children}) =>{
  const [data,setData] = useState([])
  const addPost = (postData) =>{
    setData([
      ...data,
      postData
    ])
    // setData((prevState) => ({
    //   ...prevState, 
    //   postData
    // }))
    console.log(data)
  }
  return (
    <>
      <ProjectContext.Provider value={{addPost}}>
        {children}
      </ProjectContext.Provider>
    </>
  )
}



