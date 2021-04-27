function consulta() {
    var x = document.getElementById("Fecha1")
    var y = document.getElementById("Fecha2")
    var z = new Date();

    var añoToday = z.getFullYear();
    var mesToday = z.getMonth();
    var diaToday = z.getDate();

    var añoLle = x.getFullYear();
    var mesLle = x.getMonth();
    var diaLle = x.getDate();

    var añoSal = y.getFullYear();
    var mesSal = y.getMonth();
    var diaSal = y.getDate();



    if (añoToday <= añoLle && mesToday <= mesLle && diaToday <= diaLle) {
        Swal.fire('no puedes reservar para hoy o anteriores dias')
    } else if () {

        Swal.fire('Selecciona tu fecha de llegada y de regreso')

    }
}

function selecciona() {
    var hotel = document.getElementById("htl").value

    if (hotel != " ") {
        function consulta()

    } else (){
        Swal.fire('Seleciona tu opcion de hospedaje')

    }
}

