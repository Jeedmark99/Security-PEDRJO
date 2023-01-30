
console.log(window.location.search);
let urlParams = new URLSearchParams(window.location.search)
console.log(urlParams);
console.log(urlParams.get('id'));


async function updateProduct() {
    checkAccessToken();

    try {
        const response = await fetch(ROOT_URL + urlParams.get('id'), {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        });
        const product = await response.json()
        console.log(product)
        document.getElementById('content-textarea').value = product.content;

        const response1 = await fetch(`http://localhost:5000/products/${id}`,{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({  
                username: "user1",
                password: "whatever123"
            }) 
        });

        const data = await response1.json();
        console.log(data.accessToken);
    } catch (error) {
        console.log(error);
    }
}
updateProduct()


