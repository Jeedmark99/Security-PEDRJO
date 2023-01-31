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



async function fetchAllProducts(){
    try{
        const response1 = await fetch('http://localhost:5000/api-users/token%27,%7B',{
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

        const response2 = await fetch ('http://localhost:5000/products', {
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
            productsHTML += ` <tbody class = "productList"> <td>${product.title}</td> <td>${product.description}</td> <td>${product.price}</td> <td>${product.stock}</td> <td>${product.category}</td> <td>${productDate.toLocaleDateString()}</td> <td>
                <a href="update-product.html?id=${product._id}" class="edit-links">Edit</a> <a href="#" class="delete-products-links" data-id=${product._id}>Delete</a></td> </tbody> `;
        }

        document.getElementById('all-products').innerHTML += productsHTML

    } catch (error){
        console.log(error);
    }
}

fetchAllProducts();

