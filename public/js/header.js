window.addEventListener('load', function () {
  
  let contador = 1
  const cartIcon = () => {
        if (localStorage.carrito && localStorage.carrito != '{}') {
            document.querySelector('#cart-icon').innerHTML +=`<span class ="badge badge-danger badge-counter">${contador}</span>` 
        }
      }
    
      cartIcon()
})