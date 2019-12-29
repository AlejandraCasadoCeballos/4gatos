package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;

import java.time.*;

public class Jugador {

	private long id = -1;
	private String nombreDelGato;
	private String nombre;
	public LocalDateTime momentoDeRegistro;
	public boolean inactivo;
	private LocalDateTime ultimaInteraccion;
	
	public static double tiempoMaximoInactividad = 3;
		
	public Jugador(){}
	
	public Jugador(long id,String nombre, LocalDateTime momentoDeRegistro, LocalDateTime ultimaInteraccion, String nombreJugador) {	
		super();
		this.nombreDelGato = nombre;
		this.momentoDeRegistro = momentoDeRegistro;
		this.ultimaInteraccion= ultimaInteraccion;
		this.inactivo = false;
		this.nombre= nombreJugador;
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
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombreJugador) {
		this.nombre = nombreJugador;
	}
	@Override
	public String toString() {
		return "Jugador [ID: " + id + ", Nombre jugador: "+ nombre+", Nombre del gato: " + nombreDelGato + 
				", Momento de registro: " + momentoDeRegistro + ", ultima interacción: " + ultimaInteraccion +
				", Inactivo: "+inactivo+" ]";
	}
	
}
