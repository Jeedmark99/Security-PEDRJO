async function createProduct() {

    checkAccessToken()

    try {
        document.getElementById('create-product-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log(e.target);

            let formData = new FormData(e.target); 
            let formDataObject = {
                content: formData.get('content')
            }

            console.log(JSON.stringify(formDataObject));


            const response2 = await fetch(ROOT_URL + '/products' , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                },
                body: JSON.stringify(formDataObject)
            })
           // location.replace('index.html');
        });

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
    return JSON.stringify(obj);
};
