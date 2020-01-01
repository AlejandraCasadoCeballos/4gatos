//--------------------------------------------------------------------------------------------------
//GET
//--------------------------------------------------------------------------------------------------

function GETsalas() { //GET 
    $.ajax({
        url: "/SalaEspera"
    }).done(function(salas){
        //var max = jugadores.length;
        //for(var i=0; i<max; i++){
           //console.log("GET: \nID: " + salas[i].id + "\Muffin: " + salas[i].muffin + "\nMungojerry: " + salas[i].mungojerry + "\nCompleta: " + salas[i].completa);
        //}
    });
}

function GETnumSalas(){
	var r = "asdfñlkj";
	
	$.ajax({
        url: "/SalaEspera/numeroDeSalas",
        async: false,
    	success: function (msg) {
            r = msg;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("ERROR" + textStatus);
        }
    }).done(function(numSalas){
    	//console.log("Hay " + numSalas + " jugadores conectados")
    });
	
	return r; 
}


function GETunaSala(){
	
	$.ajax({
		method:"GET",
        url: "/SalaEspera/" + sala.id,
        data: JSON.stringify(sala),
        async: false,
        processData: false,
        headers: {
            "Content-Type":"application/json"
        }
    }).done(function(sala){
    	console.log(sala);
    	
    }); 
}

//--------------------------------------------------------------------------------------------------
//POST
//--------------------------------------------------------------------------------------------------
function POSTsalaNueva(sala,jugador) { //POST
    $.ajax({
        method: "POST",
        url:"/SalaEspera",
        data: JSON.stringify(sala),
        processData: false,
        headers: {
        "Content-Type":"application/json"
        }
        }).done(function(salaPost) {
            console.log("POST: \nID: " + jugadorPost.id + "\nNombre: " + jugadorPost.nombre + "\nNombre del gato: " + jugadorPost.nombreDelGato + "\nInactivo: " + jugadorPost.inactivo);
            sala.id= salaPost.id;
        })
}

//--------------------------------------------------------------------------------------------------
//PUT
//--------------------------------------------------------------------------------------------------
function PUTservidor(sala) { //PUT
    //var old = "Actualización: " + JSON.stringify(jugador);
    //console.log(jugador.id);
    $.ajax({
        method: "PUT",
        url:"/SalaEspera/" + sala.id,
        data: JSON.stringify(sala),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (salaActualizada) {
        console.log("PUT sala: "+sala.id);
        sala.id = salaActualizada.id;
        sala.muffin = salaActualizada.muffin;
        sala.mungojerry = salaActualizada.mungojerry;
    })
}

//--------------------------------------------------------------------------------------------------
//DELETE
//--------------------------------------------------------------------------------------------------
function DELETEsala(sala) {
    $.ajax({
        method: 'DELETE',
        url: '/SalaEspera/' + sala.id,
        data: JSON.stringify(sala),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (sala) {
        console.log("Sala borrada: " + sala.id)
    })
}