

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
        const pun = await response.json()
        console.log(pun)
        document.getElementById('content-textarea').value = product.content;
    } catch (error) {
        console.log(error);
    }
}
updateProduct()

async function createProduct() {
    checkAccessToken()


    try {
        document.getElementById('update-product-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log(e.target);

            let formData = new FormData(e.target); // e.target is the form that is being submitted. Need to send in the whole form when using FormData
            let formDataObject = {
                content: formData.get('content')
            }
            console.log(JSON.stringify(formDataObject));

            const response2 = await fetch(ROOT_URL + '/products' + urlParams.get('id'), {
                method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(formDataObject) // body data type must match "Content-Type" header
            });

            location.replace('index.html'); // Redirect to index.html
        })

        
    } catch (error) {
        console.log(error);
    }
}
createProduct();


let serializeForm = function (form) {
    var obj = {};
    var formData = new FormData(form);
    // console.log(formData.getAll());

    for (var key of formData.keys()) {
        let inputData = formData.getAll(key);

        if (inputData.length > 1) {
            obj[key] = inputData;
        } else {
            obj[key] = inputData[0];    
        }
    }
    
    // console.log(obj);
    return obj;
};