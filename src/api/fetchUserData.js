export async function fetchUserData() {
    const response = await fetch(`https://expensee-server.herokuapp.com/allUserData`, {
        method: 'get',
        credentials: "include",
        mode: 'cors',
        headers: {
            "Content-type": "application/json"
        }
    })
    return await response.json()
}