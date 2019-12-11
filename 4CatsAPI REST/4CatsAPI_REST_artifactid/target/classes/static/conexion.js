
function GETservidor() { //GET 
    $.ajax({
        url: "/Jugador"
    }).done(function(jugador){
        var max = jugador.length;
        for(var i=0; i<max; i++){
            console.log("GET: \nid= "+jugador[i].id+", nombre= "+jugador[i].nombre+", fecha= "+jugador[i].momentoDeRegistro+", ultima interacción "+jugador[i].ultimaInteraccion+", Inactivo: "+jugador[i].inactivo);
            
        }
        
    });
}

function POSTservidor(jugador) { //POST

    console.log("NuevoJugador: " + JSON.stringify(jugador));
    $.ajax({
        method: "POST",
        url:"/Jugador",
        data: JSON.stringify(jugador),
        processData: false,
        headers: {
        "Content-Type":"application/json"
        }
        }).done(function(jugadorPost) {
            console.log("Nuevo jugador:" + JSON.stringify(jugador));
            jugador.id= jugadorPost.id;
        })
    
}

function PUTservidor(jugador) {
    var old = "Actualización: " + JSON.stringify(jugador);
    console.log(jugador.id);
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


function deleteItem(jugadorId) {
    $.ajax({
        method: 'DELETE',
        url: '/Jugador/' + jugadorId
    }).done(function (jugador) {
        console.log("Deleted jugador " + jugadorId)
    })
}