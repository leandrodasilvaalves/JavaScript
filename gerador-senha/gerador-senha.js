
var arrCarecteres = function(){
    var alfabeto_min=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
    var alfabeto_mai=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
    var simbolos=["_","-","+","=","@","#","$","%","&","*",",",".",";","/","<",">",":","?","[","]","{","}","!"];
    var numeros=[0,1,2,3,4,5,6,7,8,9];

    return alfabeto_min.concat(alfabeto_mai).concat(simbolos).concat(numeros);
}

var rand = function(min, max){
    return Math.floor(Math.random() * (max -min +1)) + min;
}

var gerarSenha=function(senha_len){    
    var senha="";
    var arr = arrCarecteres();
    while(senha.length <=(senha_len))
    {        
        senha+=arr[rand(0,arr.length -1)]
    }
    return senha;
}

var mudarSenha=function(){
    var novaSenha=gerarSenha(32);
    /*var input_login =document.getElementById('login-username');
    input_login.value=novaSenha;
    clear();
    var frm = document.getElementById('login-username-form');
    frm.submit();*/
    console.log(novaSenha);
}

mudarSenha();