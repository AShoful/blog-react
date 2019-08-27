import axios from '../axios/';

export default {
  get: page => axios.get(`/posts/?page=${page}`),
  getItem: id => axios.get(`/posts/${id}`),
  // getUserPosts: (id, page) => axios.get(`/users/${id}?page=${page}`),
  remove: id => axios.delete(`/posts/${id}`),
  post: data => axios.post('/posts/', data),
  patch: (data, id) => axios.patch(`/posts/${id}`, data),
  postUser: data => axios.post('/register', data),
  loginUser: data => axios.post('/login', data),
};
