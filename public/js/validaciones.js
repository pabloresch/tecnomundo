window.addEventListener('load', function(){
  
  /**************************************LogIn**************************************/

  //queySelectors
  let emailLogIn = document.querySelector('#emailLogIn');
  let emailLogInErr = document.querySelector('#emailLogInErr');
  let passwordLogIn = document.querySelector('#passwordLogIn');
  let passwordLogInErr = document.querySelector('#passwordLogInErr');
  let formLogIn = document.querySelector('#login');

  //on time validations
  let error = {};
  let regExp = /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

  //--- Log In ---//
  //email
  emailLogIn.addEventListener('blur', () => {
    if(emailLogIn.value == '') {
      error.emailLogIn = 'Este campo es obligatorio';
      emailLogInErr.innerHTML = error.emailLogIn;
    } else if(!emailLogIn.value.match(regExp)) {
      error.emailLogIn = 'Correo invalido';
      emailLogInErr.innerHTML = error.emailLogIn;
    } else {
      emailLogInErr.innerHTML = '';
    }
  });

  //contrasena
  passwordLogIn.addEventListener('blur', () => {
    if(passwordLogIn.value == '') {
      error.passwordLogIn = 'Este campo es obligatorio';
      passwordLogInErr.innerHTML = error.passwordLogIn;
      console.log(Object.keys(error).length);
    } else {
      passwordLogInErr.innerHTML = '';
    }
  });

  //prevent default
  formLogIn.addEventListener('submit', (e) => {
    //email
    // emailLogIn.addEventListener('blur', () => {
      if(emailLogIn.value == '') {
        error.emailLogIn = 'Este campo es obligatorio';
        emailLogInErr.innerHTML = error.emailLogIn;
      } else if(!emailLogIn.value.match(regExp)) {
        error.emailLogIn = 'Correo invalido';
        emailLogInErr.innerHTML = error.emailLogIn;
      } else {
        emailLogInErr.innerHTML = '';
      }
    // });
    
    //contrasena
    // passwordLogIn.addEventListener('blur', () => {
      if(passwordLogIn.value == '') {
        error.passwordLogIn = 'Este campo es obligatorio';
        passwordLogInErr.innerHTML = error.passwordLogIn;
      } else {
        passwordLogInErr.innerHTML = '';
      }
    // });

    //errors
    if(Object.keys(error).length > 0) {
      e.preventDefault();
      return alert ('Ups! No has completado bien el formulario de login')
      // emailLogInErr.innerHTML = '';
      // emailLogInErr.innerHTML = 'Correo o contraseña incorrectos';
      error = {};
    };
    //--- END LOGIN ---//
  });

  /**************************************Register**************************************/
  //Capturo el formulario de Registro completo
  let formRegister = document.querySelector('#registro')
  //Capturo todos los divs con text danger que van a aparecer cuando valide
  let nameRgErr = document.querySelector('#nameRgErr')
  let lastNameRgErr = document.querySelector('#lastNameRgErr')
  let emailRgErr = document.querySelector('#emailRgErr')
  let passwordRgErr = document.querySelector('#passwordRgErr')
  let passconfconRgErr = document.querySelector('#passconfconRgErr')
  let avatarErr = this.document.querySelector('#avatarErr')
  
  //Validacion del nombre
  formRegister.nameRg.addEventListener('blur', function(){
    //El imput no puede estar vacío
    if(formRegister.nameRg.value==''){
      nameRgErr.innerText = 'Debe completar este campo'
    } else
    //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
    if(formRegister.nameRg.value.length<2){
      nameRgErr.innerText= 'El nombre debe tener 2 caracteres mínimo'
    } else {
      nameRgErr.innerText= ''
    }
  })
  //Validacion del apellido
  formRegister.lastNameRg.addEventListener('blur', function(){
     //El imput no puede estar vacío
     if(formRegister.lastNameRg.value==''){
      lastNameRgErr.innerText = 'Debe completar este campo'
    } else
    //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
     if(formRegister.lastNameRg.value.length<2){
      lastNameRgErr.innerText = 'El apellido debe tener 2 caracteres mínimo'
    } else {
      lastNameRgErr.innerText = ''
    }
  });

  //Validacion del email. Debe ser un mail váilido, no debe repetirse en la database (opcional)
  formRegister.emailRg.addEventListener('blur', function(){
   
    //Expresión regular para valida email
    let regValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    
  
   //El imput no puede estar vacío
   if(formRegister.emailRg.value == ''){
    emailRgErr.innerText = 'Debe completar este campo'
    }else
    //regValidation da true o false, valido en caso de false
    if(!regValidation.test(formRegister.emailRg.value)){
    emailRgErr.innerText = 'Email invalido'
    }else {
    emailRgErr.innerText = ''
    }
  });
 
  //Validacion de contraseña
  formRegister.passwordRg.addEventListener('blur', function(){
     //El imput no puede estar vacío
     if(formRegister.passwordRg.value== ''){
      passwordRgErr.innerText = 'Debe completar este campo'
    }else
    //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 8 está mal
    if(formRegister.passwordRg.value.length<8){
      passwordRgErr.innerText = 'la contraseña debe ser de 8 caracteres mínimo'
    }else {
      passwordRgErr.innerText = ''
    }
  });

  //Validacion del passconfcon. Deben coincidir las contraseñas
  formRegister.passconfconRg.addEventListener('blur', function(){
    //El imput no puede estar vacío
    if (formRegister.passconfconRg.value == ''){
      passconfconRgErr.innerText = 'Debe completar este campo'
    }else
    //Si los imput.value son distintos las contraseñas no coinciden
    if (formRegister.passconfconRg.value != formRegister.passwordRg.value){
      passconfconRgErr.innerText = 'Las contraseñas no coinciden!'
    }else {
      passconfconRgErr.innerText = ''
    }
  });

  //Validacion del avatar. Deberá ser un archivo válido (JPG, JPEG, PNG, GIF)
  formRegister.avatar.addEventListener('change', function(){

    //Expresión regular para validar tipos de archivos
    let extPermitidas = /(.JPG|.JPEG|.PNG|.GIF)$/i
    //Genero la variable archivoRuta para que sea más facil de leer el if
    let archivoRuta = formRegister.avatar.value

    //Valido si me da un false el tipo de archivo
    if(!extPermitidas.exec(archivoRuta)){
      avatarErr.innerText = 'Archivos permitidos: JPG, JPEG, PNG, GIF'
    }else {
      avatarErr.innerText = ''
    }

  });


  //Validacion del formulario completo. Si surje un solo error el formulario no se envía
  formRegister.addEventListener('submit', function(event){

    //Expresión regular para valida email
    let regValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    //Expresión regular para validar tipos de archivos
    let extPermitidas = /(.JPG|.JPEG|.PNG|.GIF)$/i
    //Genero la variable archivoRuta para que sea más facil de leer el if de la foto
    let archivoRuta = formRegister.avatar.value

    

    //Cocateno if de los imput y si hay un error no se envía el formulario
    //Imput Nombre
    if(formRegister.nameRg.value.length<2){
      event.preventDefault()
      return alert ('Ups! No has completado bien el formulario de registro')
    } else 
    //Imput Apellido
    if(formRegister.lastNameRg.value.length<2){
      event.preventDefault() 
      return alert ('Ups! No has completado bien el formulario de registro')
    } else  
    //Imput email
    if(!regValidation.test(formRegister.emailRg.value)){
      event.preventDefault()
      return alert ('Ups! No has completado bien el formulario de registro')
    }else 
    //Imput contraseña
    if(formRegister.passwordRg.value.length<8){
      event.preventDefault()
      return alert ('Ups! No has completado bien el formulario de registro')
    }else  
    //Imput confirma contraseña
    if(formRegister.passconfconRg.value != formRegister.passwordRg.value){
      event.preventDefault()
      return alert ('Ups! No has completado bien el formulario de registro')
    }else 
    //Imput avatar
    if(!extPermitidas.exec(archivoRuta)){
      event.preventDefault()
      return alert ('Ups! No has completado bien el formulario de registro')
    }  
  });
})