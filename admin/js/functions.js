// const ROOT_URL = "localhost:5000";
const ROOT_URL = "http://localhost:5000";

async function generateAccessToken() {
    try {
        const response1 = await fetch(
            ROOT_URL+ '/api-users/token', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username:"admin", password:"123"}) // body data type must match "Content-Type" header
        });
        const data = await response1.json();
        console.log(data.accessToken);

        localStorage.setItem('accessToken', data.accessToken)
        console.log(localStorage.getItem('accessToken'));
    } catch (error) {
        console.log(error);
    }
}

function checkAccessToken() {
    if (!localStorage.getItem('accessToken')) {
        generateAccessToken()
    }
}