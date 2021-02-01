import railsAPI from '../config/api';

export async function getMovies() {
    const response = await railsAPI.get('/api/watchlists')
    console.log(response)
    return response.data
}