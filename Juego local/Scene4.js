class Scene4 extends Phaser.Scene{
    constructor(){
        super("ComoJugar");
    }

    init(){
        
    }
    preload () //precargar recursos
    {
        
        this.load.image('comoJugar','/Recursos/Interfaz/comoJugar.jpg');//imagen normal
        this.load.image('siguienteComoJugar','/Recursos/Interfaz/siguienteComoJugar.jpg');//imagen cuando el ratón está sobre el botón
        this.load.image('menuComoJugar','/Recursos/Interfaz/menuComoJugar.jpg');
    }
    create(){

        musica2.resume();//la musica sigue por donde se quedó al salir del menú

        //creamos el botón
        const botonAtras = this.add.text(90, 540,"Atras",{font:"30px Courier", fill:"Red"}).setOrigin(0.5,0.5);
        const botonSiguiente = this.add.text(700, 540,"Siguiente",{font:"30px Courier", fill:"Red"}).setOrigin(0.5,0.5);
        this.add.image(400, 300,'comoJugar');//añadimos la imagen
        

        botonAtras.setInteractive();
        botonSiguiente.setInteractive();

        //Distintas interaciones (pulsarlo,estar sobre él y dejar de estar sobre él) 
        //Al poner el ratón sobre el botón la imagen cambia a otra que tiene las letras de dicho botón de otro color
        //Al quitar el ratón, la imagen vuelve a ser la original. Al pulsar el botón volvemos a la escena de menú
        //BOTÓN ATRÁS
        

        botonAtras.on('pointerdown', () => { this.scene.start("Menu"); musica2.pause();});
        botonAtras.on('pointerover', () => {this.add.image(400, 300,'menuComoJugar'); });
        botonAtras.on('pointerout', () => {this.add.image(400, 300,'comoJugar'); });

        botonSiguiente.on('pointerdown', () => {this.scene.start("ComoJugar2"); });
        botonSiguiente.on('pointerover', () => {this.add.image(400, 300,'siguienteComoJugar'); });
        botonSiguiente.on('pointerout', () => {this.add.image(400, 300,'comoJugar'); });
        
    }
    update(){
    }



}