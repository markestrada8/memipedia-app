import axios from 'axios'

export default axios.create(
  {
    baseURL: 'https://markestrada.devcamp.space/memipedia/'
  }
)