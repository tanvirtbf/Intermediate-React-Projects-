import { createContext, useReducer, useState } from "react";

export const ProjectContext = createContext({
  addPost: () => {},
  data: [],
  handleDelete: () => {},
});

const ADDPOST = 'addPost'
const DELETEPOST = 'deletePost'

const reducer = (state,action) =>{
  switch(action.type){
    case ADDPOST: 
      return [...state, action.payload]
    case DELETEPOST:
      return state.filter((item) => item.name !== action.payload)
    default: 
      return state;
  }
}

export const ProjectDataContext = ({ children }) => {

  const [data, dispatch] = useReducer(reducer, []);

  const addPost = (postData) => {
    dispatch({type: ADDPOST, payload: postData})
  };
  const handleDelete = (num) => {
    dispatch({type: DELETEPOST, payload: num})
  }
  return (
    <>
      <ProjectContext.Provider value={{ addPost, data, handleDelete }}>
        {children}
      </ProjectContext.Provider>
    </>
  );
};
