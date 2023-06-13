import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users';
import { 
  followActionCreator, 
  setUsersActionCreator, 
  unFollowActionCreator,
  setTotalUsersActionCreator,
  setCurrentPage,
  setPrevPage,
  setNextPage,
  togglePreloader,
} from "../../redux/usersReducer";
import Preloader from '../Preloader/Preloade';

// контейнерная компонента для BLL оборачивается в другую контейнерную компоненту, которая обращается к store

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.togglePreloader(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.togglePreloader(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      });
  };

  onUsersPageClick = (selectedPage) => {
    this.props.setCurrentPage(selectedPage)
    this.props.togglePreloader(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${selectedPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.togglePreloader(false)
        this.props.setUsers(response.data.items)
      });
  };

  onPrevUsersPage = (currentPage) => {
    this.props.togglePreloader(true)
    this.props.setPrevPage(currentPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage - 1}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.togglePreloader(false)
        this.props.setUsers(response.data.items)
      });
  };

  onNextUsersPage = (currentPage) => {
    this.props.togglePreloader(true)
    this.props.setNextPage(currentPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage + 1}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.togglePreloader(false)
        this.props.setUsers(response.data.items)
      });
  };

  render() {
    return (
      <>
        { this.props.isLoading 
          ? <Preloader /> 
          : <Users 
          usersData={this.props.usersData}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          onUsersPageClick={this.onUsersPageClick}
          onPrevUsersPage={this.onPrevUsersPage}
          onNextUsersPage={this.onNextUsersPage}
          follow={this.props.follow}
          unFollow={this.props.unfollow}
          />
        }
      </>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId))
    },
    unfollow: (userId) => {
      dispatch(unFollowActionCreator(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersActionCreator(totalCount))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPage(currentPage))
    },
    setPrevPage: (currentPage) => {
      dispatch(setPrevPage(currentPage))
    },
    setNextPage: (currentPage) => {
      dispatch(setNextPage(currentPage))
    },
    togglePreloader: (loaderStatus) => {
      dispatch(togglePreloader(loaderStatus))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);
