class Scene8 extends Phaser.Scene{
    constructor(){
        super("Mensaje");
    }

    init(){
        
    }
    preload () //precargar recursos
    {
        this.load.image('pescado', '/Recursos/Objetos/pescado.png');
        this.load.image('ovillo', '/Recursos/Objetos/ovillo.png');
        this.load.image('rata', '/Recursos/Objetos/rata.png');
        this.load.image('mensaje', '/Recursos/Interfaz/mensajeObjetoGanador.jpg')
        this.load.image('mensajeSalida', '/Recursos/Interfaz/mensajeSalida.jpg')

    }

    create(){
    	
        timer = this.time.addEvent({ delay: 3000, callback: this.empezar, callbackScope: this });
        if(!desdeJuego){
        	objeto= this.physics.add.staticGroup(); 
            //aleatorio=Phaser.Math.Between(1, 3);
            if(escenarioTres)
                objetoAleatorio="pescado";
            else if(escenarioDos)
                objetoAleatorio="ovillo";
            else if(escenarioUno)
                objetoAleatorio="rata";

            //Generamos el objeto en el centro de la pantalla
            this.add.image(400, 300, 'mensaje').setAlpha(1);
            objeto.create(400, 300, objetoAleatorio).setScale(2, 2);
        	
        }
        else {
        	jugador.parejaEncontrada=false;
        	jugador.enSala=false;
        	jugador.fueraSala=false;
        	jugador.idEmparejado= 0;
        	PUTservidor(jugador);
        	this.add.image(400, 300, 'mensajeSalida').setAlpha(1);
        }
        	
        
    }
    update(time, delta) {
    	PUTservidor(jugador);
    	//GETservidor();
        tiempo = Math.round(Math.floor(45000 - timer.getElapsed()) / 1000);
    }
    empezar(){
    	if(desdeJuego){
    		this.scene.start("salaEspera");
    		//this.scene.start("Menu");
    		desdeJuego=false;
    	}
    	else 
    		this.scene.start("Juego");
    }
    
}