import axios from 'axios';

const railsAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

railsAPI.interceptors.request.use((req) => {
    const token = sessionStorage.getItem('token');
    console.log("set token header:", token);
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req
})
export default railsAPI;