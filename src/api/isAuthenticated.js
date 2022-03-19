export async function isAuthenticated() {
    const response = await fetch(`https://expensee-server.herokuapp.com/user/authenticationCheck`, {
        method: 'get',
        credentials: "include",
        mode: 'cors',
        headers: {
            "Content-type": "application/json"
        }
    })
    return response.json()
}