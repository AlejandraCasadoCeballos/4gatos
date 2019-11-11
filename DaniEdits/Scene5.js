class Scene5 extends Phaser.Scene{
    constructor(){
        super("Ganador1");
    }

    init(){
        
    }
    create(){
        const botonback = this.add.text(config.width/8, 7*config.height/8,"Back",{font:"80px Courier", fill:"white"}).setOrigin(0.5,0.5);
        
        var texto = this.add.text(config.width/2,config.height/7,"Ha ganado Muffin (gato azul)",{font:"40px Courier", fill:"white"}).setOrigin(0.5,0.5);
        
        botonback.setInteractive();
        /*
            pointerover
            pointerout
            pointerdown
            pointerup
        */
        //BOTON PLAY
        botonback.on('pointerdown', () => { this.scene.start("Menu"); });
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