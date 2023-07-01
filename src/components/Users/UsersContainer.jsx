import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users';
import { 
  follow, 
  setUsers, 
  unfollow,
  setTotalUsers,
  setCurrentPage,
  setPrevPage,
  setNextPage,
  togglePreloader,
} from "../../redux/usersReducer";
import Preloader from '../Preloader/Preloade';

/* UsersContainer выполняет AJAX запросы, а данные из store получает от другой контейнерной компоненты через 'connect' */
class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.togglePreloader(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.togglePreloader(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsers(response.data.totalCount)
      });
  };

  onUsersPageClick = (selectedPage) => {
    console.log(selectedPage);
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
              onPrevUsersPage={this.onPrevUsersPage}
              onNextUsersPage={this.onNextUsersPage}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
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
  };
};

/* при помощи 'connect' создается контейнерная компонента, которая взаимодействует со 'store' 
и передает данные другой контейнерной компоненте (UsersContainer).
UsersContainer выполняет AJAX запросы, и уже передает дальше данные в презентационную компоненту 'Users' */
export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalUsers,
  setCurrentPage,
  setPrevPage,
  setNextPage,
  togglePreloader
})(UsersContainer);
