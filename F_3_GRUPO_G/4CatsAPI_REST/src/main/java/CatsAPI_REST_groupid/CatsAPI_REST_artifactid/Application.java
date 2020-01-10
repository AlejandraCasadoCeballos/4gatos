package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.*;
import java.util.Timer;
import java.util.TimerTask;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.WebSocketSession;
import java.util.concurrent.atomic.AtomicLong;

@SpringBootApplication
@Configuration
@EnableWebSocket

public class Application implements WebSocketConfigurer
{
	  public static Map<Long,WebSocketSession> sesionesJugadores = new ConcurrentHashMap<>(); //Almacena un jugador con su sesion correspondiente
	  public static AtomicLong ultimoIdSessions = new AtomicLong();
	  //-------------------------------------------------------
	  
	  public void registerWebSocketHandlers( WebSocketHandlerRegistry registry) {
	  long a = ultimoIdSessions.incrementAndGet();
	  registry.addHandler(echoHandler(), "/echo")
	    .setAllowedOrigins("*");
	  
	  }
	  
	  @Bean
	  public WebSocketEchoHandler echoHandler() {
	    return new WebSocketEchoHandler(); //Crea un objeto WebSocketEchoHandler
	  }
	
	//public static Map<Long, Jugador> jugadoresSinSala = new ConcurrentHashMap<>();
	
	
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
					long i=j.getIdEmparejado();
					
					if(j.getInactivo()) 
					{
						//System.out.printf("El siguiente jugador ha sido eliminado:"+ id);
						if(j.getParejaEncontrada() && JugadorController.jugadores.get(i)!=null) {
							j.setFueraSala(true);
							JugadorController.jugadores.get(i).setFueraSala(true);
						}
							JugadorController.jugadores.remove(j.getId());
						
						
						}
					//else System.out.printf("El jugador"+ id+ "está activo");
				}
			}
		};
		temporizador.schedule(MiraTodos, 0, frecuencia);
	}

}
	