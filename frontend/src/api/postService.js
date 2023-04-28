export async function getAllPosts() {
    const response = await fetch('http://localhost:5287/api/Post');
    return await response.json();
}

export async function createPost(data) {
    const response = await fetch(`http://localhost:5287/api/Post`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}