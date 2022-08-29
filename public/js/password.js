window.addEventListener('load', function(){
    //Capturo el formulario de Registro completo
    let formRegister = document.querySelector('#registro')
  
    /*********************************************************/
   


    formRegister.passwordRg.addEventListener('keypress', function(){
              
        //Captura de imputs nombre, apellido, correp y contraseña
        let lastName=formRegister.lastNameRg.value
        let name =formRegister.nameRg.value
        let emailValidation =formRegister.emailRg.value
        let pass =formRegister.passwordRg.value

        //pass.includes(name), pass.includes(lastName), pass.includes(emailValidation),
        
        let patron = formRegister.patronWarning


        if ( pass.includes('012')){
            
        }
        
        let patronPredisible = [ pass.includes('012'), pass.includes('123'), pass.includes('234'), pass.includes('345'), pass.includes('456'), pass.includes('567'), pass.includes('678'), pass.includes('789'), pass.includes('890'), pass.includes('000'), pass.includes('111'), pass.includes('222'), pass.includes('333'), pass.includes('444'), pass.includes('555'), pass.includes('666'), pass.includes('777'), pass.includes('888'), pass.includes('999'), pass.includes('qwe'), pass.includes('wer'), pass.includes('ert'), pass.includes('rty'), pass.includes('tyu'), pass.includes('yui'), pass.includes('uio'), pass.includes('iop'), pass.includes('asd'), pass.includes('sdf'), pass.includes('dfg'), pass.includes('ghj'), pass.includes('hjk'), pass.includes('jkl'), pass.includes('klñ'), pass.includes('zxc'), pass.includes('xcv'), pass.includes('cvb'), pass.includes('vbn'), pass.includes('bnm'), pass.includes('abc'), pass.includes('bcd'), pass.includes('cde'), pass.includes('def'), pass.includes('efg'), pass.includes('fgh'), pass.includes('ghi'), pass.includes('hij'), pass.includes('ijk'), pass.includes('klm'), pass.includes('lmn'), pass.includes('mnñ'), pass.includes('nño'), pass.includes('ñop'), pass.includes('opq'), pass.includes('pqr'), pass.includes('qrs'), pass.includes('rst'), pass.includes('stu'), pass.includes('tuv'), pass.includes('uvw'), pass.includes('vwx'), pass.includes('wxy'), pass.includes('xyz'), pass.includes('mno'), pass.includes('nop'), pass.includes('aaa'), pass.includes('bbb'), pass.includes('ccc'), pass.includes('ddd'), pass.includes('eee'), pass.includes('fff'), pass.includes('ggg'), pass.includes('hhh'), pass.includes('iii'), pass.includes('jjj'), pass.includes('kkk'), pass.includes('lll'), pass.includes('mmm'), pass.includes('nnn'), pass.includes('ooo'), pass.includes('ppp'), pass.includes('qqq'), pass.includes('rrr'), pass.includes('sss'), pass.includes('ttt'), pass.includes('uuu'), pass.includes('vvv'), pass.includes('www'), pass.includes('xxx'), pass.includes('yyy'), pass.includes('zzz'), pass.includes('password'), pass.includes('1q2w3e4r5t'), pass.includes('iloveyou'), pass.includes('1q2w3e')]

       /*
       
       for (i=0; patronPredisible.length; i++) {
        if(patronPredisible[i]){
            alert ('patron predesible')
        }
       }*/




        
        
        
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