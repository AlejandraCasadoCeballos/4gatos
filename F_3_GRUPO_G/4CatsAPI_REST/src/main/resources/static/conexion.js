
function GETservidor() { //GET 
    $.ajax({
        url: "/Jugador"
    }).done(function(jugadores){
        var max = jugadores.length;
        for(var i=0; i<max; i++){
            //console.log("GET: \nID: " + jugadores[i].id + "\nNickname: " + jugadores[i].nickname + "\nNombre del gato: " + jugadores[i].nombreDelGato + "\nInactivo: " + jugadores[i].inactivo);
        }
    });
}

function GETnumJugadores(){
	var r = "asdfñlkj";
	
	$.ajax({
        url: "/Jugador/numeroDeJugadores",
        async: false,
    	success: function (msg) {
    		console.log("success")
            r = msg;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //console.log("ERROR" + textStatus);
        }
    }).done(function(numJug){
    	//console.log("Hay " + numJug + " jugadores conectados")
    });
	
	return r;
}

function POSTservidor(jugador) { //POST
    $.ajax({
        method: "POST",
        url:"/Jugador",
        data: JSON.stringify(jugador),
        processData: false,
        headers: {
        "Content-Type":"application/json"
        }
        }).done(function(jugadorPost) {
            console.log("POST: \nID: " + jugadorPost.id + "\nNombre: " + jugadorPost.nombre + "\nNombre del gato: " + jugadorPost.nombreDelGato + "\nInactivo: " + jugadorPost.inactivo);
            jugador.id= jugadorPost.id;
        })
}

function PUTservidor(jugador) { //PUT
    var old = "Actualización: " + JSON.stringify(jugador);
    //console.log(jugador.id);
    $.ajax({
        method: "PUT",
        url:"/Jugador/" + jugador.id,
        data: JSON.stringify(jugador),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (jugador) {
        console.log("PUT: \nOld: "+old+"\nUpdated: " + JSON.stringify(jugador))
    })
}
function PUTnombreJugador(jugador) { //PUT
    var old = "Actualización: " + JSON.stringify(jugador);
    $.ajax({
        method: "PUT",
        url:"/Jugador/" + jugador.id +"/"+ jugador.nombre,
        data: JSON.stringify(jugador),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (jugador) {
        //console.log("PUT: \nOld: "+old+"\nUpdated: " + JSON.stringify(jugador))
    })
}function PUTnombreGato(jugador) { //PUT
    var old = "Actualización: " + JSON.stringify(jugador);
    $.ajax({
        method: "PUT",
        url:"/Jugador/" + jugador.id +"/"+ jugador.nombreDelGato,
        data: JSON.stringify(jugador),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (jugador) {
        //console.log("PUT: \nOld: "+old+"\nUpdated: " + JSON.stringify(jugador))
    })
}
function DELETEservidor(jugadorId) {
    $.ajax({
        method: 'DELETE',
        url: '/Jugador/' + jugadorId
    }).done(function (jugador) {
        //console.log("Deleted jugador " + jugadorId)
    })
}