function registro(){
    var nombre_1 = document.getElementById("nombre").value
    var apellido_1 = document.getElementById("apellido").value
    var correo_1 = document.getElementById("correo").value
    
    var password_1 = document.getElementById("password").value
     
    if(nombre_1!=""&&correo_1!="" &&apellido_1!="" &&password_1!=""){
        alert("Muchas gracias, te enviamos la confirmacion a tu correo!")

    }else{
        alert("Se debe diligenciar todos los campos")
    }
}
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>