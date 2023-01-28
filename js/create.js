async function createProduct() {
    try {
        document.getElementById('create-product-form').addEventListener('submit', async function(e) {
            e.preventDefault();;
            console.log(e.target);

            let detailsArea = document.getElementById('content-textarea').value
            console.log(detailsArea);
        }
    }

}