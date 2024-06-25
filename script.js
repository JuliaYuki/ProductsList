const products = [
    { name: "T-shirt", price: 29.99 },
    { name: "Jeans Pants", price: 49.99 },
    { name: "Sneakers", price: 79.99 },
    { name: "Cap", price: 19.99 },
];

document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        const productName = document.createElement("div");
        productName.className = "product-name";
        productName.textContent = product.name;

        const productPrice = document.createElement("div");
        productPrice.className = "product-price";
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productList.appendChild(productDiv);
    });
});
