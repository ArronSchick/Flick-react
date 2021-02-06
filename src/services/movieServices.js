import railsAPI from '../config/api';

export async function getMovies(username) {
    const response = await railsAPI.get(`/api/watchlists/${username}`)
    return response.data
}

export async function getMovie(id) {
    const response = await railsAPI.get(`/api/watchlists/${id}`)
    return response.data
}

export async function deleteMovie(id) {
    const response = await railsAPI.delete(`/api/watchlists/${id}`)
    return response.data
}
