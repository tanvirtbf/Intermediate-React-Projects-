import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  addPostFromServer: () => {},
  deletePost: () => {},
});

const ADDPOST = 'post/add'
const ADDPOSTFROMSERVER = 'post/add/fromServer'
const DELETEPOST = 'post/delete'

const reducer = (state, action)=>{
  switch(action.type){
    case ADDPOST:
      return [...state, action.payload]
    // case ADDPOSTFROMSERVER:
    //   return action.payload;
    case DELETEPOST:
      return state.filter((item) => item.id !== action.payload)
    default:
      return state;
  }
}

const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(reducer, []);

  const addPost = (post) => {
    dispatchPostList({type: ADDPOST, payload: post})
  };
  // const addPostFromServer = (allPosts) =>{
  //   dispatchPostList({type: ADDPOSTFROMSERVER, payload: allPosts})
  // }
  const deletePost = (userId) => {
    dispatchPostList({type: DELETEPOST, payload: userId})
  };

  return (
    <PostListContext.Provider
      value={{
        postList: postList,
        addPost: addPost,
        // addPostFromServer: addPostFromServer,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;
