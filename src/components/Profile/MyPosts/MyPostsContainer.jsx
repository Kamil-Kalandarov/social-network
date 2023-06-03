import MyPosts from './MyPosts';
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../redux/profileReducer";
import { connect } from 'react-redux';

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
