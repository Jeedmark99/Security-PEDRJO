// File might not be sent to github if it doesn't contain anything, so I added a comment.

/**
● admin/manage-products.html
○ En länk högst upp på sidan, som navigerar till products.html,
○ Knapp/länk som navigerar till admin/create-product.html
○ En lista på alla produkter i tabellform <table>
○ Tabellen skall ha följande kolumner
■ Title
■ Price
■ Stock
■ Date
■ Hantera: Innehåller 2 knappar:
● Knapp/länk redigera befintlig produkt. Navigerar till
admin/update-product.html
● Knapp/länk raderar befintlig produkt
 
 */
async function fetchAllProducts(){
    try{
        const response1 = await fetch('http://localhost:5000/api-users/token',{
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
            productsHTML += ` <tbody> <td>${product.title}</td> <td>${product.description}</td> <td>${product.price}</td> <td>${product.stock}</td> <td>${product.category}</td> <td>${product.date}</td> <td> <a href="#" class="edit-links">Edit</a> <a href="#" class="delete-links">Delete</a></td> </tbody> `;
        }

        document.getElementById('manage-products-table').innerHTML += productsHTML

    } catch (error){
        console.log(error);{}
    }
}

fetchAllProducts();

const manageProductsTable = document.getElementById('manage-products-table');
console.log(manageProductsTable);