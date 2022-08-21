window.addEventListener('load', function(){
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
        } else {
          passwordLogInErr.innerHTML = '';
        }
      });
  
      //errors
      if(Object.keys(error).length > 0) {
        e.preventDefault();
        emailLogInErr.innerHTML = '';
        emailLogInErr.innerHTML = 'Correo o contraseña incorrectos';
        error = {};
      };
      //--- END LOGIN ---//
    });
  });