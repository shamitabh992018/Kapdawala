let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = cart.map((p, i) => `<li>${p.item} - ₹${p.price} <button onclick="removeFromCart(${i})">Remove</button></li>`).join("");
    document.getElementById("total").innerText = `Total: ₹${total}`;
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCartDisplay();
}

function placeOrder(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const contact = document.getElementById("contact").value;

    document.getElementById("checkout").style.display = "none";
    document.getElementById("confirmation").style.display = "block";

    const receipt = `
        Customer: ${name}<br>
        Address: ${address}<br>
        Contact: ${contact}<br>
        Payment Mode: Cash on Delivery<br>
        Total Paid: ₹${total}<br>
        Items: ${cart.map(p => p.item).join(", ")}
    `;
    document.getElementById("receipt").innerHTML = receipt;

    cart = [];
    total = 0;
    updateCartDisplay();
}
