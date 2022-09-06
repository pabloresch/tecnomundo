window.addEventListener('load', function(){
    let eyeRg = document.querySelector ('#eyeRg')
    let passwordRg = document.querySelector('#passwordRg')
    
    eyeRg.addEventListener('click', function(){
        if(passwordRg.type == "password"){
            
            passwordRg.type = "text"
            eyeRg.style.opacity = 0.8
        }else{
            passwordRg.type = "password"
            eyeRg.style.opacity = 0.5
        }
    })
})


