window.addEventListener('load', function () {
let subtotalAmount = document.querySelector('.subtotalAmount')
let discountAmount = document.querySelector('.discountAmount')
let totalAmount = document.querySelector('.totalAmount')

    if (sessionStorage.discount) {
   
        let subtotal = subtotalAmount.textContent;

        let discount = (subtotal * (sessionStorage.discount/100)).toFixed(2)

        discountAmount.innerHTML = discount
        

        totalAmount.innerHTML = (subtotal - discount).toFixed(2)

}


})