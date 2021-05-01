function registro(){
    var nombre_1 = document.getElementById("recipient-name1").value
    var apellido_1 = document.getElementById("recipient-name2").value
    var correo_1 = document.getElementById("recipient-name3").value
    
    var password_1 = document.getElementById("recipient-name4").value
     
    if(nombre_1!=""&&correo_1!="" &&apellido_1!="" &&password_1!=""){
        alert("Muchas gracias, te enviamos la confirmacion a tu correo!")

    }else{
        alert("Se debe diligenciar todos los campos")
    }    return
}
