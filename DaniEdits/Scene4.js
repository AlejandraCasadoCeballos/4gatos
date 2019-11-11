class Scene4 extends Phaser.Scene{
    constructor(){
        super("ComoJugar");
    }

    init(){
        
    }
    preload () //precargar recursos
    {
        
        this.load.image('comoJugar','assets/comoJugar.jpg');
    }
    create(){

        musica2.resume();
        const botonback = this.add.text(config.width/8, 7*config.height/8,"Atras",{font:"80px Courier", fill:"Red"}).setOrigin(0.5,0.5);
        
        this.add.image(400, 300,'comoJugar');

        //var movimiento = this.add.text(config.width/2,config.height/7,"Movimiento: Flechas Izquierda y Derecha",{font:"25px Courier", fill:"white"}).setOrigin(0.5,0.5);
        //var salto = this.add.text(config.width/2,2*config.height/7,"Salto: Flecha Arriba",{font:"25px Courier", fill:"white"}).setOrigin(0.5,0.5);
        //var texto0 = this.add.text(config.width/2,3*config.height/7,"Objetivo: Se el ultimo en\nposeer el objeto para ganar",{font:"25px Courier", fill:"white"}).setOrigin(0.5,0.5);
        //var texto1 = this.add.text(config.width/2,4*config.height/7,"Toca un gato rival para quitarle el objeto",{font:"25px Courier", fill:"white"}).setOrigin(0.5,0.5);
        //var texto2 = this.add.text(config.width/2,5*config.height/7,"Salta encima de tu rival para hacerle vomitar",{font:"25px Courier", fill:"white"}).setOrigin(0.5,0.5);

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
        botonback.on('pointerout', () => { this.toRed(botonback); });
    }

    toYellow(boton){
        boton.setStyle({ fill: 'Yellow'});
    }

    toRed(boton){
        boton.setStyle({ fill: 'White'});
    }


}