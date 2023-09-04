import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
})

export default instance
