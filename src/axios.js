import axios from 'axios'
const instance = axios.create({
  baseURL: "http://webteam-001-site1.ftempurl.com/api",
  validateStatus: () => true })

instance.interceptors.response.use(
  (res) => {
    
    return res
  },
  (err) => {
    console.error(err)
  }

)
export default instance
