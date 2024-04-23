import axios from 'axios'


const axiosPublic =  axios.create({
    baseURL: 'https://bistro-restaurant-server-na3r.onrender.com',
  })

const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic;

  