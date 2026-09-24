let products = [];

function addProduct(e) {
    e.preventDefault();
    let productInput = document.getElementById("product");
    let product = productInput.value.trim();

    if (product === "") {
        return;
    }

    products.push(product);
    productInput.value = "";
    displayProducts();
}

function displayProducts() {
    let productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach(function (item, index) {
        let listItem = document.createElement("li");
        listItem.append(document.createTextNode(item + " "));

        let editButton = document.createElement("button");
        editButton.type = "button";
        editButton.textContent = "Edit";
        editButton.onclick = function () {
            editProduct(index);
        };

        let deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            deleteProduct(index);
        };

        listItem.append(editButton, document.createTextNode(" "), deleteButton);
        productList.appendChild(listItem);
    });
}

function editProduct(index) {
    let updatedProduct = prompt("Edit product:", products[index]);

    if (updatedProduct !== null && updatedProduct.trim() !== "") {
        products[index] = updatedProduct.trim();
        displayProducts();
    }
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}
