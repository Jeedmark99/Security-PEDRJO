
console.log(window.location.search);
let urlParams = new URLSearchParams(window.location.search)
console.log(urlParams);
console.log(urlParams.get('id'));

async function fetchProduct() {
    // console.log(JSON.stringify({username:"admin", password:"123"}));
    checkAccessToken();
    

    try {
        const response = await fetch(ROOT_URL + '/products/' + urlParams.get('id'), {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIwMDAiLCJkYXRlIjoiMjAyMy0wMS0yOFQxOTo1MzoyMi4wODJaIiwiaWF0IjoxNjc1MDA0MDc4fQ.7rfWU0MQkCP99S9RHtYxQa_sBWPk2nypk6lFtCIp2S4'
            }
        });

        const product = await response.json()
        console.log(product)
        document.getElementById('content-textarea').value = product.content;

    } catch (error) {
        console.log(error);
    }
}
fetchProduct()


async function createProduct() {

    checkAccessToken()

    try {
        document.getElementById('update-product-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log(e.target);

         let title = document.getElementById('title').value
         let price = document.getElementById('price').value
         let stock = document.getElementById('stock').value
         let category = document.getElementById('category').value
         let description = document.getElementById('description').value

        let formDataObject = {
          title,
          description,
          price,
          stock,
          category
          
        }
        console.log(JSON.stringify(formDataObject))


            const response2 = await fetch(ROOT_URL + '/products' + urlParams.get('id'), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',

                    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIwMDAiLCJkYXRlIjoiMjAyMy0wMS0yOFQxOTo1MzoyMi4wODJaIiwiaWF0IjoxNjc1MDA0MDc4fQ.7rfWU0MQkCP99S9RHtYxQa_sBWPk2nypk6lFtCIp2S4',

                    //'Content-Type': 'application/x-www-form-urlencoded'

                },
            
                body: JSON.stringify(formDataObject)
            })
            //location.replace('index.html');
        //console.log(response2)    
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
    return obj;
};

