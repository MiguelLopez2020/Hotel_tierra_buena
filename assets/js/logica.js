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
    var anoToday = z.getFullYear();//año actual
    var mesToday = z.getMonth();//mes actual
    var diaToday = z.getDate();//dia actual



    if (x3 <= anoToday || x4 <= mesToday || x5 <= diaToday && y3 === "" && y4 === "" && y5 === "") {
        console.log("Revisa si estas reservando en fechas anteriores o si no tienes seleccionada una fecha de salida")

    } else if (x3 === "" && x4 === "" && x5 === "" && y3 === "" && y4 === "" && y5 === "") {
        console.log("no has seleccionado fechas ")

    } else if (x3 === "" && x4 === "" && x5 === "" && y3 != "" && y4 != "" && y5 != "") {
        console.log("no has seleccionado una fecha de llegada")

    } else if (x3 != "" && x4 != "" && x5 != "" && y3 === "" && y4 === "" && y5 === "") {
        console.log("no has seleccionado una fecha de salida")
    } else if (x3 > anoToday || x4 > mesToday || x5 > diaToday && y3 === "" && y4 === "" && y5 === "")
        console.log("no has seleccionado una fecha de salida valida")
}


