import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8084/api'
});
const getUsers = async () => await axiosInstance.get(`/users`);
export default { getUsers };