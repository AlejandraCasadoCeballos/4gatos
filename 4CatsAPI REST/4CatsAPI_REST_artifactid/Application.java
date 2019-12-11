package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.*;
import java.util.Timer;
import java.util.TimerTask;

@SpringBootApplication
public class Application
{
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
		int frecuencia=3000;
		revisar(frecuencia);
	}
	public static void revisar(int frecuencia) {
		
		Timer temporizador= new Timer();
		TimerTask MiraTodos= new TimerTask() {

			@Override
			public void run() {
				// TODO Auto-generated method stub
				for(Long id: JugadorController.jugadores.keySet()) {
					Jugador j= JugadorController.jugadores.get(id);
					if(j.getInactivo()) {
						JugadorController.jugadores.remove(id);
						System.out.printf("El siguiente jugador ha sido eliminado:", id);
					}
					else System.out.printf("El jugador", id, "no está inactivo");
				}
			}
			
		};
		temporizador.schedule(MiraTodos, 0, frecuencia);
		
		
	}
}
	