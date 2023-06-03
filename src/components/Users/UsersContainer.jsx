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
} from "../../redux/usersReducer";

// контейнерная компонента для BLL оборачивается в другую контейнерную компоненту, которая оьращается к store

class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      });
  };

  onUsersPageClick = (selectedPage) => {
    this.props.setCurrentPage(selectedPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${selectedPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      });
  };

  onPrevUsersPage = (currentPage) => {
    this.props.setPrevPage(currentPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage - 1}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      });
  };

  onNextUsersPage = (currentPage) => {
    this.props.setNextPage(currentPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage + 1}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      });
  };

  render() {
    return (
      <Users 
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);
