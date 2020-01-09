package CatsAPI_REST_groupid.CatsAPI_REST_artifactid;


import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class WebSocketEchoHandler extends TextWebSocketHandler{

	public static Map<Long,WebSocketSession> sessions = new ConcurrentHashMap<>();
	public static AtomicLong ultimoIdS = new AtomicLong();
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception{
		
		long id = ultimoIdS.incrementAndGet();
		sessions.put(id, session);
		
		//sessions.add(session);
		System.out.println("Session added. Currently "+sessions.size()+" sessions");
		
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		
	//System.out.println("Message received: " + message.getPayload());
	String msg = message.getPayload();
	//session.sendMessage(new TextMessage(msg));
		ObjectMapper mapper= new ObjectMapper(); 
		JsonNode node = mapper.readTree(message.getPayload());
		Long jugador1 = node.get("id").asLong();
		//System.out.println(jugador1);
		Long jugador2 = node.get("idEmparejado").asLong();
		//System.out.println(jugador2);
		
		
		WebSocketSession sesionActual = Application.sesionesJugadores.get(jugador1);
		if(sesionActual==null) {
			Application.sesionesJugadores.put(jugador1,session);
		}
		
		WebSocketSession sesionDestino = Application.sesionesJugadores.get(jugador2);
		if(sesionDestino!=null) {
			sesionDestino.sendMessage(new TextMessage(msg));
		}
		
		/*
		for(WebSocketSession s : sessions) {
			
			if(s==sesionDestino) {
				//String msg = "Session Id: "+s.getId();
				//s.sendMessage(new TextMessage(msg));
				s.sendMessage(message);
				//System.out.println(message);
			}
			
		}
		*/
		
		//METODOS SESSION
		/*
		 * Return a unique session identifier.
		 * String getId(); 
		 * -----------------------------------
		 * Return the headers used in the handshake request (never {@code null}).
		 * HttpHeaders getHandshakeHeaders();
		 * -----------------------------------
		 * Return a map with the session attributes
		 * Map<String, Object> getAttributes();
		 * -----------------------------------
		 * Return the address on which the request was received.
		 * InetSocketAddress getLocalAddress();
		 * -----------------------------------
		 * Return the address of the remote client.
		 * InetSocketAddress getRemoteAddress();
		 * -----------------------------------
		 * Return whether the connection is still open.
		 * boolean isOpen();
		 * -----------------------------------
		 * Close the WebSocket connection with status 1000
		 * void close() throws IOException;
		 * -----------------------------------
		 * Close the WebSocket connection with the given close status.
		 * void close(CloseStatus status) throws IOException;
		 * 
		*/
	}
}
