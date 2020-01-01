package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;

import java.time.*;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class Jugador {

	private long id = -1;
	private String nombreDelGato;
	private String nombre;
	public LocalDateTime momentoDeRegistro;
	public boolean inactivo;
	private LocalDateTime ultimaInteraccion;
	public salaEspera sala;
	public static Map<Long, Jugador> jugadoresSinSala = new ConcurrentHashMap<>();
	public static double tiempoMaximoInactividad = 32;
		
	public Jugador(){}
	
	public Jugador(long id,String nombre, LocalDateTime momentoDeRegistro, LocalDateTime ultimaInteraccion, String nombreJugador) {	
		super();
		this.nombreDelGato = nombre;
		this.momentoDeRegistro = momentoDeRegistro;
		this.ultimaInteraccion= ultimaInteraccion;
		this.inactivo = false;
		this.nombre= nombreJugador;
		this.jugadoresSinSala.put(this.id, this);
		this.sala = null;
	}
	
	//Métodos
	public void setInactivo(boolean act) {
		this.inactivo=act;
	} 
	
	public boolean getInactivo() {
		LocalDateTime momentoActual=LocalDateTime.now();
		Duration diferencia= Duration.between(momentoActual, ultimaInteraccion);
		double tiempoPasado=-(double)diferencia.getSeconds();
		//System.out.println("Tiempo pasado = "+tiempoPasado);
		if(tiempoPasado>tiempoMaximoInactividad)
			return true;
		else
			return false;	
	}
	
	public void registro(long id) {
		this.setId(id);
		this.momentoDeRegistro=LocalDateTime.now();
		this.momentoDeRegistro.toString();
		this.ultimaInteraccion=momentoDeRegistro;
	}
	public long getId() {
		return id;
	} 
	public void setId(long id) {
		this.id=id;
	} 
	
	public String getNombreDelGato() {
		return nombreDelGato;
	}
	public void setNombreDelGato(String nombre) {
		this.nombreDelGato = nombre;
	}

	public LocalDateTime getmomentoDeRegistro() {
		return momentoDeRegistro;
	}
	public void setMomentoRegistro(LocalDateTime momentoDeRegistro) {
		this.momentoDeRegistro = momentoDeRegistro;
	}
	public LocalDateTime getUltimaInteraccion() {
		return ultimaInteraccion;
	}
	public void setUltimaInteraccion(LocalDateTime ultimaInteraccion) {
		this.ultimaInteraccion = ultimaInteraccion;
	}
	
	public String getNickname() {
		return nombre;
	}
	public void setNickname(String nombreJugador) {
		this.nombre = nombreJugador;
	}
	
	public salaEspera getSala() {return sala;}
	
	public void setSala(salaEspera nuevaSala) {this.sala = nuevaSala;}
	
	public static Map<Long, Jugador> getJugadoresSinSala() {return jugadoresSinSala;}
	  
	public void setJugadoresSinSala(Map<Long, Jugador> jugadoresSinSala) {this.jugadoresSinSala=jugadoresSinSala;}
	
	public boolean emparejar() {
		boolean completa=false;
	     //Coge el primer elemento de jugadores sin sala y lo mete en jugador 1
	    //jugadoresSinSala.remove(0); //Elimina ese jugador
	    
	    if(this.getNombreDelGato() == "muffin") {
		      for(long id: SalaEsperaController.salas.keySet()) {
		    	  salaEspera sala=SalaEsperaController.salas.get(id);
		    	  if(sala.getMuffin()==null && sala.getMungojerry()!=null && !completa) {
		    		  this.setSala(sala);
		    		  sala.completa=true;
		    		  completa=true;
		    		  sala.setMuffin(this);
		    	  }
		      }
		      
		    }
	    else if(this.getNombreDelGato() == "mungojerry") {
	      for(long id: SalaEsperaController.salas.keySet()) {
	    	  salaEspera sala=SalaEsperaController.salas.get(id);
	    	  if(sala.getMuffin()!=null && sala.getMungojerry()==null && !completa) {
	    		  this.setSala(sala);
	    		  sala.completa=true;
	    		  completa=true;
	    		  sala.setMungojerry(this);
	    	  }
	      }
	      
	    }
	    if(completa)
	    	jugadoresSinSala.remove(this.getId()); //Elimina ese jugador
	    return completa;
	  }
	
	@Override
	public String toString() {
		return "Jugador [ID: " + id + ", Nombre jugador: "+ nombre+", Nombre del gato: " + nombreDelGato + 
				", Momento de registro: " + momentoDeRegistro + ", ultima interacción: " + ultimaInteraccion +
				", Inactivo: "+inactivo+" ]";
	}
	
}
