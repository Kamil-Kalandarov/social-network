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
  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },
  unFollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data
      })
  },
  authCheck() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data
      })
  },
};
