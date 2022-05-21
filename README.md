# Front-end Challenge

## About the Challenge

We will build a product list, with a slight twist. We provide you with a sample database of products (real products!) we use here in Siempre en Casa.

### What should you develop?

### Visual

We want you to feel free to develop the markup the way you want, we have no wireframes or something like that for this task. You will create one screen:

- Products page:
  - We want to see the products as cards, with the product title, price and buttons to add/remove the product .
  - When the user clicks on a product, we want to display the recommended items for that product. The customer should be able to add the recommended product to the cart, too.
  - The user should be able to filter all items matching a certain category. I.e. show "wines", or "beers" only.

### About the API

The API has the following endpoints:

- `products`
- `recommendations`
- `categories`

We will use a small server called [json-server](https://github.com/typicode/json-server) to serve the API.

```bash
# install the server (you may need to use _sudo_ to run this command)
npm install -g json-server
# start the server using a specific port
json-server --watch db.json --port 6000
```

The `/products` endpoint will give you a list of products:

```bash
curl localhost:6000/products
# sample output
[
    {
        "product_id": "4854054682669",
        "variant_id": "33619195002925",
        "total_price": "912.00",
        "price_per_unit": "152",
        "list_price_id": "7",
        "sku": "VINO-9991-6-6",
        "categories": [
            "vinos",
            "mas vendidos"
        ],
        "units_per_pack": 6,
        "image_url": "https://cdn.shopify.com/s/files/1/0257/2242/1293/products/SEC-Vinos-Novecento-Raices-Cabernet.jpg?v=1585767255",
        "handle": "vino-novecento-raices-750-ml-tinto-cabernet-sauvignon",
        "compare_at_price": "1140.00",
        "allowed_packs": [1, 2, 3],
        "name": "Vino Novecento Raices 750 ml - Tinto Cabernet Sauvignon",
        "description": "Vino Novecento Raices 750 ml",
        "discount_percentage": 20,
        "size": 750,
        "price_per_litre": "10"
    }
    ...
]
```

The `/recommendations` endpoint will give you a list of recommended products, based on a product_id:

```bash
curl localhost:6000/recommendations?product_id=4854058319917
# sample output
[
  {
    "product_id": "4854058319917",
    "recommendations": [
      "4854058647597",
      "4854058942509",
      "4854059270189"
    ]
  }
]
```

The `/categories` endpoint will give you a list with all the categories, we sell. Each product has a list of categories it may appear.

```bash
curl localhost:6000/categories
# example output
[
  "aguas",
  "vinos",
  "cervezas",
  "gaseosas",
  "mas vendidos"
]
```

### Tech Requirements

- You need to create a repo on GitHub to host your code
- We use Next.js so it would be great if you used it too 🔥
- Bonus points for Typescript
- We use styled-components too
- Keep it simple, no need for fancy stuff :)
- TESTS 💛 We really love testing our code and features here!
- You're not allowed to use any CSS Frameworks (Bootstrap, Bulma, PureCSS etc.)
- I want to be able to run your project locally by using `npm start`

## Evaluation Method

Your code will be under review of the Siempre en Casa Engineering team. What we will look for:

- **Good Practices and patterns**
- **Code and Folder Structure**
- **Componentization and data flow**
- **Easy to understand code (again, no need for fancy stuff)**
- **Tests**

Feel free to implement it the way you feel more confortable :)

## How to deliver it

Please, use Github to host your code and add send a link to the person who sent you the instructions.
