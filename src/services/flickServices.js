import railsAPI from '../config/api';

export async function storeMovies(data) {
    const response = await railsAPI.post('/api/watchlists', data)
    console.log(response)
}