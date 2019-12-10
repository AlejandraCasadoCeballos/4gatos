class Scene9 extends Phaser.Scene{
    constructor(){
        super("ComoJugar2");
    }

    init(){
        
    }
    preload () //precargar recursos
    {
        this.load.image('atrasComoJugar2','/Recursos/Interfaz/atrasComoJugar2.jpg');//imagen cuando el ratón está sobre el botón
        this.load.image('comoJugar2','/Recursos/Interfaz/comoJugar2.jpg');//imagen normal
        this.load.image('siguienteComoJugar2','/Recursos/Interfaz/siguienteComoJugar2.jpg');
    }
    create(){

        musica2.resume();//la musica sigue por donde se quedó al salir del menú

        //creamos el botón
        const botonAtras2 = this.add.text(90, 540,"Atras",{font:"30px Courier", fill:"Red"}).setOrigin(0.5,0.5);
        const botonSiguiente2 = this.add.text(700, 540,"Siguiente",{font:"30px Courier", fill:"Red"}).setOrigin(0.5,0.5);
        this.add.image(400, 300,'comoJugar2');//añadimos la imagen
        

        botonAtras2.setInteractive();
        botonSiguiente2.setInteractive();

        //Distintas interaciones (pulsarlo,estar sobre él y dejar de estar sobre él) 
        //Al poner el ratón sobre el botón la imagen cambia a otra que tiene las letras de dicho botón de otro color
        //Al quitar el ratón, la imagen vuelve a ser la original. Al pulsar el botón volvemos a la escena de menú
        //BOTÓN ATRÁS
        
        botonAtras2.on('pointerdown', () => { this.scene.start("ComoJugar");});
        botonAtras2.on('pointerover', () => {this.add.image(400, 300,'atrasComoJugar2'); });
        botonAtras2.on('pointerout', () => {this.add.image(400, 300,'comoJugar2'); });

        botonSiguiente2.on('pointerdown', () => {this.scene.start("ComoJugar3");});
        botonSiguiente2.on('pointerover', () => {this.add.image(400, 300,'siguienteComoJugar2'); });
        botonSiguiente2.on('pointerout', () => {this.add.image(400, 300,'comoJugar2'); });

        
        
    }
    update(){
    	PUTservidor(jugador);
    	GETservidor();
    }


}