import railsAPI from "../config/api";

// methods to retrieve and post data to railsAPI
export async function signUp(data) {
  const response = await railsAPI.post("/api/auth/sign_up", data);
  return response.data;
}

export async function signIn(data) {
  const response = await railsAPI.post("/api/auth/sign_in", data);
  return response.data;
}

export async function showUser(data) {
  const response = await railsAPI.get("/api/auth/profile", data);
  return response.data;
}

export async function update(data) {
  const response = await railsAPI.put("/api/auth/update", data);
  return response.data;
}

export async function deleteAccount(data) {
  const response = await railsAPI.delete("/api/auth/delete", data);
  return response.data;
}

export async function signOut(data) {
  sessionStorage.clear();
  return "Logged out";
}
