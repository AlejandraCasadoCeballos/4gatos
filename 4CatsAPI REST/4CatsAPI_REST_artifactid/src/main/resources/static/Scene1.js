class Scene1 extends Phaser.Scene{
    constructor(){
        super("Creditos");
    }

    init(){
        
    }
    preload () //precargar recursos
    {
        
        this.load.image('creditos','/Recursos/Interfaz/creditos.jpg');// cargamos la imagen de los creditos
        this.load.image('atras','/Recursos/Interfaz/atrasCreditos.jpg');// cargamos la imagen de los creditos con boton atras pulsado
    }

    create(){
        musica2.resume(); //la musica sigue por donde se quedó al salir del menú

        //creamos el botón
        const botonAtras = this.add.text(config.width/8, 7*config.height/8,"Atras",{font:"80px Courier", fill:"white"}).setOrigin(0.5,0.5); 
        
        const creditos= this.add.image(400, 300,'creditos'); //añadimos la imagen
        botonAtras.setInteractive();
        
        //Distintas interaciones (pulsarlo,estar sobre él y dejar de estar sobre él)
        //Al poner el ratón sobre el botón la imagen cambia a otra que tiene las letras de dicho botón de otro color
        //Al quitar el ratón, la imagen vuelve a ser la original. Al pulsar el botón volvemos a la escena de menú
        //BOTON ATRÁS, distintas interaciones (pulsarlo,estar sobre él y dejar de estar sobre él)
        botonAtras.on('pointerdown', () => { this.scene.start("Menu"); musica2.pause();}); 
        botonAtras.on('pointerover', () => {this.add.image(400, 300,'atras'); });
        botonAtras.on('pointerout', () => {this.add.image(400, 300,'creditos'); });
    }
    update(){
    	PUTservidor(jugador);
    }
}