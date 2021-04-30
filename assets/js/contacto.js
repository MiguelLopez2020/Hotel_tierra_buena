function calcular(){
    var nombre_1 = document.getElementById("nombre1").value
    var correo_1 = document.getElementById("correo1").value
    var telefono_1 = document.getElementById("telefono1").value
    var tarea_1 = document.getElementById("tarea1").value
     
    if(nombre_1!=""&&correo_1!="" &&telefono_1!="" &&tarea_1!=""){
        alert("Muchas gracias, en un momento nos pondremos en contacto")

    }else{
        alert("Se debe diligenciar todos los campos")
    }
}
