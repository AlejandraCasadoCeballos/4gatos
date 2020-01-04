
package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;
import java.util.List;
import java.util.Vector;

public class salaEspera {
  private long id;
  private Jugador muffin;
  private Jugador mungojerry;
  
  public boolean completa;  
  public List<Jugador> jugadoresEnSala;
  public Vector<Jugador>[] salita; 

  //METODOS 
  public void rellenarSala(Jugador player) {
    jugadoresEnSala.add(player);
  }
  public Boolean comprobarSala() {
    
    if(jugadoresEnSala.size()<1) {
      
        if( jugadoresEnSala.get(0).getNombreDelGato()=="muffin") { 
         setMuffin(jugadoresEnSala.get(0));
         salita[0].add(jugadoresEnSala.get(0));
           }else {
             setMungojerry(jugadoresEnSala.get(0));
             salita[0].add(jugadoresEnSala.get(0));
           }
         completa=false;
  } 
    else {
          if(salita[0].get(0).getNombreDelGato()=="muffin") {
            for(int i=0; i<jugadoresEnSala.size();i++) {
              if(jugadoresEnSala.get(i).getNombreDelGato()=="mungojerry") {
                salita[1].add(jugadoresEnSala.get(i));
                setMungojerry(jugadoresEnSala.get(i));
                jugadoresEnSala.get(i).setParejaEncontrada(true);
                muffin.setParejaEncontrada(true);
                i=jugadoresEnSala.size();
              }
            }
          }
          else if(salita[0].get(0).getNombreDelGato()=="mungojerry") {
            for(int i=0; i<jugadoresEnSala.size();i++) {
              if(jugadoresEnSala.get(i).getNombreDelGato()=="muffin") {
                salita[1].add(jugadoresEnSala.get(i));
                setMuffin(jugadoresEnSala.get(i));
                jugadoresEnSala.get(i).setParejaEncontrada(true);
                muffin.setParejaEncontrada(true);
                i=jugadoresEnSala.size();
              }
            }
           completa=true;
          }//FINAL ELSE
          
          
          
        }//FINAL ELSE
  return completa;
        
  }//FINAL FUNCION
    
  //GETTERS AND SETTERS
  public salaEspera() { }; 
  public long getId() {return id;}
  public void setId(long idNuevo) {id=idNuevo;}
  public Jugador getMuffin() {return muffin;}
  public void setMuffin(Jugador muffinNuevo) {muffin=muffinNuevo;}
  public Jugador getMungojerry() {return mungojerry;}
  public void setMungojerry(Jugador mungojerryNuevo) {mungojerry=mungojerryNuevo;}
  public boolean isCompleta() {return completa;}
  public void setCompleta(boolean completa) {this.completa = completa;}
  public List<Jugador> getJugadoresEnSala() {return jugadoresEnSala;}
  public void setJugadoresEnSala(List<Jugador> jugadoresEnSala) {this.jugadoresEnSala = jugadoresEnSala;}
    
    @Override
  public String toString() {
    return "Sala de espera [ID: " + id + ", Id muffin: " + muffin + ", Id mungojerry: " + mungojerry +" ]";
  }
}