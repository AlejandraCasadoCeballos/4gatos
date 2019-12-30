package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.*;
import java.util.Timer;
import java.util.TimerTask;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@SpringBootApplication
public class Application
{
	
	public static Map<Long, Jugador> jugadoresSinSala = new ConcurrentHashMap<>();
	
	
	public static void main(String[] args) 
	{
		SpringApplication.run(Application.class, args);
		int frecuencia=3000;
		revisar(frecuencia);
	}
	
	public static void revisar(int frecuencia) 
	{
		Timer temporizador= new Timer();
		TimerTask MiraTodos= new TimerTask() 
		{
			@Override
			public void run()
			{
				// TODO Auto-generated method stub
				for(Long id: JugadorController.jugadores.keySet()) 
				{
					Jugador j= JugadorController.jugadores.get(id);
					
					if(j.getInactivo()) 
					{
						System.out.printf("El siguiente jugador ha sido eliminado:"+ id);
						JugadorController.jugadores.remove(id);
						JugadorController.ultimoId.decrementAndGet();
						}
					else System.out.printf("El jugador"+ id+ "no está inactivo");
				}
			}
		};
		temporizador.schedule(MiraTodos, 0, frecuencia);
	}

}
	