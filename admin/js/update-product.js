//UPDATE/EDIT A PRODUCT
//  ROOT_URL = "http://localhost:5000/products" /id  ( PATCH)

console.log(window.location.search);
let urlParams = new URLSearchParams(window.location.search)
console.log(urlParams);
console.log(urlParams.get('id'));

async function fetchProduct() {
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
        document.getElementById('content-textarea').value = product.title;
        document.getElementById('content-textarea2').value = product.description;
        document.getElementById('content-textarea3').value = product.price;
        document.getElementById('content-textarea4').value = product.stock;
        document.getElementById('content-textarea5').value = product.category;
        

    } catch (error) {
        console.log(error);
    }
}
fetchProduct()


async function updateProduct() {

    checkAccessToken()

    try {
        document.getElementById('update-product-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log(e.target);

         let title = document.getElementById('content-textarea').value
         let description = document.getElementById('content-textarea2').value
         let price = document.getElementById('content-textarea3').value
         let stock = document.getElementById('content-textarea4').value
         let category = document.getElementById('content-textarea5').value

        let formDataObject = {
          title,
          description,
          price,
          stock,
          category
          
        }
        console.log(JSON.stringify(formDataObject))


            const response2 = await fetch(ROOT_URL + '/products/' + urlParams.get('id'), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',

                    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIwMDAiLCJkYXRlIjoiMjAyMy0wMS0yOFQxOTo1MzoyMi4wODJaIiwiaWF0IjoxNjc1MDA0MDc4fQ.7rfWU0MQkCP99S9RHtYxQa_sBWPk2nypk6lFtCIp2S4',
                },
            
                body: JSON.stringify(formDataObject)
            })
            location.replace('manage-products.html');
        //console.log(response2)    
        });
       
    } catch (error) {
        console.log(error);
    }

}
updateProduct();



