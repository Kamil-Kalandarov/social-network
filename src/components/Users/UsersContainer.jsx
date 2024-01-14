import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { 
  follow, 
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
  followUser,
  unfollowUser,
} from "../../redux/usersReducer";
import Preloader from '../Preloader/Preloade';

/* UsersContainer получает данные из store от другой контейнерной компоненты через 'connect' */
class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  };

  onUsersPageClick = (selectedPage) => {
    this.props.setCurrentPage(selectedPage)
    this.props.getUsers(selectedPage, this.props.pageSize)
  };

  /* компонента Users получает данные и колбэки от UsersContainer через пропсы */
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
              follow={this.props.followUser}
              unfollow={this.props.unfollowUser}
              followingInProgress={this.props.followingInProgress}
          />
        }
      </>
    );
  };
};

/* данные из store, которы передаеются ниже в контейнерную компоненту */
const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

/* при помощи 'connect' создается контейнерная компонента, которая взаимодействует со 'store' 
и передает данные другой контейнерной компоненте (UsersContainer).
UsersContainer выполняет AJAX запросы, и уже передает дальше данные в презентационную компоненту 'Users' */
export default connect(mapStateToProps, 
{ toggleFollowingProgress, setCurrentPage, getUsers, followUser, unfollowUser })(UsersContainer);
