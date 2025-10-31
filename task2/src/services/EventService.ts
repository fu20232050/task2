import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage: number, page: number) {
    //return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`);
   },

   // 新增：获取所有事件（用于计算总数）
  getAllEvents() {
    return apiClient.get('/events');
  },

  getEvent(id: number) {
    return apiClient.get('/events/' + id)
   }
}

