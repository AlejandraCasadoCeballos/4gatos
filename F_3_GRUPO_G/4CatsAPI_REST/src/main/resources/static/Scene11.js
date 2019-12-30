class Scene11 extends Phaser.Scene
{
    constructor() { super("EligeGato"); }
    
    init(){}
    
    preload () //precargar recursos: sonidos e imágenes
    {
        this.load.image('eligeGato','/Recursos/Interfaz/eligeGato.jpg');//imagen menú cuando estás sobre el botón de créditos
        this.load.spritesheet('Muffin', '/Recursos/Personajes/Muffin.png', { frameWidth: 64, frameHeight: 54 });
        this.load.spritesheet('Mungojerry', '/Recursos/Personajes/Mungojerry.png', { frameWidth: 64, frameHeight: 54 });
        this.load.image('plataforma', '/Recursos/Plataformas/plataforma.png');
    }

    create()
    {
    	musica2.resume(); 
        this.anims.create(
        {
            key: 'leftplayer', // Nombre de la animación
            frames: this.anims.generateFrameNumbers('Muffin', { start: 0, end: 7 }),// Frames que utilizamos para la animación
            frameRate: 20,// Velocidad de la animación
            repeat: -1 // Volver a empezar cuando termine
        });
        
        this.anims.create(
        {
            key: 'leftplayer2', // Nombre de la animación
            frames: this.anims.generateFrameNumbers('Mungojerry', { start: 0, end: 7 }),
            frameRate: 20,
            repeat: -1 // Volver a empezar cuando termine
        });
        
        this.add.image(400, 300,'eligeGato');
        plataformaGorda = this.physics.add.staticGroup();
        plataformaGorda.create(400, 700, 'plataforma').setScale(2, 12.5).refreshBody().setAlpha(0);

        muffin = this.physics.add.sprite(300, 450,'Muffin').setScale(2);
        mungojerry = this.physics.add.sprite(500, 450,'Mungojerry').setScale(2);

        this.physics.add.collider(muffin, plataformaGorda);
        this.physics.add.collider(mungojerry, plataformaGorda);
        const botonMungojerry = mungojerry;
        const botonMuffin = muffin;

        botonMungojerry.setInteractive();
        botonMuffin.setInteractive();
        
       

        // Distintas interacciones (pulsarlo, estar sobre él y dejar de estar sobre él) para cada botón del menú
        // En cada uno, al poner el ratón sobre el botón la imagen cambia a otra que tiene las letras de dicho botón de otro color
        // Al quitar el ratón, la imagen vuelve a ser la original. Al pulsar cada botón cambiamos a la escena correspondiente y paramos la música
        // BOTÓN JUGAR
        botonMungojerry.on('pointerdown', () => { musica2.stop(); this.scene.start("Mensaje"); prepararYEnviarJugador("Mungojerry", jugador.nombre);/*PUTnombreGato(jugador);*/ });
        botonMungojerry.on('pointerover', () => { mungojerry.anims.play('leftplayer2',true); });
        botonMungojerry.on('pointerout', () => { mungojerry.anims.stop('leftplayer2',true); });
        // BOTÓN CRÉDITOS
        botonMuffin.on('pointerdown', () => { musica2.stop(); this.scene.start("Mensaje"); prepararYEnviarJugador("Muffin", jugador.nombre); /*PUTnombreGato(jugador);*/});
        botonMuffin.on('pointerover', () => { muffin.anims.play('leftplayer',true); });
        botonMuffin.on('pointerout', () => { muffin.anims.stop('leftplayer',true); });
        
        numeroJugadores = GETnumJugadores();
        te = this.add.text(420, 10, "Jugadores conectados: " + numeroJugadores, {font:"25px Courier", fill:"white"});
    	te2 = this.add.text(40, 10, jugador.nombre, {font:"25px Calibri", fill:"white"});
    }
    
    update() {
    	
    	PUTservidor(jugador);
    	//tiempoInactividad(this);
    	te.destroy();
    	numeroJugadores = GETnumJugadores();
    	te = this.add.text(420, 10, "Jugadores conectados: " + numeroJugadores, {font:"25px Courier", fill:"white"});
    	
    }
}