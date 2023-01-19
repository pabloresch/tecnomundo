const container = document.querySelector('.cart-container')
const subtotal = document.getElementById('subtotal')
const total = document.getElementById('total')
const amount = document.querySelectorAll('amount')
const templateCarrito = document.getElementById('template-carrito').content
const button = document.getElementById('discount-button');
const input = document.getElementById('discount-input')

carrito = JSON.parse(localStorage.getItem('carrito'))
const fragment = document.createDocumentFragment()


const imprimirCarrito = () => {
    if(carrito) {
    Object.values(carrito).forEach(item => {
        templateCarrito.querySelector('div.amount').textContent = parseInt(item.price_product) * parseInt(item.cantidad);
        templateCarrito.querySelector('h4.description').textContent = item.description;
        templateCarrito.querySelector('h4.name').textContent = item.name;
        templateCarrito.querySelector('span.number').textContent = item.cantidad
        templateCarrito.querySelector('img').src = item.image_product

        //botones
        templateCarrito.querySelector('.fa-circle-minus').dataset.id = item.id
        templateCarrito.querySelector('.fa-circle-plus').dataset.id = item.id
        templateCarrito.querySelector('.remove').dataset.id = item.id
    
        const clone = templateCarrito.cloneNode(true)
    
        fragment.appendChild(clone)
        
    })
}
   container.appendChild(fragment)
}

const subtotalImprimir = () => {
    if(carrito) {
        let suma = 0
        Object.values(carrito).forEach(item => { 
            unitaryPrice = parseInt(item.price_product) * parseInt(item.cantidad)       
            suma = suma + unitaryPrice
        })
        subtotal.innerText = suma
    }
}

const discountImprimir = () => {
    if (sessionStorage.discount) {
        price = subtotal.textContent

        document.getElementById('discount-code-box').style.display = 'flex'
        document.querySelector('.h4-discount').innerText = `Descuento (${sessionStorage.discount} %)`
        document.getElementById('discount').innerText = (price * (sessionStorage.discount/100)).toFixed(2)
        
}
}

const totalImprimir = () => {
    let priceWithoutDiscount = subtotal.textContent
    
    let discount = document.getElementById('discount').textContent
    
    if(discount) {
        total.innerText = priceWithoutDiscount - discount
    } else {
        total.innerText = priceWithoutDiscount
    }
}

// Llamada a las funciones 

    imprimirCarrito()
    subtotalImprimir()
    discountImprimir()
    totalImprimir()

// Eventos


   container.addEventListener('click', (e) => {
          
    if(e.target.classList.contains('fa-circle-plus')) {
             
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        
        carrito[e.target.dataset.id] = { ...producto }

        container.innerHTML = ''

        imprimirCarrito()
        subtotalImprimir()
        discountImprimir()
        totalImprimir()

        localStorage.setItem('carrito', JSON.stringify(carrito))

    } else if ((e.target.classList.contains('fa-circle-minus'))) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
            
        } else {
            carrito[e.target.dataset.id] = {...producto}
        }
        container.innerHTML = ''

        imprimirCarrito()
        subtotalImprimir()
        discountImprimir()
        totalImprimir()

        localStorage.setItem('carrito', JSON.stringify(carrito))
    }
    e.stopPropagation()
})

container.addEventListener('click', (e) => {
          
    if(e.target.classList.contains('remove')) {
        delete carrito[e.target.dataset.id]
    }
    container.innerHTML = ''

    imprimirCarrito()
    subtotalImprimir()
    discountImprimir()
    totalImprimir()
    
    localStorage.setItem('carrito', JSON.stringify(carrito))

    if (localStorage.carrito && localStorage.carrito != '{}') {
        const carritoHeader = JSON.parse(localStorage.getItem('carrito')) 
        let contadorSpan = Object.keys(carritoHeader).length
        document.querySelector('#cart-icon').innerHTML +=`<span class ="badge badge-danger badge-counter">${contadorSpan}</span>` 
    } else {
      document.querySelector('#cart-icon').innerHTML='<i class="fa-solid fa-cart-shopping"></i>'
    }

    e.stopPropagation()

})



button.addEventListener('click', (e) => {
    e.preventDefault();
    const inputDiscount = {
        discount: input.value
    }
    if (inputDiscount != "") {
        fetch("/api/discount", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputDiscount),
          })
            .then((r) => r.json())
            .then((res) => {
            
            sessionStorage.setItem('discount', res.discount )
            price = subtotal.textContent

            document.getElementById('discount-code-box').style.display = 'flex'
            document.querySelector('.h4-discount').innerText = `Descuento (${res.discount} %)`
            document.getElementById('discount').innerText = (price * (res.discount/100)).toFixed(2),

            console.log(sessionStorage.discount)
            
          

            totalImprimir()

    })
}})
    
            
  
    
    
   


const paymentMethod = document.getElementById("paymentMethod")
const shippingMethod = document.getElementById("shippingMethod")
let formCheckout = document.querySelector("#checkoutCart");

formCheckout.onsubmit = (e) => {
  e.preventDefault();
  let totalFinalizar = total.textContent
  let carritoFinalizar = JSON.parse(localStorage.getItem('carrito')) 

    let carritoFetch = []

  Object.values(carritoFinalizar).forEach(item => {
    let objetoCarrito = {
        name: item.name,
        cantidad:parseInt(item.cantidad),
        price: item.price_product,
        productId: parseInt(item.id)
    }
    carritoFetch.push(objetoCarrito)
  })

  const formData = {
    orderItems: carritoFetch,
    paymentMethod: paymentMethod.value,
    shippingMethod: shippingMethod.value,
    total: totalFinalizar,
  };
  
  fetch("/api/checkout", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((r) => r.json())
    .then((res) => {
        
      if (res.ok) {
        //borro el carrito
        localStorage.removeItem('carrito')
        location.href = "/product/checkout";
      }
    })
    .catch((error) => console.log(error));
 
};

