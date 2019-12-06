package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;

import java.time.*;

public class Jugador {

	public double tiempoMaximoInactividad=30;
	
	private boolean inactivo;
	private long id=-1;
	private String nombre;
	private LocalDateTime momentoDeRegistro;
	private LocalDateTime ultimaInteraccion;
		
	public Jugador(String nombre, LocalDateTime momentoDeRegistro, LocalDateTime ultimaInteraccion) {	
		super();
		this.nombre = nombre;
		this.momentoDeRegistro = momentoDeRegistro;
		this.ultimaInteraccion = ultimaInteraccion;
	}
	
	//Métodos
	public boolean getInactivo() {
		LocalDateTime momentoActual=LocalDateTime.now();
		Duration diferencia= Duration.between(momentoActual, getUltimaInteraccion());
		double tiempoPasado=diferencia.getSeconds();
		if(tiempoPasado>tiempoMaximoInactividad)
			inactivo=true;
		else
			inactivo=false;
		return inactivo;
	}
	
	public void registro(long id) {
		this.setId(id);
		this.momentoDeRegistro=LocalDateTime.now();
		this.ultimaInteraccion= momentoDeRegistro;
		
	}
	public long getId() {
		return id;
	} 
	public void setId(long id) {
		this.id=id;
	} 
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
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
	@Override
	public String toString() {
		return "Anuncio [id=" + id + ", Nombre=" + nombre + ", Momento de registro=" + 
				momentoDeRegistro + ", Ultima interacción=" + ultimaInteraccion + 
				"Inactivo=" + inactivo +"]";
	}
	
}
