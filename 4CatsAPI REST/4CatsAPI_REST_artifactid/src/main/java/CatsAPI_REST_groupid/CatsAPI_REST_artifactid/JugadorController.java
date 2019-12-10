package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;

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
import java.time.*;

@RestController
@RequestMapping("/Jugador")
public class JugadorController {

	public static Map<Long, Jugador> jugadores = new ConcurrentHashMap<>();
	public static AtomicLong ultimoId = new AtomicLong();

	@GetMapping
	public Collection<Jugador> jugadores() {
		System.out.println(jugadores.values());
		
		return jugadores.values();
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Jugador nuevoJugador(@RequestBody Jugador jugador) {

		long id = ultimoId.incrementAndGet();
		jugador.registro(id);
		jugadores.put(id, jugador);

		return jugador;
	}

	@PutMapping("/{id}")
	public ResponseEntity<Jugador> actualizaJugador(@PathVariable long id, @RequestBody Jugador jugadorActualizado) {

		Jugador jugador = jugadores.get(jugadorActualizado.getId());
		//Jugador jugadorReal = jugadores.get(id);
		
		if (jugador != null) {
			//jugadorActualizado.setInactivo(jugadorReal.getInactivo());
			jugadorActualizado.setId(id);
			jugadorActualizado.setUltimaInteraccion(LocalDateTime.now());
			
			jugadores.put(id, jugadorActualizado);

			return new ResponseEntity<>(jugadorActualizado, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Jugador> getJugador(@PathVariable long id) {
		
		Jugador jugador = jugadores.get(id);
		
		if (jugador != null) {
			jugador.setInactivo(jugador.getInactivo());
			return new ResponseEntity<>(jugador, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Jugador> borraJugador(@PathVariable long id) {
		
		Jugador jugador = jugadores.remove(id); 
		
		if (jugador != null && jugador.getInactivo()) {
			return new ResponseEntity<>(jugador, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
}
