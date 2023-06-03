const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_PREV_PAGE = 'SET_PREV_PAGE';
const SET_NEXT_PAGE = 'SET_NEXT_PAGE';

const initialState = {
  usersData: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
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
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
      case SET_PREV_PAGE:
        return {
          ...state,
          currentPage: action.currentPage - 1
        }
      case SET_NEXT_PAGE:
        return {
          ...state,
          currentPage: action.currentPage + 1
        }
    default:
      return state;
  }
};

export const followActionCreator = (userId) => {
  return {
    type: FOLLOW,
    userId
  };
};

export const unFollowActionCreator = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  };
};

// добавление юзеров
export const setUsersActionCreator = (users) => {
  return {
    type: SET_USERS,
    users
  };
};

// добавление общего количества юзеров
export const setTotalUsersActionCreator = (totalCount) => {
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

export default usersReducer;
