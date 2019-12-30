package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;

import java.util.Map;
//import java.util.concurrent.ConcurrentHashMap;

public class salaEspera {
	private long id;
	private Jugador muffin;
	private Jugador mungojerry;
	//public static Map<Long, Jugador> jugadoresSinSala = JugadorController.jugadores;
	//public static Map<Long, Jugador> jugadoresConSala = new ConcurrentHashMap<>();
	public boolean completa;
	
	public salaEspera() { //No tiene por que estar la sala llena
		this.muffin = null;
		this.mungojerry = null;
		completa=false;
		this.emparejar();
		muffin.setSala(this);
		mungojerry.setSala(this);Muffin
	}
	
	public long getId() {return id;}
	public void setId(long idNuevo) {id=idNuevo;}
	
	public Jugador getMuffin() {return muffin;}
	public void setMuffin(Jugador muffinNuevo) {muffin=muffinNuevo;}
	
	public Jugador getMungojerry() {return mungojerry;}
	public void setMungojerry(Jugador mungojerryNuevo) {mungojerry=mungojerryNuevo;}
	
	public static Map<Long, Jugador> getJugadoresSinSala() {return Application.jugadoresSinSala;}
	
	//public void setJugadoresSinSala(Map<Long, Jugador> jugadoresSinSala) {this.jugadoresSinSala=jugadoresSinSala;}
	//public static Map<Long, Jugador> getJugadoresConSala() {return jugadoresConSala;}
	//public void setJugadoresConSala(Map<Long, Jugador> jugadoresConSala) {this.jugadoresConSala=jugadoresConSala;}
	
	public void emparejar() {
		int i=0;
		Jugador jugador1 = null;
		Jugador jugador2 = null;
		
		jugador1=Application.jugadoresSinSala.get(0); //Coge el primer elemento de jugadores sin sala y lo mete en jugador 1
		//Application.jugadoresSinSala.remove(0); //Elimina ese jugador
		
		if(jugador1.getNombreDelGato() == "muffin") { //Si es muffin
			this.muffin= Application.jugadoresSinSala.get(0); //Coge el primero de los jugadores sin sala (?)
			Application.jugadoresSinSala.remove(0); //Elimina ese jugador de jugadoresSinSala
			while(i<= Application.jugadoresSinSala.size() && jugador2.getNombreDelGato() !="mungojerry") { //jugador2 distinto de mungojerry. CUIDADO CON <=. He preoado a poner el igual a ver que sale
				
				jugador2= Application.jugadoresSinSala.get(i); 
				if(jugador2.getNombreDelGato() == "mungojerry") { //elemento i de jugadoresSinSala es mungojerry
					completa=true; //Sala completa
					jugador2= Application.jugadoresSinSala.remove(i); //elimina al jugador 1 de jugadoresSinSala
					this.mungojerry= Application.jugadoresSinSala.get(i); //imtroduce el nick del jugador en mungojerry
				}
				i++;
			}
		}
		else if(jugador1.getNombreDelGato() == "mungojerry") {
			this.mungojerry= Application.jugadoresSinSala.get(0);
			Application.jugadoresSinSala.remove(0); //Elimina ese jugador
			while(i<= Application.jugadoresSinSala.size() && jugador2.getNombreDelGato() != "muffin") { //CUIDADO CON <=. He preoado a poner el igual a ver que sale
				jugador2= Application.jugadoresSinSala.get(i);
				if(jugador2.getNombreDelGato() == "muffin") {
					completa=true;
					jugador2= Application.jugadoresSinSala.remove(i);
					this.muffin= Application.jugadoresSinSala.get(i);
				}
				i++;
			}
		}
	}
	
	public void completarSala(Jugador player) {
		
		if(SalaEsperaController.salas.isEmpty() == false) { //Comprueba que la lista de salas no esta vacia

			for (salaEspera sala : SalaEsperaController.salas.values()) { //Recorre las salas del mapa (sin importar las keys del mapa)
				if(!sala.completa) {
					if( (sala.getMuffin()==null) && player.getNombreDelGato()=="muffin") { //Si la sala no tiene muffin y el jugador es muffin
						sala.setMuffin(player); //Mete al jugador en la sala en el hueco de muffin
						break; //sale del bucle
					}
					
					if( (sala.getMungojerry()==null) && player.getNombreDelGato()=="mungojerry") { //Si la sala no tiene mungojerry y el jugador es mungojerry
						sala.setMungojerry(player);//Mete al jugador en la sala en el hueco de mungojerry
						break; //sale del bucle
					}
				}
			}
		}
		
		else {
			System.out.println("No estisten listas, crea una nueva");
		}
		
	}
	
	
	@Override
	public String toString() {
		return "Sala de espera [ID: " + id + ", Id muffin: " + muffin + ", Id mungojerry: " + mungojerry +" ]";
	}

}
