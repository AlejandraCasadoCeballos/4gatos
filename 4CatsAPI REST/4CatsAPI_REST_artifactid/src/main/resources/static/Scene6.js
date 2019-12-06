class Scene6 extends Phaser.Scene {
    constructor() {
        super("Ganador2");
    }

    init() {

    }
    preload() //precargar recursos
    {
        this.load.image('ganador2', '/Recursos/Interfaz/ganadorMungojerry.jpg');//imagen de cuando gana Mungojerry normal
        this.load.audio('celebracion2', '/Recursos/Musica/celebracion.mp3');//música de celebración
        this.load.image('atrasG2', '/Recursos/Interfaz/atrasGanadorMungojerry.jpg');//imagen cuando el ratón esá sobre el botón

    }

    create() {
        musica3 = this.sound.add('celebracion2');//añade el sonido
        musica3.play();//activa la música
        const botonMenu = this.add.text(90, 540, "Atras", { font: "30px Courier", fill: "Red" }).setOrigin(0.5, 0.5);
        this.add.image(400, 300, 'ganador2');//añade la imagen

        botonMenu.setInteractive();

        //Distintas interaciones (pulsarlo,estar sobre él y dejar de estar sobre él) 
        //Al poner el ratón sobre el botón la imagen cambia a otra que tiene las letras de dicho botón de otro color
        //Al quitar el ratón, la imagen vuelve a ser la original. Al pulsar el botón volvemos a la escena de menú
        //BOTON MENÚ
        botonMenu.on('pointerdown', () => { this.scene.start("Menu"); });
        botonMenu.on('pointerover', () => { this.add.image(400, 300, 'atrasG2'); });
        botonMenu.on('pointerout', () => { this.add.image(400, 300, 'ganador2'); });
    }
}