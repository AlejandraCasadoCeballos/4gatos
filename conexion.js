var jugador = {
    id: 0,
    nombre: " ",
    fechaRegistro:" "
}

function GETservidor() { //GET 
    $.ajax({
        url: "http://192.168.1.136:8080/Jugador"
    }).done(function(jugador){
        var max = jugador.length;
        for(var i=0; i<max; i++){
            console.log("id= "+jugador[i].id+"nombre= "+jugador[i].nombre+"id= "+jugador[i].fechaRegistro);
            
        }
        
    });
}

function POSTservidor(jugador, callback) { //POST

    console.log("createItem: " + JSON.stringify(jugador));
    $.ajax({
        method: "POST",
        url:"http://192.168.1.136:8080/Jugador",
        data: JSON.stringify(jugador),
        processData: false,
        headers: {
        "Content-Type":"application/json"
        }
        }).done(function(jugador) {
            console.log("Nuevo jugador:" + JSON.stringify(jugador));
        })
    
}

/*function PUTservidor(jugador) {
    var old = "updateItem: " + JSON.stringify(jugador);
    $.ajax({
        method: "PUT",
        url: "http://127.0.0.1:8080/Jugador/" + jugador.id,
        data: JSON.stringify(jugador),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (jugador) {
        console.log("PUT: \nOld: "+old+"\nUpdated: " + JSON.stringify(jugador))
    })
}*/

/*
function deleteItem(jugadorId) {
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:8080/Jugador/' + jugadorId
    }).done(function (jugador) {
        console.log("Deleted item " + jugadorId)
    })
}*/