const baseUrl = 'http://localhost:3030/jsonstore/users'

export default {
    async getAll() {
        const response = await fetch(baseUrl);
        const result = await response.json();
        const users = Object.values(result);

        return users;
    },
    async create(userData) {
        const postData = {
            ...userData,
            "createdAt": new Date().toISOString(),
            "updatedAt": new Date().toISOString(),
        }

        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const result = await response.json();

        return result;
    }
}