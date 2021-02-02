import railsAPI from '../config/api';

export async function getMovies() {
    const response = await railsAPI.get('/api/watchlists')
    console.log(response)
    return response.data
}

export async function getMovie(id) {
    const response = await railsAPI.get(`/api/watchlists/${id}`)
    return response.data
}