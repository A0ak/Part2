import axios from 'axios'


const baseUrl = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = import.meta.env.VITE_SOME_KEY 


const getWeather = (city) => {
    const requestUrl = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`
    return axios.get(requestUrl)
}


export default { getWeather }