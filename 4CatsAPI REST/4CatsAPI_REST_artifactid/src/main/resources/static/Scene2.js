class Scene2 extends Phaser.Scene {
    constructor() {
        super("Menu");
    }
    init() {

    }
    preload() //precargar recursos: sonidos e imágenes
    {
        this.load.audio('menu', ['/Recursos/Musica/menu.mp3', '/Recursos/Musica/menu.ogg']); //hemos puesto dos tipos de formatos de música 
        //por si el ordenador no puede usar alguno de ellos
        this.load.image('menuFondo', '/Recursos/Interfaz/menu.jpg');//imagen menú normal
        this.load.image('pulsadoComoJugar', '/Recursos/Interfaz/comoJugarPulsado.jpg');//imagen menú cuando estás sobre el botón de cómo jugar 
        this.load.image('pulsadoJugar', '/Recursos/Interfaz/jugarPulsado.jpg');//imagen menú cuando estás sobre el botón de jugar
        this.load.image('pulsadoCreditos', '/Recursos/Interfaz/creditosPulsado.jpg');//imagen menú cuando estás sobre el botón de créditos
    }

    create() {
    	function actualizarConexiones() {
    	    $.ajax({
    	        method: 'PUT',
    	        url: 'http://localhost:8080/conexiones',
    	        data: true,
    	        processData: false,
    	        headers: {
    	            "Content-Type": "application/json"
    	        }
    	    }).done(function () {
    	        console.log("Jugador conectado")
    		});
		}
    	
        musica2 = this.sound.add('menu');//para añadir la musica
        musica2.setLoop(true);//para que la musica suene en bucle
        musica2.play();//para que comience a sonar la musica

        const botonJugar = this.add.text(config.width / 5, config.height / 1.4, "Jugar", { font: "40px Courier", fill: "White" }).setOrigin(0.5, 0.5);
        const botonCreditos = this.add.text(config.width / 1.23, config.height / 1.4, "Creditos", { font: "40px Courier", fill: "White" }).setOrigin(0.5, 0.5);
        const botonComoJugar = this.add.text(config.width / 2, config.height / 1.4, "Como jugar", { font: "40px Courier", fill: "White" }).setOrigin(0.5, 0.5);

        this.add.image(400, 300, 'menuFondo');

        botonCreditos.setInteractive();
        botonJugar.setInteractive();
        botonComoJugar.setInteractive();

        //Distintas interaciones (pulsarlo,estar sobre él y dejar de estar sobre él) para cada botón del menú
        //En cada uno, al poner el ratón sobre el botón la imagen cambia a otra que tiene las letras de dicho botón de otro color
        //Al quitar el ratón, la imagen vuelve a ser la original. Al pulsar cada botón cambiamos a la escena correspondiente y paramos la música

        //BOTON JUGAR
        botonJugar.on('pointerdown', () => { this.scene.start("Mensaje"); musica2.stop(); });
        botonJugar.on('pointerover', () => { this.add.image(400, 300, 'pulsadoJugar'); });
        botonJugar.on('pointerout', () => { this.add.image(400, 300, 'menuFondo'); });
        //BOTON CRÉDITOS
        botonCreditos.on('pointerdown', () => { this.scene.start("Creditos"); musica2.pause(); });
        botonCreditos.on('pointerover', () => { this.add.image(400, 300, 'pulsadoCreditos'); });
        botonCreditos.on('pointerout', () => { this.add.image(400, 300, 'menuFondo'); });
        //BOTON CÓMO JUGAR
        botonComoJugar.on('pointerdown', () => { this.scene.start("ComoJugar"); musica2.pause(); });
        botonComoJugar.on('pointerover', () => { this.add.image(400, 300, 'pulsadoComoJugar'); });
        botonComoJugar.on('pointerout', () => { this.add.image(400, 300, 'menuFondo'); });
    }

}