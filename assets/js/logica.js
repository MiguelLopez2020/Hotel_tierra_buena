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

    //fecha del dia de hoy
    var anoToday = z.getFullYear();//año actual castear parseInt
    var mesToday = z.getMonth();//mes actual castear parseInt
    var diaToday = z.getDate();//dia actual

    var anoTodayCast = parseInt(anoToday)
    var mesTodayCast = parseInt(mesToday + 1)
    var diaTodayCast = parseInt(diaToday)


if (x5 <= diaTodayCast && y5 <= diaTodayCast || x5 >= diaTodayCast && y5 >= diaTodayCast && y4 < mesTodayCast) {
        Swal.fire({
            icon: 'error',
            title: 'Recuerda que no puedes reservar para el día de hoy o días anteriores ',
            text: '',
            footer: '<a href></a>'
        })




    } else if (x5 > diaTodayCast && y5 > diaTodayCast || x5 > diaTodayCast && y5 < diaTodayCast && y3 > mesTodayCast || x5 < diaTodayCast && y5 < diaTodayCast && y3 > mesTodayCast || x5 < diaTodayCast && y5 < diaTodayCast && y3 < mesTodayCast && y2 > anoTodayCast) {
        {

            Swal.fire({
                icon: 'success',
                title: 'Actualmente no contamos con reserva para los dias seleccionados &#128543 , sin embargo espera un momento y veras nuestras habitaciones disponibles &#128526 ',
                text: '',
                footer: '<a href></a>'
            })
            setTimeout("redireccion()", 4000)// documento en word porque de los colores y porque de los elementos que se escogieron
        }
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


