import railsAPI from '../config/api';

export async function addFriends(data) {
    const response = await railsAPI.post("/api/friendships", {
        "email": `${data.email}`
    })
    return response.data
}

// export async function showFriends(username) {
//     const response = await railsAPI.get(`/api/friendships/${username}`)
// }