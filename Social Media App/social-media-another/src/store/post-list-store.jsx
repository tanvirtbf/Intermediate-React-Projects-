import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

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

  const [postList, dispatchPostList] = useReducer(reducer, []);
  const addPost = (post) => {
    dispatchPostList(post)
    console.log(post)
  };
  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
