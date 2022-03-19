export async function isAuthenticated() {
    const response = await fetch(`https://expensee-client.netlify.app/user/authenticationCheck`, {
        method: 'get',
        credentials: "include",
        mode: 'cors',
        headers: {
            "Content-type": "application/json"
        }
    })
    return response.json()
}