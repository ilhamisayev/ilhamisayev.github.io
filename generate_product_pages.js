// Make an HTTP GET request to fetch the JSON data
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            // Create a new product page container
            const productPage = document.createElement('div');
            productPage.innerHTML = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>FOTOAPARAT KIRAYƏ</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
                    <link href="https://fonts.googleapis.com/css?family=Comfortaa:700" rel="stylesheet">
                    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
                    <link rel="stylesheet" href="products.css">
                    <script src="script.js" defer></script>
                    <style>
                        #particles-js {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            z-index: -1;
                        }
                    </style>
                </head>
                <body>
                    <div id="particles-js"></div>
                    <header>
                        <div class="header-content">
                            <h1>FOTOAPARAT KIRAYƏ</h1>
                            <nav>
                                <ul>
                                    <li><a href="index.html">Ana Səhifə</a></li>
                                </ul>
                            </nav>
                        </div>
                    </header>

                    <div class="product-container">
                        <div class="product-image">
                            <img src="${product.imageSrc}" alt="${product.name}">
                        </div>
                        <div class="product-details">
                            <h2>${product.name}</h2>
                            <p style="font-size: x-large;">
                                ${product.description}
                            </p>
                            <a class="btn_one contact-button" href="tel:${product.contact}">Əlaqə</a>
                            <button class="btn_two">${product.price} AZN</button>
                        </div>
                    </div>

                    <footer>
                        <!-- Your footer content here -->
                    </footer>

                    <script src="index.js" type="text/javascript"></script>
                    <script src="particles.js"></script>
                    <script src="app.js"></script>
                </body>
                </html>
            `;

            // Append the generated product page to the body
            document.body.appendChild(productPage);
        });
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });
