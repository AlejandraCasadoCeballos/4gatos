class Scene1 extends Phaser.Scene{
    constructor(){
        super("Creditos");
    }

    init(){
        
    }
    preload () //precargar recursos
    {
        musica2.resume();
        this.load.image('creditos','assets/creditos.jpg');
    }

    create(){
        const botonback = this.add.text(config.width/8, 7*config.height/8,"Atras",{font:"80px Courier", fill:"white"}).setOrigin(0.5,0.5);
        
        const creditos= this.add.image(400, 300,'creditos');
        
        
        //var dani = this.add.text(config.width/2,config.height/7,"Daniel Brenlla Gómez",{font:"40px Courier", fill:"white"}).setOrigin(0.5,0.5);
        //var ale= this.add.text(config.width/2,2*config.height/7,"Alejandra Casado Ceballos",{font:"40px Courier", fill:"white"}).setOrigin(0.5,0.5);
        //var patri = this.add.text(config.width/2,3*config.height/7,"Patricia Ruiz Bermejo",{font:"40px Courier", fill:"white"}).setOrigin(0.5,0.5);
        //var juan = this.add.text(config.width/2,4*config.height/7,"Juan Sanchez Romero",{font:"40px Courier", fill:"white"}).setOrigin(0.5,0.5);
        //var blanca = this.add.text(config.width/2,5*config.height/7,"Blanca de la Fuente Alonso",{font:"40px Courier", fill:"white"}).setOrigin(0.5,0.5);

        botonback.setInteractive();
        /*
            pointerover
            pointerout
            pointerdown
            pointerup
        */
        //BOTON PLAY
        botonback.on('pointerdown', () => { this.scene.start("Menu"); musica2.pause();});
        botonback.on('pointerover', () => { this.toYellow(botonback) });
        botonback.on('pointerout', () => { this.toWhite(botonback); });
    }

    toYellow(boton){
        boton.setStyle({ fill: 'Yellow'});
    }

    toWhite(boton){
        boton.setStyle({ fill: 'white'});
    }
}