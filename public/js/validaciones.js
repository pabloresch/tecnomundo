window.addEventListener('load', function(){
  
  /**********LogIn**********/

    let formLogIn = document.querySelector('#login')
    let buttonLogIn = document.querySelector('.submit-login')
    let nameErrorLogIn = document.querySelector('#nameErrorLogIn')
    let correo = document.querySelector('#correo')

    console.log(formLogIn.correo.value)

  buttonLogIn.addEventListener('click', function(event) {
      event.preventDefault();
      let errores = {};
      

    if(correo.value.length < 1) {
        errores.correo = 'Este campo debe estar completo'
    }

    if(Object.keys(errores).length >= 1) {
        nameErrorLogIn.innerHTML = (errores.correo) ? errores.correo : '';

    } else {
        formLogIn.submit()
    }
  })
  /**********Register**********/
  //Capturo el formulario de Registro completo
  let formRegister = document.querySelector('#registro')
  //Capturo todos los divs con text danger que van a aparecer cuando valide
  let nameRgErr = document.querySelector('#nameRgErr')
  let lastNameRgErr = document.querySelector('#lastNameRgErr')
  let emailRgErr = document.querySelector('#emailRgErr')
  let passwordRgErr = document.querySelector('#passwordRgErr')
  let passconfconRgErr = document.querySelector('#passconfconRgErr')
  
  //Validacion del nombre. Este imput no debe contener menos de dos caracteres
  formRegister.nameRg.addEventListener('blur', function(){
    if(formRegister.nameRg.value.length<2){
      nameRgErr.innerText= 'El nombre debe tener 2 caracteres o más'
    } else {
      nameRgErr.innerText= ''
    }
  })
  //Validacion del apellido. Este imput no debe contener menos de dos caracteres
  formRegister.lastNameRg.addEventListener('blur', function(){
    if(formRegister.lastNameRg.value.length<2){
      lastNameRgErr.innerText = 'El apellido debe tener 2 caracteres o más'
    } else {
      lastNameRgErr.innerText = ''
    }
  })
  //Validacion del email. Debe ser un mail váilido, no debe repetirse en la database
  formRegister.emailRg.addEventListener('blur', function(){
   
    //Genero la expresión regular que me valida el mail
    let regValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    

    //Si regValidation no es correcto envío el error
    if (!regValidation.test(formRegister.emailRg.value)){
      emailRgErr.innerText = 'Mail invalido'
  } else {
    emailRgErr.innerText = ''
  }
 
  })
 
  //Validacion del password. Debe tener 8 caracteres mínimos, debe tener mayusculas y minusculas, un número y un caracter especial
  formRegister.passwordRg.addEventListener('focus', function(){
    //Declaro las expresiones regulares para validar
    //Una letra mayuscúla
    let upper = new RegExp('^(?=.*[A-Z])')
    //Una letra minúscula
    let lower = new RegExp('^(?=.*[a-z])')
    //Un número
    let num = new RegExp('^(?=.*[0-9])')
    //Un caracter especial
    let charter = new RegExp('^(?=.*[!¡@*#.$&%])')
    //8 caracterres como mínimo
    let len = new RegExp('^(?=.{8,})')
    
    formRegister.passwordRg.addEventListener('change', function(){

    })
    //passwordRgErr.innerHTML = 'Debe tener 8 caracteres mínimos, debe tener mayusculas y minusculas, un número y un caracter especial'
  })
  //Validacion del passconfcon. Deben coincidir las contraseñas
  formRegister.passconfconRg.addEventListener('focus', function(){
    console.log(1);
    passconfconRgErr.innerHTML = 'Las contraseñas deben coincidir'
  })
  //Validacion del avatar. Deberá ser un archivo válido (JPG, JPEG, PNG, GIF)
  formRegister.avatar.addEventListener('blur', function(){
    console.log(6);
  })


  //Validacion del formulario completo. Si surje un solo error el formulario no se envía
  formRegister.addEventListener('submit', function(event){
    event.preventDefault();
    let errores = {};
    return alert ('Sprint 7 allá vamos!!!')
    
  })
})