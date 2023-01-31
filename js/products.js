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
            productsHTML += `
            <div id="art-cards">
                <tbody class="productList">
                    <td>   
                        <img src="${product.image}">
                    </td>
                    <br>
                    <h3> <td> ${product.title} </td> </h3>
                    <br>
                    <i><td>${product.description}</td></i>
                    <p>Price: $<td>${product.price}</td></p>
                    <p>Stock: <td>${product.stock}</td></p>
                    <p>Category: <td>${product.category}</td></p>
                    <p>Date added: <td>${productDate.toLocaleDateString()}</td></p>
                </tbody>
            </div> `;
        }

        document.getElementById('all-products').innerHTML += productsHTML

    } catch (error){
        console.log(error);
    }
}

fetchAllProducts();

const allProducts = document.getElementById('all-products');
console.log(allProducts);
