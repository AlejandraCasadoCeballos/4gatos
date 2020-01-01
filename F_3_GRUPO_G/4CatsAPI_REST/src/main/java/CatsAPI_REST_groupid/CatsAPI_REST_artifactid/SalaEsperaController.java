package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/SalaEspera")
public class SalaEsperaController {

  
  public static Map<Long, salaEspera> salas = new ConcurrentHashMap<>();
  public static AtomicLong ultimoId = new AtomicLong();

  @GetMapping
  public Collection<salaEspera> salas() {
	  return salas.values();
  }
  
  @GetMapping("/numeroDeSalas")
  public int numeroDeSalas() {
	  return salas.size();
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public salaEspera nuevaSala(@RequestBody salaEspera sala, @RequestBody Jugador jugador) {
	
	
	if(jugador.getNombreDelGato()=="muffin")
		sala.setMuffin(jugador);
	else if(jugador.getNombreDelGato()=="mungojerry")
		sala.setMungojerry(jugador);
	
	jugador.setSala(sala);
	
	if(!jugador.emparejar()) {
		long id = ultimoId.incrementAndGet();
	    sala.setId(id);
		salas.put(id, sala);
	}
	
    return jugador.sala;
  }

  @PutMapping("/{id}")
  public ResponseEntity<salaEspera> actualizaSala(@PathVariable long id, @RequestBody salaEspera salaActualizada, @RequestBody long idPlayer) {

	  Jugador jugadorRestante = JugadorController.jugadores.get(idPlayer);
	  //salaEspera sala = salas.get(id);
	  salaEspera sala = salas.get(salaActualizada.getId());
    
    if (sala != null) {
      //sala.completarSala(jugadorRestante);
      salas.put(id, salaActualizada);
      return new ResponseEntity<>(salaActualizada, HttpStatus.OK);
      
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  
  @GetMapping("/{id}")
  public ResponseEntity<salaEspera> getSala(@PathVariable long id) {
    
	salaEspera sala =  salas.get(id);
    
    if (sala != null) {
    	return new ResponseEntity<>(sala, HttpStatus.OK);
    } else {
    	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<salaEspera> borraSala(@PathVariable long id) {
    
    salaEspera sala = salas.remove(id); 
    
    if (sala != null) {
      return new ResponseEntity<>(sala, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  
}