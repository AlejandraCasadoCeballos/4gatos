package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;

import java.time.*;

public class Jugador {

	private long id=-1;
	private static long ultimoId=-1;
	private String nombre;
	public LocalDateTime momentoDeRegistro;
	public boolean inactivo;
	private LocalDateTime ultimaInteraccion;
	
	public static double tiempoMaximoInactividad=5;
		
	public Jugador(){}
	public Jugador(String nombre, LocalDateTime momentoDeRegistro, LocalDateTime ultimaInteraccion) {	
		super();
		this.nombre = nombre;
		this.momentoDeRegistro = momentoDeRegistro;
		this.ultimaInteraccion= ultimaInteraccion;
		this.inactivo = false;
	}
	
	//Métodos
	public boolean getInactivo() {
		LocalDateTime momentoActual=LocalDateTime.now();
		Duration diferencia= Duration.between(momentoActual, ultimaInteraccion);
		double tiempoPasado=-(double)diferencia.getSeconds();
		System.out.println("Tiempo pasado = "+tiempoPasado);
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
	
	public static long getultimoId() {
		return ultimoId;
	} 
	public void setUltimoId(long id) {
		ultimoId=id;
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
	
	public void setInactivo(boolean act) {
		this.inactivo=act;
	} 

	@Override
	public String toString() {
		return "Jugador [id=" + id + ", Nombre=" + nombre + ", Momento de registro=" + 
				momentoDeRegistro + ", ultima interacción " + ultimaInteraccion +", Inactivo= "+inactivo+" ]";
	}
	
}
