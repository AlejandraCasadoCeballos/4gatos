class Scene2 extends Phaser.Scene{
    constructor(){
        super("Menu");
        //this.button;
        //this.botonMenu;
    }
    init(){
        
    }
    preload () //precargar recursos
    {
        this.load.audio('menu',['assets/menu.mp3', 'assets/menu.ogg']);
        this.load.image('menuFondo','assets/menu.jpg');
    }

    create(){
        
        musica2=this.sound.add('menu');
        musica2.setLoop(true);
        musica2.play();
        
        //const Titulo = this.add.text(config.width/2,config.height/8,"Just 4 Cats",{font:"100px Courier", fill:"White"}).setOrigin(0.5,0.5);
        const botonPlay = this.add.text(config.width/5,config.height/1.4,"Jugar",{font:"40px Courier", fill:"White"}).setOrigin(0.5,0.5);
        const botonCreditos = this.add.text(config.width/1.23,config.height/1.4,"Creditos",{font:"40px Courier", fill:"White"}).setOrigin(0.5,0.5);
        const botonComoJugar = this.add.text(config.width/2,config.height/1.4,"Como jugar",{font:"40px Courier", fill:"White"}).setOrigin(0.5,0.5);
        
        this.add.image(400, 300,'menuFondo');
        
        //setOrigin(0.5,0.5) pone el punto de referencia de la imagen en el centro
        //button = game.add.button(config.width/2, config.height/2 + 100, 'button', overbutton, this, 2, 1, 0).setOrigin(0.5,0.5);
        botonCreditos.setInteractive();
        botonPlay.setInteractive();
        botonComoJugar.setInteractive();
        /*
            pointerover
            pointerout
            pointerdown
            pointerup
        */
        //BOTON PLAY
        botonPlay.on('pointerdown', () => { this.scene.start("Game"); musica2.stop();});
        botonPlay.on('pointerover', () => { this.toYellow(botonPlay) });
        botonPlay.on('pointerout', () => { this.toWhite(botonPlay); });
        //BOTON CREDITOS
        botonCreditos.on('pointerdown', () => { this.scene.start("Creditos"); musica2.pause();});
        botonCreditos.on('pointerover', () => { this.toYellow(botonCreditos) });
        botonCreditos.on('pointerout', () => { this.toWhite(botonCreditos); });
        //BOTON CREDITOS
        botonComoJugar.on('pointerdown', () => { this.scene.start("ComoJugar"); musica2.pause();});
        botonComoJugar.on('pointerover', () => { this.toYellow(botonComoJugar) });
        botonComoJugar.on('pointerout', () => { this.toWhite(botonComoJugar); });
    }

    toYellow(boton){
        boton.setStyle({ fill: 'Yellow'});
    }

    toWhite(boton){
        boton.setStyle({ fill: 'White'});
    }
}