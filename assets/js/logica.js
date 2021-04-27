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

    alert(x)

    if (añoToday < añoLle && mesToday < mesLle && diaToday < diaLle) {
    }

}


