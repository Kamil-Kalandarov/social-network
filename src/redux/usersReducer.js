const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_PREV_PAGE = 'SET_PREV_PAGE';
const SET_NEXT_PAGE = 'SET_NEXT_PAGE';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

const initialState = {
  usersData: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  followingInProgress: [] // массив айдишников, на которые происходит запрос подписки или отписки
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(currentUser => { // создается и возвращается только копия того юзера, у когторого что-то меняется
          if (currentUser.id === action.userId) {
            return { ...currentUser, followed: true }
          }
          return currentUser  // остальные пользователи копируются и возвращаются без изменений
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(currentUser => {
          if (currentUser.id === action.userId) {
            return { ...currentUser, followed: false }
          }
          return currentUser
        })
      };
    case SET_USERS:
      return {
        ...state, 
        usersData: action.users
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
      case SET_PREV_PAGE:
        return {
          ...state,
          currentPage: action.currentPage - 1
        };
      case SET_NEXT_PAGE:
        return {
          ...state,
          currentPage: action.currentPage + 1
        };
      case TOGGLE_PRELOADER:
        return {
          ...state,
          isLoading: action.loaderSatus
        }
      case TOGGLE_FOLLOWING_PROGRESS:
        return {
          ...state,
          followingInProgress: action.loadingStatus // если запрос начался, 
            ? [...state.followingInProgress, action.userId] // то в массив followingInProgress, добавляется id клинкнутого пользваотеля для подписик
            : state.followingInProgress.filter(id => id !== action.userId) // если запрос закончился, то удалется выше добавленный id
        }
    default:
      return state;
  };
};

export const follow = (userId) => {
  return {
    type: FOLLOW,
    userId
  };
};

export const unfollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  };
};

// добавление юзеров
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  };
};

// добавление общего количества юзеров
export const setTotalUsers = (totalCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount
  };
};

// изменение текущей страницы
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  };
};

// переключение на предыдущую страницу
export const setPrevPage = (currentPage) => {
  return {
    type: SET_PREV_PAGE,
    currentPage
  };
};

// переключение на следующую страницу
export const setNextPage = (currentPage) => {
  return {
    type: SET_NEXT_PAGE,
    currentPage
  };
};

// переключение прелоадера
export const togglePreloader = (loaderSatus) => {
  return {
    type: TOGGLE_PRELOADER,
    loaderSatus
  };
};

// дизайбл кнопки подписки во время запроса
export const toggleFollowingProgress = (loadingStatus, userId) => {
  return {
    type: TOGGLE_FOLLOWING_PROGRESS,
    loadingStatus,
    userId
  };
};

export default usersReducer;
