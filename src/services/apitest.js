import railsAPI from '../config/api';

export async function getMovies() {
    const response = await railsAPI.get('/api/watchlists')
    return response.data
}