class Scene7 extends Phaser.Scene{
    constructor(){
        super("Pausa");
    }

    init(){
        
    }
    preload () //precargar recursos
    {
        this.load.image('pausa','/Recursos/Interfaz/pausa.jpg');//imagen de cuando estamos en la escena de pausa
        this.load.image('botonPausaEncima','/Recursos/Interfaz/botonPausaEncima.jpg');//imagen cuando el ratón esá sobre el botón

    }

    create(){
        const botonVolver = this.add.text(config.width/8, 7*config.height/8,"Menu",{font:"80px Courier", fill:"white"}).setOrigin(0.5,0.5);
        this.add.image(400, 300,'pausa');//añade la imagen

        botonVolver.setInteractive();
        
        //Distintas interaciones (pulsarlo,estar sobre él y dejar de estar sobre él)
        //Al poner el ratón sobre el botón la imagen cambia a otra que tiene las letras de dicho botón de otro color
        //Al quitar el ratón, la imagen vuelve a ser la original. Al pulsar el botón volvemos a la escena de juego y se reinicia la música
        //BOTON MENÚ
        botonVolver.on('pointerdown', () => { this.scene.resume("Juego"); this.scene.stop(); musica.resume(); });
        botonVolver.on('pointerover', () => {this.add.image(400, 300,'botonPausaEncima'); });
        botonVolver.on('pointerout', () => {this.add.image(400, 300,'pausa'); });
    }
}