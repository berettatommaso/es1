document.getElementById("btn1").addEventListener("click",function(){
    var email = document.getElementById("input1").value;
    console.log(email);
    var valida;
    valida = email.indexOf("@") > 0
        && email.substring(email.index0f("@")).indexOf(".") > 1;
    console.log(valida);
    document.getElementById("input1").value = "";
});