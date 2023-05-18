import MyPosts from './MyPosts';
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../redux/profileReducer";
import { connect, useDispatch, useSelector } from 'react-redux';

/* const MyPostsContainer = (props) => {

  const { postsData, newPostText } = useSelector(store => store.profilePage)
  const dispatch = useDispatch()


  const addPost = () => {
    dispatch(addPostActionCreator())
  };

  const onPostChange = (postTextAreaValue) => {
    dispatch(updateNewPostTextActionCreator(postTextAreaValue))
  };

  return (
    <MyPosts 
      updateNewPostText={ onPostChange } 
      addPost={ addPost } 
      postsData={ postsData }
      newPostText= { newPostText }
    />
  )
}; */

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (postTextAreaValue) => {
      dispatch(updateNewPostTextActionCreator(postTextAreaValue))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
