export async function getAllOrder() {

    const response = await fetch('http://localhost:5287/api/Order');
    return await response.json();
}

export async function createOrder(data) {
    const response = await fetch(`http://localhost:5287/api/Order`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}

export async function getAllOrderConfirm() {

    const response = await fetch('http://localhost:5287/api/{id}');
    return await response.json();
}
export async function createOrderConfirm(data) {
    const response = await fetch(`http://localhost:5287/api/{id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}
// export async function getAllOrderCancel() {

//     const response = await fetch('http://localhost:5287/api/{id}cancel');
//     return await response.json();
// }