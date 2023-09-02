import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
      'API-KEY': '0ba896e0-62b8-41f3-8e17-a04b1ac6c0ca'
    },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  setCurrentUsersPage(selectedPage, pageSize) {
    return instance.get(`users?page=${selectedPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  setPrevUsersPage(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  setNextUsersPage(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
};
