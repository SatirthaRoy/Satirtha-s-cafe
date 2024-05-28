import axios from "axios"
import { useNavigate } from "react-router-dom"
import useData from "./useData";


const myAxios = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true
})

const useAxios = () => {
  const {logOut}  = useData();
  const navigate = useNavigate();
  myAxios.interceptors.response.use(res => {
    return res
  }, err => {
    const code = err.response?.status;
    if(code === 401 || code === 403) {
      logOut()
      .then(() => console.log('logged out'))
      navigate('/login');
    }
  })

  return myAxios;
}

export default useAxios