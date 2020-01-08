package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;

import java.time.*;
import java.util.concurrent.atomic.AtomicLong;

public class Jugador {

	private long id = -1;
	private String nombreDelGato;
	private String nombre;
	public LocalDateTime momentoDeRegistro;
	public boolean inactivo;
	private LocalDateTime ultimaInteraccion;
	public static double tiempoMaximoInactividad = 3;
	private boolean parejaEncontrada;
	private boolean enSala;
	private String escenario;
	private boolean fueraSala;
	private long idEmparejado;
		
	public Jugador(){}
	
	public Jugador(long id,String nombre, LocalDateTime momentoDeRegistro, LocalDateTime ultimaInteraccion, String nombreJugador, boolean parejaEncontrada, boolean enSala, String escenario, boolean fueraSala) {//, long idEmparejado) {	
		super();
		this.nombreDelGato = nombre;
		this.momentoDeRegistro = momentoDeRegistro;
		this.ultimaInteraccion= ultimaInteraccion;
		this.inactivo = false;
		this.nombre= nombreJugador;
		this.parejaEncontrada=parejaEncontrada;
		this.enSala=enSala;
		this.escenario=escenario;
		this.fueraSala=fueraSala;
		this.idEmparejado=idEmparejado;
	}

	//Métodos
	public void setInactivo(boolean act) {
		this.inactivo=act;
	} 
	
	public boolean getInactivo() {
		LocalDateTime momentoActual=LocalDateTime.now();
		Duration diferencia= Duration.between(momentoActual, ultimaInteraccion);
		double tiempoPasado=-(double)diferencia.getSeconds();
		
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
	public Jugador salaEspera(Jugador jugadorActualizado) {
		if(jugadorActualizado.getEnSala()==true) {
	        if( jugadorActualizado.getNombreDelGato().equals("Muffin") ) { 
	            for(long i: JugadorController.jugadores.keySet()) {
	                 if(JugadorController.jugadores.get(i).getNombreDelGato().equals("Mungojerry") && 
	                	jugadorActualizado.getEscenario().equals(JugadorController.jugadores.get(i).getEscenario()) && 
	                	JugadorController.jugadores.get(i).getEnSala()==true) 
	                 {
	                	JugadorController.jugadores.get(i).setParejaEncontrada(true);
	                	jugadorActualizado.setIdEmparejado(JugadorController.jugadores.get(i).getId());
	                   	jugadorActualizado.setParejaEncontrada(true);
	                   	jugadorActualizado.setEnSala(false);
	                   	JugadorController.jugadores.get(i).setEnSala(false);
	                   	i=JugadorController.ultimoId.get();
	                  
	                 }
	               }
	       
	        }else if(jugadorActualizado.getNombreDelGato().equals("Mungojerry")){
	         
	                for(long i: JugadorController.jugadores.keySet()) {
	                    if(JugadorController.jugadores.get(i).getNombreDelGato().equals("Muffin") && 
	                       jugadorActualizado.getEscenario().equals(JugadorController.jugadores.get(i).getEscenario())&& 
	                       JugadorController.jugadores.get(i).getEnSala()==true) 
	                    {
	                    	jugadorActualizado.setParejaEncontrada(true);
	                    	jugadorActualizado.setIdEmparejado(JugadorController.jugadores.get(i).getId());
	                    	JugadorController.jugadores.get(i).setParejaEncontrada(true);
	                    	jugadorActualizado.setEnSala(false);
	                    	JugadorController.jugadores.get(i).setEnSala(false);
	                    	i=JugadorController.ultimoId.get(); 
	                    }
	                  }
	                }
	        
	      }
	
		return jugadorActualizado;
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
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombreJugador) {
		this.nombre = nombreJugador;
	}
	public String getEscenario() {
		return escenario;
	}
	public void setEscenario(String escenario) {
		this.escenario = escenario;
	}
	public boolean getParejaEncontrada() {
		return parejaEncontrada;
	}
	public void setParejaEncontrada(boolean PE) {
		this.parejaEncontrada = PE;
	}
	public boolean getEnSala() {
		return enSala;
	}

	public void setEnSala(boolean enSala) {
		this.enSala = enSala;
	}
	public boolean getFueraSala() {
		return fueraSala;
	}

	public void setFueraSala(boolean fueraSala) {
		this.fueraSala = fueraSala;
	}
	
	public long getIdEmparejado() {
		return idEmparejado;
	}

	public void setIdEmparejado(long idEmparejado) {
		this.idEmparejado = idEmparejado;
	}

	@Override
	public String toString() {
		return "Jugador [ID: " + id + ", Nombre jugador: "+ nombre+", Nombre del gato: " + nombreDelGato + 
				", Momento de registro: " + momentoDeRegistro + ", ultima interacción: " + ultimaInteraccion +
				", Inactivo: "+inactivo+" ]";
	}
	
}
