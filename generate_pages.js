// Make an HTTP GET request to fetch the JSON data from the URL
fetch("https://raw.githubusercontent.com/inksew/datacamera/main/lights.json")
    .then(response => response.json())
    .then(products => {
        // Loop through the products and generate product pages
        products.forEach(product => {
            const productPage = document.createElement('div');
            productPage.innerHTML = `
                <!-- Include the HTML template here -->
            `;
            
            // Customize the product page with data from the fetched JSON
            productPage.querySelector('title').textContent = product.name;
            productPage.querySelector('.product-image img').src = `image_path_for_${product.id}.png`; // Replace with actual image path
            productPage.querySelector('.product-details h2').textContent = product.name;
            productPage.querySelector('.product-details p').textContent = product.email;
            productPage.querySelector('.btn_one').href = `tel:${product.phone}`;
            productPage.querySelector('.btn_two').textContent = `${product.price} AZN`;

            // Append the generated product page to the body
            document.body.appendChild(productPage);
        });
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });
