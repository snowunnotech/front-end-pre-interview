import axios from 'axios'
let API = "https://cors-anywhere.herokuapp.com/https://demo.api-platform.com"

export default function(action,url,data){
  return axios({
    method: action,
    url: `${API}/${url}`,
    data:data
  })
}
