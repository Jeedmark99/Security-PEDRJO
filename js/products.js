// File might not be sent to github if it doesn't contain anything, so I added a comment.
/**
 * Följande är obligatoriska delar för G-nivå:
● products.html:
○ En länk högst upp på sidan, som navigerar till admin sidan, dvs till
admin/manage-products.html
○ Visa en lista på alla produkter. Varje produkt skall visa minst
■ Title
■ Price

 * 
 */
const ROOT_URL = "https://ai-art-eshop.onrender.com";

async function fetchAllProducts(){
    try{
        const response1 = await fetch(ROOT_URL + '/api-users/token',{
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

        const response2 = await fetch (ROOT_URL + '/products', {
            method:"GET",
            headers:{
                'Authorization': 'Bearer ' + data.accessToken
            }

        });
        const products = await response2.json()
        console.log(products);

        let productsHTML = "";
        for (let product of products){
            let productDate = new Date(product.date)
            productsHTML += ` <tbody class = "productList"> <img src="http://127.0.0.1:5500/Security-PEDRJO/img/art7.jpg"> <td>${product.title}</td> <td>${product.description}</td> <td>${product.price}</td> <td>${product.stock}</td> <td>${product.category}</td> <td>${productDate.toLocaleDateString()}</td> </tbody> `;
        }

        document.getElementById('all-products').innerHTML += productsHTML

    } catch (error){
        console.log(error);
    }
}

fetchAllProducts();

const allProducts = document.getElementById('all-products');
console.log(allProducts);
