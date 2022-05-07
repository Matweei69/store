const cart = document.getElementById("cart")
const openCart = document.getElementById("cart-open")
const closeCart = document.getElementById("close-cart") 
function showCart(){
    cart.style.display = "flex"
    document.body.style.overflow = "hidden"
}
function hideCart (){
    cart.style.display = "none"
    document.body.style = "auto"
}
openCart.addEventListener("click", showCart)
closeCart.addEventListener("click", hideCart)