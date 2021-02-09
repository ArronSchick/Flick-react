import railsAPI from '../config/api';

// method to retrieve movies from railsAPI
export async function storeMovies(data) {
    const response = await railsAPI.post('/api/watchlists', data)
    console.log(response)
}