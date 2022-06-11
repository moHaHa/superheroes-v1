import axios from 'axios'
const instance = axios.create({ validateStatus: () => true })

instance.interceptors.response.use(
  (res) => {
    
    return res
  },
  (err) => {
    console.error(err)
  }

)
export default instance
