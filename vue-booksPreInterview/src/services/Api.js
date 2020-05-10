import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://demo.api-platform.com/books`,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  })
}