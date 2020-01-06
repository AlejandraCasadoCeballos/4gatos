
function GETservidor() { //GET 
    $.ajax({
        url: "/Jugador"
    }).done(function(jugadores){
        numeroJugadores = jugadores.length;
        for(var i=0; i<numeroJugadores; i++){
           console.log("GET: \nID: " + jugadores[i].id + "\nNombre: " + jugadores[i].nombre + "\nNombre del gato: " + 
        		   	   jugadores[i].nombreDelGato + "\nInactivo: " + jugadores[i].inactivo+"\nSalaEspera:"+jugadores[i].enSala+
        		   	   "\nPareja:"+jugadores[i].parejaEncontrada+"\nEscenario:"+jugadores[i].escenario+"\nFueraSala:"+jugadores[i].fueraSala);
        }
    });
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
    }).done(function (jugadorPUT) {
    	console.log("PUT: \nOld: "+old+"\nNuevo: " + JSON.stringify(jugadorPUT));
    	jugador.momentoDeRegistro=jugadorPUT.momentoDeRegistro;
    	jugador.ultimaInteraccion=jugadorPUT.ultimaInteraccion;
    	jugador.inactivo=jugadorPUT.inactivo;
    	jugador.parejaEncontrada=jugadorPUT.parejaEncontrada;
    	
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
    }).done(function (jugadorDELETE) {
    	jugador.fueraSala=jugadorDELETE.fueraSala;
        //console.log("Jugador borrado: " + jugador.id)
    })
}