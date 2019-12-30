
package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;

import java.util.Map;
//import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentHashMap;

public class salaEspera {
  private long id;
  private Jugador muffin;
  private Jugador mungojerry;
  public static Map<Long, Jugador> jugadoresSinSala = new ConcurrentHashMap<>();
  public boolean completa;  
  //public static Map<Long, Jugador> jugadoresSinSala = JugadorController.jugadores;
  //public static Map<Long, Jugador> jugadoresConSala = new ConcurrentHashMap<>();

  //No tiene por que estar la sala llena
  public salaEspera() { 
    this.muffin = null;
    this.mungojerry = null;
    completa=false;
    this.emparejar();
    muffin.setSala(this);
    mungojerry.setSala(this);
  }
  
  public long getId() {return id;}
  public void setId(long idNuevo) {id=idNuevo;}
  
  public Jugador getMuffin() {return muffin;}
  public void setMuffin(Jugador muffinNuevo) {muffin=muffinNuevo;}
  
  public Jugador getMungojerry() {return mungojerry;}
  public void setMungojerry(Jugador mungojerryNuevo) {mungojerry=mungojerryNuevo;}
  
  public static Map<Long, Jugador> getJugadoresSinSala() {return jugadoresSinSala;}
  
  //public void setJugadoresSinSala(Map<Long, Jugador> jugadoresSinSala) {this.jugadoresSinSala=jugadoresSinSala;}
  //public static Map<Long, Jugador> getJugadoresConSala() {return jugadoresConSala;}
  //public void setJugadoresConSala(Map<Long, Jugador> jugadoresConSala) {this.jugadoresConSala=jugadoresConSala;}
  
  public void emparejar() {
    int i=0;
    Jugador jugador1 = null;
    Jugador jugador2 = null;
    
    jugador1=jugadoresSinSala.get(0); //Coge el primer elemento de jugadores sin sala y lo mete en jugador 1
    //jugadoresSinSala.remove(0); //Elimina ese jugador
    
    if(jugador1.getNombreDelGato() == "muffin") { //Si es muffin
      this.muffin= jugadoresSinSala.get(0); //Coge el primero de los jugadores sin sala (?)
      jugadoresSinSala.remove(0); //Elimina ese jugador de jugadoresSinSala
      while(i<= jugadoresSinSala.size() && jugador2.getNombreDelGato() !="mungojerry") { //jugador2 distinto de mungojerry. CUIDADO CON <=. He preoado a poner el igual a ver que sale
        
        jugador2= jugadoresSinSala.get(i); 
        if(jugador2.getNombreDelGato() == "mungojerry") { //elemento i de jugadoresSinSala es mungojerry
          completa=true; //Sala completa
          jugador2= jugadoresSinSala.remove(i); //elimina al jugador 1 de jugadoresSinSala
          this.mungojerry= jugadoresSinSala.get(i); //imtroduce el nick del jugador en mungojerry
        }
        i++;
      }
    }
    else if(jugador1.getNombreDelGato() == "mungojerry") {
      this.mungojerry= jugadoresSinSala.get(0);
      jugadoresSinSala.remove(0); //Elimina ese jugador
      while(i<= jugadoresSinSala.size() && jugador2.getNombreDelGato() != "muffin") { //CUIDADO CON <=. He preoado a poner el igual a ver que sale
        jugador2= jugadoresSinSala.get(i);
        if(jugador2.getNombreDelGato() == "muffin") {
          completa=true;
          jugador2= jugadoresSinSala.remove(i);
          this.muffin= jugadoresSinSala.get(i);
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