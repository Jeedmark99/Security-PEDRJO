//          CREATE/ADD A NEW PRODUCT

async function createProduct() {

    checkAccessToken()

    try {
        document.getElementById('create-product-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log(e.target);

         let title = document.getElementById('content-textarea').value
         let price = document.getElementById('content-textarea2').value
         let stock = document.getElementById('content-textarea3').value
         let category = document.getElementById('content-textarea4').value
         let description = document.getElementById('content-textarea5').value

        let formDataObject = {
          title,
          description,
          price,
          stock,
          category
          
        }
        console.log(JSON.stringify(formDataObject))


            const response2 = await fetch(ROOT_URL + '/products'  , {
                method: 'POST',
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

