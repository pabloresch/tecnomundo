window.addEventListener('load', function(){
    //Capturo el formulario de Registro completo
    let formRegister = document.querySelector('#registro')
  
    /*********************************************************/
   

    
    formRegister.passwordRg.addEventListener('keyup', function(){
        
              
        //Captura de imputs nombre, apellido, correp y contraseña
        let name =formRegister.nameRg.value
        let lastName=formRegister.lastNameRg.value
        let emailValidation =formRegister.emailRg.value
        let pass =formRegister.passwordRg.value
        console.log(pass)
        //pass.includes(name), pass.includes(lastName), pass.includes(emailValidation),

        /*Formulas de expresiones regulares
        /^ "algo" $/   ----> Inicio y fin de una expresín regular
        (?="algo")     ----> Valida que "algo" se encuntra en cualquier parte de la cadena de string (si no se agrega, se valida que "algo" esté al comienzo de la cadena de string)
        (.*"algo")     ----> . valida que estoy esperando que exista cualquier caracter de "algo" ("a", "l", "g" o la "o"). En cuanto * valida que puedo encontrar los n caracteres 1, muchas o ninguna vez. 
        (?=(.*[0-9]))  ----> Validar un número en el rango de [0-9]
        (?=.*[\!@#$%^&¬*()\\[\]{}\-_+=´`~|:"'¿?<>,;./Ç]) ----> Validar que se encuentre un caracter de la lista entre []
        (?=(.*[A-Z]))  ----> Validar una letra mayúscula en el rango de [A-Z]
        (?=(.*[a-z]))  ----> Validar una letra minúscula en el rango de [a-z]
        (?=(.*)).{XX,YY} ----> Validar que haya cualquier caracter "(?=(.*))" un mínimo de XX cantidad y un máximo de YY (si solo dejo {XX,} indico que no hay máximo solo mínimo)
        
        BIBLIOGRAFÍA ÚTIL: https://www.youtube.com/watch?v=s1HUWsSe-ZU&t=1248s


        seguridad de claves:
        https://www.xataka.com/seguridad/estas-50-contrasenas-comunes-internet-qwerty-a-dragon-pasando-password-123456-estudio
        https://simbiosisdigital.com.ar/wp-content/uploads/2021/07/tabla-.png
        */
        
        /***Expresiones regulares***/



        
        //Columna 1    
        let regNum_0_10 = /^(?=.*[0-9])(?=(.*)).{0,10}$/
        let regLow_0_10 = /^(?=.*[a-z])(?=(.*)).{0,10}$/
        let regUpp_0_10 = /^(?=.*[A-Z])(?=(.*)).{0,10}$/
        let regSpecial_0_10 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{0,10}$/
        let regNum_11_15 = /^(?=.*[0-9])(?=(.*)).{11,15}$/
        let regLow_11_15 = /^(?=.*[a-z])(?=(.*)).{11,15}$/
        let regUpp_11_15 = /^(?=.*[A-Z])(?=(.*)).{11,15}$/
        let regSpecial_11_15 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{11,15}$/
        let regNum_16_18 = /^(?=.*[0-9])(?=(.*)).{16,18}$/
        let regLow_16_18 = /^(?=.*[a-z])(?=(.*)).{16,18}$/
        let regUpp_16_18 = /^(?=.*[A-Z])(?=(.*)).{16,18}$/
        let regSpecial_16_18 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{16,18}$/
        let regNum_19 = /^(?=.*[0-9])(?=(.*)).{19,}$/
        let regLow_19 = /^(?=.*[a-z])(?=(.*)).{19,}$/
        let regUpp_19 = /^(?=.*[A-Z])(?=(.*)).{19,}$/
        let regSpecial_19 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{19,}$/
       
        //Columna 2
        let regNum_0_7 = /^(?=.*[0-9])(?=(.*)).{0,7}$/
        let regLow_0_7 = /^(?=.*[a-z])(?=(.*)).{0,7}$/
        let regUpp_0_7 = /^(?=.*[A-Z])(?=(.*)).{0,7}$/
        let regSpecial_0_7 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{0,7}$/
        let regNum_8_10 = /^(?=.*[0-9])(?=(.*)).{8,10}$/
        let regLow_8_10 = /^(?=.*[a-z])(?=(.*)).{8,10}$/
        let regUpp_8_10 = /^(?=.*[A-Z])(?=(.*)).{8,10}$/
        let regSpecial_8_10 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{8,10}$/
        let regNum_11_13 = /^(?=.*[0-9])(?=(.*)).{11,13}$/
        let regLow_11_13 = /^(?=.*[a-z])(?=(.*)).{11,13}$/
        let regUpp_11_13 = /^(?=.*[A-Z])(?=(.*)).{11,13}$/
        let regSpecial_11_13 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{11,13}$/
        let regNum_14_17 = /^(?=.*[0-9])(?=(.*)).{14,17}$/
        let regLow_14_17 = /^(?=.*[a-z])(?=(.*)).{14,17}$/
        let regUpp_14_17 = /^(?=.*[A-Z])(?=(.*)).{14,17}$/
        let regSpecial_14_17 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{14,17}$/
        let regNum_18 = /^(?=.*[0-9])(?=(.*)).{18,}$/
        let regLow_18 = /^(?=.*[a-z])(?=(.*)).{18,}$/
        let regUpp_18 = /^(?=.*[A-Z])(?=(.*)).{18,}$/
        let regSpecial_18 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{18,}$/
       
        //Columna 3
        let regNum_0_6 = /^(?=.*[0-9])(?=(.*)).{0,6}$/
        let regLow_0_6 = /^(?=.*[a-z])(?=(.*)).{0,6}$/
        let regUpp_0_6 = /^(?=.*[A-Z])(?=(.*)).{0,6}$/
        let regSpecial_0_6 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{0,6}$/
        let regNum_7_9 = /^(?=.*[0-9])(?=(.*)).{7,9}$/
        let regLow_7_9 = /^(?=.*[a-z])(?=(.*)).{7,9}$/
        let regUpp_7_9 = /^(?=.*[A-Z])(?=(.*)).{7,9}$/
        let regSpecial_7_9 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{7,9}$/
        let regNum_10_11 = /^(?=.*[0-9])(?=(.*)).{10,11}$/
        let regLow_10_11 = /^(?=.*[a-z])(?=(.*)).{10,11}$/
        let regUpp_10_11 = /^(?=.*[A-Z])(?=(.*)).{10,11}$/
        let regSpecial_10_11 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{10,11}$/
        let regNum_12_14 = /^(?=.*[0-9])(?=(.*)).{12,14}$/
        let regLow_12_14 = /^(?=.*[a-z])(?=(.*)).{12,14}$/
        let regUpp_12_14 = /^(?=.*[A-Z])(?=(.*)).{12,14}$/
        let regSpecial_12_14 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{12,14}$/
        let regNum_15 = /^(?=.*[0-9])(?=(.*)).{15,}$/
        let regLow_15 = /^(?=.*[a-z])(?=(.*)).{15,}$/
        let regUpp_15 = /^(?=.*[A-Z])(?=(.*)).{15,}$/
        let regSpecial_15 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{15,}$/
       
        //Columna 4 y 5
       
        let regNum_0_5 = /^(?=.*[0-9])(?=(.*)).{0,5}$/
        let regLow_0_5 = /^(?=.*[a-z])(?=(.*)).{0,5}$/
        let regUpp_0_5 = /^(?=.*[A-Z])(?=(.*)).{0,5}$/
        let regSpecial_0_5 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{0,5}$/
        let regNum_6_8 = /^(?=.*[0-9])(?=(.*)).{6,8}$/
        let regLow_6_8 = /^(?=.*[a-z])(?=(.*)).{6,8}$/
        let regUpp_6_8 = /^(?=.*[A-Z])(?=(.*)).{6,8}$/
        let regSpecial_6_8 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{6,8}$/
        let regNum_9_10 = /^(?=.*[0-9])(?=(.*)).{9,10}$/
        let regLow_9_10 = /^(?=.*[a-z])(?=(.*)).{9,10}$/
        let regUpp_9_10 = /^(?=.*[A-Z])(?=(.*)).{9,10}$/
        let regSpecial_9_10 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{9,10}$/
        let regNum_11_12 = /^(?=.*[0-9])(?=(.*)).{11,12}$/
        let regLow_11_12 = /^(?=.*[a-z])(?=(.*)).{11,12}$/
        let regUpp_11_12 = /^(?=.*[A-Z])(?=(.*)).{11,12}$/
        let regSpecial_11_12 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{11,12}$/
        let regNum_13 = /^(?=.*[0-9])(?=(.*)).{13,}$/
        let regLow_13 = /^(?=.*[a-z])(?=(.*)).{13,}$/
        let regUpp_13 = /^(?=.*[A-Z])(?=(.*)).{13,}$/
        let regSpecial_13 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{13,}$/
        
        let regNum_14 = /^(?=.*[0-9])(?=(.*)).{14,}$/
        let regLow_14 = /^(?=.*[a-z])(?=(.*)).{13,}$/
        let regUpp_14 = /^(?=.*[A-Z])(?=(.*)).{13,}$/
        let regSpecial_14 = /^(?=.*[\!@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{13,}$/

        //A-1 Validacion numeros
        if ( regNum_0_10.test(pass) && !regLow_0_10.test(pass) && !regUpp_0_10.test(pass) && !regSpecial_0_10.test(pass) ) {
            console.log('Contraseña tiene numeros de 0 a 10') 
        }else 
        if ( regNum_11_15.test(pass) && !regLow_11_15.test(pass) && !regUpp_11_15.test(pass) && !regSpecial_11_15.test(pass) ) {
            console.log('Contraseña tiene numeros de 11 y 15')
        }else
        if ( regNum_16_18.test(pass) && !regLow_16_18.test(pass) && !regUpp_16_18.test(pass) && !regSpecial_16_18.test(pass) ) {
            console.log('Contraseña tiene numeros de 16 y 18')
        }else
        if ( regNum_19.test(pass) && !regLow_19.test(pass) && !regUpp_19.test(pass) && !regSpecial_19.test(pass) ) {
            console.log('Contraseña tiene numeros de 19 al infinito y mas allá!')
        }else

        //A-2 Validacion letras minusculas
        if ( !regNum_0_7.test(pass) && regLow_0_7.test(pass) && !regUpp_0_7.test(pass) && !regSpecial_0_7.test(pass) ) {
            console.log('Contraseña tiene minúsculas de 0 a 7')
        }else
        if ( !regNum_8_10.test(pass) && regLow_8_10.test(pass) && !regUpp_8_10.test(pass) && !regSpecial_8_10.test(pass) ) {
            console.log('Contraseña tiene minúsculas de 8 a 10')
        }else
        if ( !regNum_11_13.test(pass) && regLow_11_13.test(pass) && !regUpp_11_13.test(pass) && !regSpecial_11_13.test(pass) ) {
            console.log('Contraseña tiene minúsculas de 11 a 13')
        }else
        if ( !regNum_14_17.test(pass) && regLow_14_17.test(pass) && !regUpp_14_17.test(pass) && !regSpecial_14_17.test(pass) ) {
            console.log('Contraseña tiene minúsculas de 14 a 17')
        }else
        if ( !regNum_18.test(pass) && regLow_18.test(pass) && !regUpp_18.test(pass) && !regSpecial_18.test(pass) ) {
            console.log('Contraseña tiene minúsculas de 18 al infinito y mas allá!')
        }else

        //A-3 Validacion letras mayúsculas
        if ( !regNum_0_7.test(pass) && !regLow_0_7.test(pass) && regUpp_0_7.test(pass) && !regSpecial_0_7.test(pass) ) {
            console.log('Contraseña tiene mayúsculas de 0 a 7')
        }else
        if ( !regNum_8_10.test(pass) && !regLow_8_10.test(pass) && regUpp_8_10.test(pass) && !regSpecial_8_10.test(pass) ) {
            console.log('Contraseña tiene mayúsculas de 8 a 10')
        }else
        if ( !regNum_11_13.test(pass) && !regLow_11_13.test(pass) && regUpp_11_13.test(pass) && !regSpecial_11_13.test(pass) ) {
            console.log('Contraseña tiene mayúsculas de 11 a 13')
        }else
        if ( !regNum_14_17.test(pass) && !regLow_14_17.test(pass) && regUpp_14_17.test(pass) && !regSpecial_14_17.test(pass) ) {
            console.log('Contraseña tiene mayúsculas de 14 a 17')
        }else
        if ( !regNum_18.test(pass) && !regLow_18.test(pass) && regUpp_18.test(pass) && !regSpecial_18.test(pass) ) {
            console.log('Contraseña tiene mayúsculas de 18 al infinito y mas allá!')
        }else

         //A-4 Validacion caracteres
         if ( !regNum_0_7.test(pass) && !regLow_0_7.test(pass) && !regUpp_0_7.test(pass) && regSpecial_0_7.test(pass) ) {
            console.log('Contraseña tiene caracteres de 0 a 7')
        }else
        if ( !regNum_8_10.test(pass) && !regLow_8_10.test(pass) && !regUpp_8_10.test(pass) && regSpecial_8_10.test(pass) ) {
            console.log('Contraseña tiene caracteres de 8 a 10')
        }else
        if ( !regNum_11_13.test(pass) && !regLow_11_13.test(pass) && !regUpp_11_13.test(pass) && regSpecial_11_13.test(pass) ) {
            console.log('Contraseña tiene caracteres de 11 a 13')
        }else
        if ( !regNum_14_17.test(pass) && !regLow_14_17.test(pass) && !regUpp_14_17.test(pass) && regSpecial_14_17.test(pass) ) {
            console.log('Contraseña tiene caracteres de 14 a 17')
        }else
        if ( !regNum_18.test(pass) && !regLow_18.test(pass) && !regUpp_18.test(pass) && regSpecial_18.test(pass) ) {
            console.log('Contraseña tiene caracteres de 18 al infinito y mas allá!')
        }else

        //B-1 Validacion numeros y minusculas
        if ( regNum_0_6.test(pass) && regLow_0_6.test(pass) && !regUpp_0_6.test(pass) && !regSpecial_0_6.test(pass) ) {
            console.log('Contraseña tiene numeros y minusculas de 0 a 6')
        }else
        if ( regNum_7_9.test(pass) && regLow_7_9.test(pass) && !regUpp_7_9.test(pass) && !regSpecial_7_9.test(pass) ) {
            console.log('Contraseña tiene numeros y minusculas de 7 a 9')
        }else
        if ( regNum_10_11.test(pass) && regLow_10_11.test(pass) && !regUpp_10_11.test(pass) && !regSpecial_10_11.test(pass) ) {
            console.log('Contraseña tiene numeros y minusculas de 10 a 11')
        }else
        if ( regNum_12_14.test(pass) && regLow_12_14.test(pass) && !regUpp_12_14.test(pass) && !regSpecial_12_14.test(pass) ) {
            console.log('Contraseña tiene numeros y minusculas de 12 a 14')
        }else
        if ( regNum_15.test(pass) && regLow_15.test(pass) && !regUpp_15.test(pass) && !regSpecial_15.test(pass) ) {
            console.log('Contraseña tiene numeros y minusculas de 15 al infinito y mas allá')
        }else

        //B-2 Validacion numeros y mausculas
        if ( regNum_0_6.test(pass) && !regLow_0_6.test(pass) && regUpp_0_6.test(pass) && !regSpecial_0_6.test(pass) ) {
            console.log('Contraseña tiene numeros y mayúsculas de 0 a 6')
        }else
        if ( regNum_7_9.test(pass) && !regLow_7_9.test(pass) && regUpp_7_9.test(pass) && !regSpecial_7_9.test(pass) ) {
            console.log('Contraseña tiene numeros y mayúsculas de 7 a 9')
        }else
        if ( regNum_10_11.test(pass) && !regLow_10_11.test(pass) && regUpp_10_11.test(pass) && !regSpecial_10_11.test(pass) ) {
            console.log('Contraseña tiene numeros y mayúsculas de 10 a 11')
        }else
        if ( regNum_12_14.test(pass) && !regLow_12_14.test(pass) && regUpp_12_14.test(pass) && !regSpecial_12_14.test(pass) ) {
            console.log('Contraseña tiene numeros y mayúsculas de 12 a 14')
        }else
        if ( regNum_15.test(pass) && !regLow_15.test(pass) && regUpp_15.test(pass) && !regSpecial_15.test(pass) ) {
            console.log('Contraseña tiene numeros y mayúsculas de 15 al infinito y mas allá')
        }else
        
        //B-3 Validacion numeros y caracteres
        if ( regNum_0_6.test(pass) && !regLow_0_6.test(pass) && !regUpp_0_6.test(pass) && regSpecial_0_6.test(pass) ) {
            console.log('Contraseña tiene numeros y caracteres de 0 a 6')
        }else
        if ( regNum_7_9.test(pass) && !regLow_7_9.test(pass) && !regUpp_7_9.test(pass) && regSpecial_7_9.test(pass) ) {
            console.log('Contraseña tiene numeros y caracteres de 7 a 9')
        }else
        if ( regNum_10_11.test(pass) && !regLow_10_11.test(pass) && !regUpp_10_11.test(pass) && regSpecial_10_11.test(pass) ) {
            console.log('Contraseña tiene numeros y caracteres de 10 a 11')
        }else
        if ( regNum_12_14.test(pass) && !regLow_12_14.test(pass) && !regUpp_12_14.test(pass) && regSpecial_12_14.test(pass) ) {
            console.log('Contraseña tiene numeros y caracteres de 12 a 14')
        }else
        if ( regNum_15.test(pass) && !regLow_15.test(pass) && !regUpp_15.test(pass) && regSpecial_15.test(pass) ) {
            console.log('Contraseña tiene numeros y caracteres de 15 al infinito y mas allá')
        }else
        
        //C-1 Validacion minusculas y mausculas
        if ( !regNum_0_6.test(pass) && regLow_0_6.test(pass) && regUpp_0_6.test(pass) && !regSpecial_0_6.test(pass) ) {
            console.log('Contraseña tiene minúsculas y mayúsculas de 0 a 6')
        }else
        if ( !regNum_7_9.test(pass) && regLow_7_9.test(pass) && regUpp_7_9.test(pass) && !regSpecial_7_9.test(pass) ) {
            console.log('Contraseña tiene minúsculas y mayúsculas de 7 a 9')
        }else
        if ( !regNum_10_11.test(pass) && regLow_10_11.test(pass) && regUpp_10_11.test(pass) && !regSpecial_10_11.test(pass) ) {
            console.log('Contraseña tiene minúsculas y mayúsculas de 10 a 11')
        }else
        if ( !regNum_12_14.test(pass) && regLow_12_14.test(pass) && regUpp_12_14.test(pass) && !regSpecial_12_14.test(pass) ) {
            console.log('Contraseña tiene minúsculas y mayúsculas de 12 a 14')
        }else
        if ( !regNum_15.test(pass) && regLow_15.test(pass) && regUpp_15.test(pass) && !regSpecial_15.test(pass) ) {
            console.log('Contraseña tiene minúsculas y mayúsculas de 15 al infinito y mas allá')
        }else

        //C-2 Validacion minusculas y caracteres
        if ( !regNum_0_6.test(pass) && regLow_0_6.test(pass) && !regUpp_0_6.test(pass) && regSpecial_0_6.test(pass) ) {
            console.log('Contraseña tiene minúsculas y caracteres de 0 a 6')
        }else
        if ( !regNum_7_9.test(pass) && regLow_7_9.test(pass) && !regUpp_7_9.test(pass) && regSpecial_7_9.test(pass) ) {
            console.log('Contraseña tiene minúsculas y caracteres de 7 a 9')
        }else
        if ( !regNum_10_11.test(pass) && regLow_10_11.test(pass) && !regUpp_10_11.test(pass) && regSpecial_10_11.test(pass) ) {
            console.log('Contraseña tiene minúsculas y caracteres de 10 a 11')
        }else
        if ( !regNum_12_14.test(pass) && regLow_12_14.test(pass) && !regUpp_12_14.test(pass) && regSpecial_12_14.test(pass) ) {
            console.log('Contraseña tiene minúsculas y caracteres de 12 a 14')
        }else
        if ( !regNum_15.test(pass) && regLow_15.test(pass) && !regUpp_15.test(pass) && regSpecial_15.test(pass) ) {
            console.log('Contraseña tiene minúsculas y caracteres de 15 al infinito y mas allá')
        }else

        //D-1 Validacion mayusculas y caracteres
        if ( !regNum_0_6.test(pass) && !regLow_0_6.test(pass) && regUpp_0_6.test(pass) && regSpecial_0_6.test(pass) ) {
            console.log('Contraseña tiene mayúsculas y caracteres de 0 a 6')
        }else
        if ( !regNum_7_9.test(pass) && !regLow_7_9.test(pass) && regUpp_7_9.test(pass) && regSpecial_7_9.test(pass) ) {
            console.log('Contraseña tiene mayúsculas y caracteres de 7 a 9')
        }else
        if ( !regNum_10_11.test(pass) && !regLow_10_11.test(pass) && regUpp_10_11.test(pass) && regSpecial_10_11.test(pass) ) {
            console.log('Contraseña tiene mayúsculas y caracteres de 10 a 11')
        }else
        if ( !regNum_12_14.test(pass) && !regLow_12_14.test(pass) && regUpp_12_14.test(pass) && regSpecial_12_14.test(pass) ) {
            console.log('Contraseña tiene mayúsculas y caracteres de 12 a 14')
        }else
        if ( !regNum_15.test(pass) && !regLow_15.test(pass) && regUpp_15.test(pass) && regSpecial_15.test(pass) ) {
            console.log('Contraseña tiene mayúsculas y caracteres de 15 al infinito y mas allá')
        }else

        //E-1 Validacion numeros, minusculas y mausculas
        if ( regNum_0_5.test(pass) && regLow_0_5.test(pass) && regUpp_0_5.test(pass) && !regSpecial_0_5.test(pass) ) {
            console.log('Contraseña tiene numeros, minusculas y mausculas de 0 a 5')
        }else
        if (regNum_6_8.test(pass) && regLow_6_8.test(pass) && regUpp_6_8.test(pass) && !regSpecial_6_8.test(pass) ) {
            console.log('Contraseña tiene numeros, minusculas y mausculas de 6 a 8')
        }else
        if ( regNum_9_10.test(pass) && regLow_9_10.test(pass) && regUpp_9_10.test(pass) && !regSpecial_9_10.test(pass) ) {
            console.log('Contraseña tiene numeros, minusculas y mausculas de 9 a 10')
        }else
        if ( regNum_11_12.test(pass) && regLow_11_12.test(pass) && regUpp_11_12.test(pass) && !regSpecial_11_12.test(pass) ) {
            console.log('Contraseña tiene numeros, minusculas y mausculas de 11 a 12')
        }else
        if ( regNum_13.test(pass) && regLow_13.test(pass) && regUpp_13.test(pass) && !regSpecial_13.test(pass) ) {
            console.log('Contraseña tiene numeros, minusculas y mausculas de 13 al infinito y mas alla! ')
        }else
       
        //E-2 Validacion numeros, minusculas, caracteres
        if ( regNum_0_5.test(pass) && regLow_0_5.test(pass) && !regUpp_0_5.test(pass) && regSpecial_0_5.test(pass) ) {
            console.log('Contraseña tiene numeros, minusculas, caracteres de 0 a 5')
        }else
        if (regNum_6_8.test(pass) && regLow_6_8.test(pass) && !regUpp_6_8.test(pass) && regSpecial_6_8.test(pass) ) {
            console.log('Contraseña tiene numeros, minusculas, caracteres de 6 a 8')
        }else
        if ( regNum_9_10.test(pass) && regLow_9_10.test(pass) && !regUpp_9_10.test(pass) && regSpecial_9_10.test(pass) ) {
            console.log('Contraseña tiene numeros, minusculas, caracteres de 9 a 10')
        }else
        if ( regNum_11_12.test(pass) && regLow_11_12.test(pass) && !regUpp_11_12.test(pass) && regSpecial_11_12.test(pass) ) {
            console.log('Contraseña tiene numeros, minusculas, caracteres de 11 a 12')
        }else
        if ( regNum_13.test(pass) && regLow_13.test(pass) && !regUpp_13.test(pass) && regSpecial_13.test(pass) ) {
            console.log('Contraseña tiene numeros, minusculas, caracteres de 13 al infinito y mas alla! ')
        }else

        //E-3 Validacion numeros mayusculas y caracteres

        if ( regNum_0_5.test(pass) && !regLow_0_5.test(pass) && regUpp_0_5.test(pass) && regSpecial_0_5.test(pass) ) {
            console.log('Contraseña tiene numeros mayusculas y caracteres de 0 a 5')
        }else
        if (regNum_6_8.test(pass) && !regLow_6_8.test(pass) && regUpp_6_8.test(pass) && regSpecial_6_8.test(pass) ) {
            console.log('Contraseña tiene numeros mayusculas y caracteres de 6 a 8')
        }else
        if ( regNum_9_10.test(pass) && !regLow_9_10.test(pass) && regUpp_9_10.test(pass) && regSpecial_9_10.test(pass) ) {
            console.log('Contraseña tiene numeros mayusculas y caracteres de 9 a 10')
        }else
        if ( regNum_11_12.test(pass) && !regLow_11_12.test(pass) && regUpp_11_12.test(pass) && regSpecial_11_12.test(pass) ) {
            console.log('Contraseña tiene numeros mayusculas y caracteres de 11 a 12')
        }else
        if ( regNum_13.test(pass) && !regLow_13.test(pass) && regUpp_13.test(pass) && regSpecial_13.test(pass) ) {
            console.log('Contraseña tiene numeros mayusculas y caracteres de 13 al infinito y mas alla! ')
        }else

        //E-4 Validacion minusculas, mayusculas y caracteres
        if ( !regNum_0_5.test(pass) && regLow_0_5.test(pass) && regUpp_0_5.test(pass) && regSpecial_0_5.test(pass) ) {
            console.log('Contraseña tiene minusculas, mayusculas y caracteres de 0 a 5')
        }else
        if (!regNum_6_8.test(pass) && regLow_6_8.test(pass) && regUpp_6_8.test(pass) && regSpecial_6_8.test(pass) ) {
            console.log('Contraseña tiene minusculas, mayusculas y caracteres de 6 a 8')
        }else
        if ( !regNum_9_10.test(pass) && regLow_9_10.test(pass) && regUpp_9_10.test(pass) && regSpecial_9_10.test(pass) ) {
            console.log('Contraseña tiene minusculas, mayusculas y caracteres de 9 a 10')
        }else
        if ( !regNum_11_12.test(pass) && regLow_11_12.test(pass) && regUpp_11_12.test(pass) && regSpecial_11_12.test(pass) ) {
            console.log('Contraseña tiene minusculas, mayusculas y caracteres de 11 a 12')
        }else
        if ( !regNum_13.test(pass) && regLow_13.test(pass) && regUpp_13.test(pass) && regSpecial_13.test(pass) ) {
            console.log('Contraseña tiene minusculas, mayusculas y caracteres de 13 al infinito y mas alla! ')
        }else

        //F-1 Validacion numeros, minusculas, mausculas y caracteres
        if ( regNum_0_5.test(pass) && regLow_0_5.test(pass) && regUpp_0_5.test(pass) && regSpecial_0_5.test(pass) ) {
            console.log('Contraseña tiene todo de 0 a 5')
        }else
        if (regNum_6_8.test(pass) && regLow_6_8.test(pass) && regUpp_6_8.test(pass) && regSpecial_6_8.test(pass) ) {
            console.log('Contraseña tiene todo de 6 a 8')
        }else
        if ( regNum_9_10.test(pass) && regLow_9_10.test(pass) && regUpp_9_10.test(pass) && regSpecial_9_10.test(pass) ) {
            console.log('Contraseña tiene todo de 9 a 10')
        }else
        if ( regNum_11_12.test(pass) && regLow_11_12.test(pass) && regUpp_11_12.test(pass) && regSpecial_11_12.test(pass) ) {
            console.log('Contraseña tiene todo de 11 a 12')
        }else
        if ( regNum_13.test(pass) && regLow_13.test(pass) && regUpp_13.test(pass) && regSpecial_13.test(pass) ) {
            console.log('Contraseña tiene todo de 13 al infinito y mas alla! ')
        }
        
        else{
            console.log('hay otra cosa')
        }   

        



        
        





        







        //Validaciones
        /*if ( pass.includes('012')){
            console.log('ok Polilla') 
        } */

            
        
        //Capturo la alerta de patrones predecibles
        let patron = document.querySelector('passWarning')
        

        
       // let patronPredisible = [ pass.includes('012'), pass.includes('123'), pass.includes('234'), pass.includes('345'), pass.includes('456'), pass.includes('567'), pass.includes('678'), pass.includes('789'), pass.includes('890'), pass.includes('000'), pass.includes('111'), pass.includes('222'), pass.includes('333'), pass.includes('444'), pass.includes('555'), pass.includes('666'), pass.includes('777'), pass.includes('888'), pass.includes('999'), pass.includes('qwe'), pass.includes('wer'), pass.includes('ert'), pass.includes('rty'), pass.includes('tyu'), pass.includes('yui'), pass.includes('uio'), pass.includes('iop'), pass.includes('asd'), pass.includes('sdf'), pass.includes('dfg'), pass.includes('ghj'), pass.includes('hjk'), pass.includes('jkl'), pass.includes('klñ'), pass.includes('zxc'), pass.includes('xcv'), pass.includes('cvb'), pass.includes('vbn'), pass.includes('bnm'), pass.includes('abc'), pass.includes('bcd'), pass.includes('cde'), pass.includes('def'), pass.includes('efg'), pass.includes('fgh'), pass.includes('ghi'), pass.includes('hij'), pass.includes('ijk'), pass.includes('klm'), pass.includes('lmn'), pass.includes('mnñ'), pass.includes('nño'), pass.includes('ñop'), pass.includes('opq'), pass.includes('pqr'), pass.includes('qrs'), pass.includes('rst'), pass.includes('stu'), pass.includes('tuv'), pass.includes('uvw'), pass.includes('vwx'), pass.includes('wxy'), pass.includes('xyz'), pass.includes('mno'), pass.includes('nop'), pass.includes('aaa'), pass.includes('bbb'), pass.includes('ccc'), pass.includes('ddd'), pass.includes('eee'), pass.includes('fff'), pass.includes('ggg'), pass.includes('hhh'), pass.includes('iii'), pass.includes('jjj'), pass.includes('kkk'), pass.includes('lll'), pass.includes('mmm'), pass.includes('nnn'), pass.includes('ooo'), pass.includes('ppp'), pass.includes('qqq'), pass.includes('rrr'), pass.includes('sss'), pass.includes('ttt'), pass.includes('uuu'), pass.includes('vvv'), pass.includes('www'), pass.includes('xxx'), pass.includes('yyy'), pass.includes('zzz'), pass.includes('password'), pass.includes('1q2w3e4r5t'), pass.includes('iloveyou'), pass.includes('1q2w3e')]

      




        
        
        
     });

})
/*
//Palabras que no deben incluirse en la contraseña
let nameValidacion = pass.includes(name)
let lastNameValidacion = pass.includes(lastName)
let emailValidation = pass.include(emailValidation)

let patron_012 = pass.includes('012')
let patron_123 = pass.includes('123')
let patron_234 = pass.includes('234')
let patron_345 = pass.includes('345')
let patron_456 = pass.includes('456')
let patron_567 = pass.includes('567')
let patron_678 = pass.includes('678')
let patron_789 = pass.includes('789')
let patron_890 = pass.includes('890')


let patron_000 = pass.includes('000')
let patron_111 = pass.includes('111')
let patron_222 = pass.includes('222')
let patron_333 = pass.includes('333')
let patron_444 = pass.includes('444')
let patron_555 = pass.includes('555')
let patron_666 = pass.includes('666')
let patron_777 = pass.includes('777')
let patron_888 = pass.includes('888')
let patron_999 = pass.includes('999')


let patron_qwe = pass.includes('qwe')
let patron_wer = pass.includes('wer')
let patron_ert = pass.includes('ert')
let patron_rty = pass.includes('rty')
let patron_tyu = pass.includes('tyu')
let patron_yui = pass.includes('yui')
let patron_uio = pass.includes('uio')
let patron_iop = pass.includes('iop')
let patron_asd = pass.includes('asd')
let patron_sdf = pass.includes('sdf')
let patron_dfg = pass.includes('dfg')
let patron_ghj = pass.includes('ghj')
let patron_hjk = pass.includes('hjk')
let patron_jkl = pass.includes('jkl')
let patron_klñ = pass.includes('klñ')
let patron_zxc = pass.includes('zxc')
let patron_xcv = pass.includes('xcv')
let patron_cvb = pass.includes('cvb')
let patron_vbn = pass.includes('vbn')
let patron_bnm = pass.includes('bnm')


let patron_abc = pass.includes('abc')
let patron_bcd = pass.includes('bcd')
let patron_cde = pass.includes('cde')
let patron_def = pass.includes('def')
let patron_efg = pass.includes('efg')
let patron_fgh = pass.includes('fgh')
let patron_ghi = pass.includes('ghi')
let patron_hij = pass.includes('hij')
let patron_ijk = pass.includes('ijk')
let patron_klm = pass.includes('klm')
let patron_lmn = pass.includes('lmn')
let patron_mnñ = pass.includes('mnñ')
let patron_nño = pass.includes('nño')
let patron_ñop = pass.includes('ñop')
let patron_opq = pass.includes('opq')
let patron_pqr = pass.includes('pqr')
let patron_qrs = pass.includes('qrs')
let patron_rst = pass.includes('rst')
let patron_stu = pass.includes('stu')
let patron_tuv = pass.includes('tuv')
let patron_uvw = pass.includes('uvw')
let patron_vwx = pass.includes('vwx')
let patron_wxy = pass.includes('wxy')
let patron_xyz = pass.includes('xyz')
let patron_mno = pass.includes('mno')
let patron_nop = pass.includes('nop')


let patron_aaa = pass.includes('aaa')
let patron_bbb = pass.includes('bbb')
let patron_ccc = pass.includes('ccc')
let patron_ddd = pass.includes('ddd')
let patron_eee = pass.includes('eee')
let patron_fff = pass.includes('fff')
let patron_ggg = pass.includes('ggg')
let patron_hhh = pass.includes('hhh')
let patron_iii = pass.includes('iii')
let patron_jjj = pass.includes('jjj')
let patron_kkk = pass.includes('kkk')
let patron_lll = pass.includes('lll')
let patron_mmm = pass.includes('mmm')
let patron_nnn = pass.includes('nnn')
let patron_ooo = pass.includes('ooo')
let patron_ppp = pass.includes('ppp')
let patron_qqq = pass.includes('qqq')
let patron_rrr = pass.includes('rrr')
let patron_sss = pass.includes('sss')
let patron_ttt = pass.includes('ttt')
let patron_uuu = pass.includes('uuu')
let patron_vvv = pass.includes('vvv')
let patron_www = pass.includes('www')
let patron_xxx = pass.includes('xxx')
let patron_yyy = pass.includes('yyy')
let patron_zzz = pass.includes('zzz')


let patron_assword = pass.includes('password')
let patron_1q2w3e4r5t = pass.includes('1q2w3e4r5t')
let patron_iloveyou = pass.includes('iloveyou')
let patron_1q2w3e = pass.includes('1q2w3e')

*/