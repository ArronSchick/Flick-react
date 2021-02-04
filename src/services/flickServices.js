import railsAPI from '../config/api';

export async function storeMovies() {
    const response = await railsAPI.post('/api/watchlists')
    console.log(response)
}