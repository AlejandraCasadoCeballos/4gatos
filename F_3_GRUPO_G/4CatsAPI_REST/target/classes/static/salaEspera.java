
package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;

//import java.util.Map;
//import java.util.concurrent.ConcurrentHashMap;

public class salaEspera {
  private long id;
  private Jugador muffin;
  private Jugador mungojerry;
  
  public boolean completa;  
  //public static Map<Long, Jugador> jugadoresSinSala = JugadorController.jugadores;
  //public static Map<Long, Jugador> jugadoresConSala = new ConcurrentHashMap<>();

  //No tiene por que estar la sala llena
  public salaEspera() { 
    this.muffin = null;
    this.mungojerry = null;
    completa=false;
    muffin.setSala(this);
    mungojerry.setSala(this);
  }
  
  public long getId() {return id;}
  public void setId(long idNuevo) {id=idNuevo;}
  
  public Jugador getMuffin() {return muffin;}
  public void setMuffin(Jugador muffinNuevo) {muffin=muffinNuevo;}
  
  public Jugador getMungojerry() {return mungojerry;}
  public void setMungojerry(Jugador mungojerryNuevo) {mungojerry=mungojerryNuevo;}
  
  
  //public static Map<Long, Jugador> getJugadoresConSala() {return jugadoresConSala;}
  //public void setJugadoresConSala(Map<Long, Jugador> jugadoresConSala) {this.jugadoresConSala=jugadoresConSala;}
  
  
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