function registro(){
    var nombre_1 = document.getElementById("recipient-name1").value
    var apellido_1 = document.getElementById("recipient-name2").value
    var correo_1 = document.getElementById("recipient-name3").value
    
    var password_1 = document.getElementById("recipient-name4").value
     
    if(nombre_1!=""&&correo_1!="" &&apellido_1!="" &&password_1!=""){
        swal.fire({
            title: "¡Registro exitoso!",
            text:"Enviamos la confirmacion a su correo electronico",
            icon:"success"
        })
    }else{
        swal.fire({
            
            title: "¡Lo sentimos!",
            text: "El formulario no puede tener espacios en blanco",
            icon: "error"
            
        }
            
        )
    }
return
}


function contactar(){
    var nombre_1 = document.getElementById("recipient-name1").value
    var apellido_1 = document.getElementById("recipient-name2").value
    var correo_1 = document.getElementById("recipient-name3").value
    
    var texto_1 = document.getElementById("recipient-name4").value
     
    if(nombre_1!=""&&correo_1!="" &&apellido_1!="" &&texto_1!=""){
        swal.fire({
            title: "¡Muchas gracias!",
            text:"Muy pronto nos pondremos en contacto",
            icon:"success"
        })


        
    }else{
        swal.fire({
            
            title: "¡Lo sentimos!",
            text: "El formulario no puede tener espacios en blanco",
            icon: "error"
            
        }
            
        )
    }
return
}