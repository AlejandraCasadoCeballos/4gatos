package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class salaEspera {
	private long id;
	private String muffin;
	private String mungojerry;
	public static Map<Long, Jugador> jugadoresSinSala = JugadorController.jugadores;
	public static Map<Long, Jugador> jugadoresConSala = new ConcurrentHashMap<>();
	public boolean completa;
	
	public salaEspera() {
		completa=false;
		muffin="";
		mungojerry="";
		
	}
	
	public long getId() {return id;}
	public void setId(long idNuevo) {id=idNuevo;}
	
	public String getMuffin() {return muffin;}
	public void setMuffin(String muffinNuevo) {muffin=muffinNuevo;}
	
	public String getMungojerry() {return mungojerry;}
	public void setMungojerry(String mungojerryNuevo) {mungojerry=mungojerryNuevo;}
	
	public static Map<Long, Jugador> getJugadoresSinSala() {return jugadoresSinSala;}
	public void setJugadoresSinSala(Map<Long, Jugador> jugadoresSinSala) {this.jugadoresSinSala=jugadoresSinSala;}
	
	//public static Map<Long, Jugador> getJugadoresConSala() {return jugadoresConSala;}
	//public void setJugadoresConSala(Map<Long, Jugador> jugadoresConSala) {this.jugadoresConSala=jugadoresConSala;}
	
	public void emparejar() {
		int i=0;
		String jugador1;
		String jugador2="";
		
		jugador1=jugadoresSinSala.get(0).getNombreDelGato();
		jugadoresSinSala.remove(0);
		
		if(jugador1=="muffin") {
			this.muffin=jugadoresSinSala.get(0).getNickname();
			while(i<jugadoresSinSala.size() && jugador2!="mungojerry") {
				jugador2=jugadoresSinSala.get(i).getNombreDelGato();
				if(jugador2=="mungojerry") {
					completa=true;
					jugador2=jugadoresSinSala.remove(i).getNombreDelGato();
					this.mungojerry=jugadoresSinSala.get(i).getNickname();
				}
				i++;
			}
		}
		else if(jugador1=="mungojerry") {
			this.mungojerry=jugadoresSinSala.get(0).getNickname();
			while(i<jugadoresSinSala.size() && jugador2!="muffin") {
				jugador2=jugadoresSinSala.get(i).getNombreDelGato();
				if(jugador2=="muffin") {
					completa=true;
					jugador2=jugadoresSinSala.remove(i).getNombreDelGato();
					this.muffin=jugadoresSinSala.get(i).getNickname();
				}
				i++;
			}
		}
	}
	
	
	@Override
	public String toString() {
		return "Sala de espera [ID: " + id + ", Id muffin: " + muffin + ", Id mungojerry: " + mungojerry +" ]";
	}

}
