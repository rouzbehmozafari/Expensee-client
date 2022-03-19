export async function submitTransactionForm(route, userData) {
    const response = await fetch(`https://expensee-client.netlify.app/transaction/${route}`, {
        method: 'POST',
        credentials: "include",
        mode: 'cors',
        body: JSON.stringify(userData),
        headers: {
            "Content-type": "application/json"
        }
    })
    return response.json()
}