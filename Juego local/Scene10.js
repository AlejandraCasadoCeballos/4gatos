class Scene10 extends Phaser.Scene{
    constructor(){
        super("ComoJugar3");
    }

    init(){}
    
    preload () //precargar recursos
    {
        this.load.image('comoJugar3','Recursos/Interfaz/comoJugar3.jpg');//imagen normal
        this.load.image('atrasComoJugar3','Recursos/Interfaz/atrasComoJugar3.jpg');//imagen cuando el ratón está sobre el botón
        this.load.image('menuComoJugar3','Recursos/Interfaz/menuComoJugar3.jpg');
    }
    
    create(){
    	//PUTservidor(jugador);
        musica2.resume();//la musica sigue por donde se quedó al salir del menú

        //creamos el botón
        const botonAtras3 = this.add.text(90, 540,"Atras",{font:"30px Courier", fill:"Red"}).setOrigin(0.5,0.5);
        const botonSiguiente3 = this.add.text(700, 540,"Menu",{font:"30px Courier", fill:"Red"}).setOrigin(0.5,0.5);
        this.add.image(400, 300,'comoJugar3');//añadimos la imagen
        

        botonAtras3.setInteractive();
        botonSiguiente3.setInteractive();

        //Distintas interaciones (pulsarlo,estar sobre él y dejar de estar sobre él) 
        //Al poner el ratón sobre el botón la imagen cambia a otra que tiene las letras de dicho botón de otro color
        //Al quitar el ratón, la imagen vuelve a ser la original. Al pulsar el botón volvemos a la escena de menú
        //BOTÓN ATRÁS
        
        
        botonAtras3.on('pointerdown', () => {this.scene.start("ComoJugar2");});
        botonAtras3.on('pointerover', () => {this.add.image(400, 300,'atrasComoJugar3'); });
        botonAtras3.on('pointerout', () => {this.add.image(400, 300,'comoJugar3'); });

        botonSiguiente3.on('pointerdown', () => { this.scene.start("Menu"); musica2.pause(); });
        botonSiguiente3.on('pointerover', () => {this.add.image(400, 300,'menuComoJugar3'); });
        botonSiguiente3.on('pointerout', () => {this.add.image(400, 300,'comoJugar3'); });
        
        
    }
    update(){
    }


}