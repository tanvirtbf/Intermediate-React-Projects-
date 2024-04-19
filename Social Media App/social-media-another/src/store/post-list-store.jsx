import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const defaultPostList = [
  {
    namee: 'Tanvir Ahmed',
    age: 25,
    classs: 14,
    job: 'Beauty Booth',
    jobDes: 'Frontend Developer'
  }
]

const ADDPOST = 'post/add'
const DELETEPOST = 'post/delete'

const reducer = (state, action)=>{
  switch(action.type){
    case ADDPOST:
      return [...state, action.payload]
    case DELETEPOST:
      return state.filter((item) => item.namee !== action.payload)
    default:
      return state;
  }
}

const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(reducer, defaultPostList);
  const addPost = (post) => {
    dispatchPostList({type: ADDPOST, payload: post})
    console.log(post)
  };
  const deletePost = (namee) => {
    dispatchPostList({type: DELETEPOST, payload: namee})
  };

  return (
    <PostListContext.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;
