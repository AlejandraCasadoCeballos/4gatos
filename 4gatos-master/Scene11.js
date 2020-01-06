class Scene11 extends Phaser.Scene{
    constructor(){
        super("EligeGato");
    }
    init(){
        
    }
    preload () //precargar recursos: sonidos e imágenes
    {
        this.load.image('eligeGato','/Recursos/Interfaz/eligeGato.jpg');//imagen menú cuando estás sobre el botón de créditos
        this.load.spritesheet('Muffin', '/Recursos/Personajes/Muffin.png',
        { frameWidth: 64, frameHeight: 54 } 
        );
        this.load.spritesheet('Mungojerry', '/Recursos/Personajes/Mungojerry.png',
        { frameWidth: 64, frameHeight: 54 } 
        );
        this.load.image('plataforma', '/Recursos/Plataformas/plataforma.png');
    }

    create(){
        GETservidor();
        this.anims.create({
            key: 'leftplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Muffin', { start: 0, end: 7 }),// frames que utilziamos para la animacion
            frameRate: 20,//velocidad de la animación
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'leftplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Mungojerry', { start: 0, end: 7 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        
        this.add.image(400, 300,'eligeGato');
        plataformaGorda = this.physics.add.staticGroup();
        plataformaGorda.create(400, 600, 'plataforma').setScale(2, 12.5).refreshBody().setAlpha(0);

        muffin=this.physics.add.sprite(300, 350,'Muffin').setScale(2);
        mungojerry=this.physics.add.sprite(500, 350,'Mungojerry').setScale(2);

        this.physics.add.collider(muffin, plataformaGorda);
        this.physics.add.collider(mungojerry, plataformaGorda);
        const botonMungojerry = mungojerry;
        const botonMuffin = muffin;

        botonMungojerry.setInteractive();
        botonMuffin.setInteractive();
        

        //Distintas interaciones (pulsarlo,estar sobre él y dejar de estar sobre él) para cada botón del menú
        //En cada uno, al poner el ratón sobre el botón la imagen cambia a otra que tiene las letras de dicho botón de otro color
        //Al quitar el ratón, la imagen vuelve a ser la original. Al pulsar cada botón cambiamos a la escena correspondiente y paramos la música
        //BOTON JUGAR
        botonMungojerry.on('pointerdown', () => { this.scene.start("Menu");});
        botonMungojerry.on('pointerover', () => { mungojerry.anims.play('leftplayer2',true);});
        botonMungojerry.on('pointerover', () => {GETservidor();});
        botonMungojerry.on('pointerout', () => { mungojerry.anims.stop('leftplayer2',true); });
        //BOTON CRÉDITOS
        botonMuffin.on('pointerdown', () => { this.scene.start("Menu"); });
        botonMuffin.on('pointerover', () => {muffin.anims.play('leftplayer',true);});
        botonMuffin.on('pointerout', () => { muffin.anims.stop('leftplayer',true);});
        
    }
    
}