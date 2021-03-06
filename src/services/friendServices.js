import railsAPI from '../config/api';

// methods to retrieve and store data in RailsAPI in relation to friends
export async function addFriends(data) {
    const response = await railsAPI.post("/api/friendships", {
        "email": `${data.email}`
    })
    return response.data
}

export async function showFriends() {
    const response = await railsAPI.get(`/api/friendships/`)
    return response.data
}

export async function deleteFriend(username) {
    const response = await railsAPI.delete(`/api/friendships/${username}`)
    return response.data
}