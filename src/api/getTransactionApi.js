export async function requestTransactions(route, userData) {
    const response = await fetch(`https://expensee-server.herokuapp.com/transaction/${route}`, {
        method: 'get',
        credentials: "include",
        mode: 'cors',
        headers: {
            "Content-type": "application/json"
        }
    })
    return response.json()
}