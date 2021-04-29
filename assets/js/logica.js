function consulta() {
    var x = document.getElementById("Fecha1").value
    var y = document.getElementById("Fecha2").value
    var z = new Date();

    //fecha de llegada
    var x2 = x.split(" ")[0]

    var x3 = x2.substring(0, 4)//año llegada
    var x4 = x2.substring(5, 7)//mes llegada
    var x5 = x2.substring(8, 10)//dia llegada

    //fecha de salida
    var y2 = y.split(" ")[0]

    var y3 = y2.substring(0, 4)//año salida
    var y4 = y2.substring(5, 7)//mes salida
    var y5 = y2.substring(8, 10)//dia salida



    console.log(y3)
    console.log(y4)
    //fecha del dia de hoy
    var anoToday = z.getFullYear();//año actual castear parseInt
    var mesToday = z.getMonth();//mes actual castear parseInt
    var diaToday = z.getDate();//dia actual

    var anoTodayCast = parseInt(anoToday)
    var mesTodayCast = parseInt(mesToday + 1)

        console.log(anoTodayCast)
        console.log(mesTodayCast)
    if (x3 < anoToday || x4 < mesToday || x5 < diaToday || y3 < anoToday || y4 < mesToday || y5 < diaToday) {
        Swal.fire({
            icon: 'error',
            title: 'Selecciona una fecha de llegada y salida válida',
            text: '',
            footer: '<a href></a>'
        })

    } else if (x3 >= anoTodayCast || x4>= mesTodayCast  /*|| x4 > mesToday || x5 > diaToday*/ || y3 >= anoTodayCast || y4>=mesTodayCast/* || y4 > mesToday || y5 > diaToday*/) {

        Swal.fire({
            icon: 'success',
            title: 'Lo sentimos esta fecha no se encuentra disponible &#128557, pero mira nuestras reservas en el boton Disponibilidad &#128526 ',
            text: '',
            footer: '<a href>"../html/reservas.html"</a>'
        })
      //  setTimeout("redireccion()", 2000)//porque de los colores y porque de los elementos que se escogieron
    }
}

function redireccion() {
    window.location = "../html/reservas.html"
}


function reserva() {
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
    }).queue([
        {
            title: 'Regalanos tu nombre',
            text: ''
        },
        'Regalanos tu correo',
        'Regalanos tu número de contacto'
    ]).then((result) => {
        if (result.value) {
            const answers = JSON.stringify(result.value)
            Swal.fire({
                title: 'Todo Listo',
                html: `
              Pronto nos comunicaremos contigo
              
            `,
                confirmButtonText: 'Salir'
            })
        }
    })
}


