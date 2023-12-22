import axios from 'axios'

const api = axios.create({
  baseURL: 'http://172.16.2.19:3333/'
})

export default api;