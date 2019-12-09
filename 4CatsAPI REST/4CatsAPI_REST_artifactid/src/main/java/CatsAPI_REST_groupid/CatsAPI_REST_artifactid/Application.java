package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application
{
	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
		
		/*for(long id=0; id<Jugador.getultimoId(); id++) {
			Jugador j= JugadorController.jugadores.get(id);
			if(j.getInactivo()) {
				JugadorController.jugadores.remove(id);
				System.out.printf("El jugador", id, "ha sido eliminado");
			}
		}*/
	}
}
	