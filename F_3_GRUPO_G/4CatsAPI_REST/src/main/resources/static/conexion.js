
function GETservidor() { //GET 
    $.ajax({
        url: "/Jugador"
    }).done(function(jugadores){
        numeroJugadores = jugadores.length;
        for(var i=0; i<numeroJugadores; i++){
           console.log("GET: \nID: " + jugadores[i].id + "\nNombre: " + jugadores[i].nombre + "\nNombre del gato: " + jugadores[i].nombreDelGato + "\nInactivo: " + jugadores[i].inactivo);
        }
    });
}

/*function GETnumJugadores(){
	var r = "asdfñlkj";
	
	$.ajax({
        url: "/Jugador/numeroDeJugadores",
        async: false,
    	success: function (msg) {
    		//console.log("success")
            r = msg;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //console.log("ERROR" + textStatus);
        }
    }).done(function(numJug){
    	//console.log("Hay " + numJug + " jugadores conectados")
    });
	
	return r;
}*/

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
        //console.log("PUT: \nOld: "+old+"\nUpdated: " + JSON.stringify(jugador))
    })
}
function DELETEservidor(jugador) {
    $.ajax({
        method: 'DELETE',
        url: '/Jugador/' + jugador.id,
        data: JSON.stringify(jugador),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (jugador) {
        //console.log("Jugador borrado: " + jugador.id)
    })
}