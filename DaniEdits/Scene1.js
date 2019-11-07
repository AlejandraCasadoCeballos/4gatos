class Scene1 extends Phaser.Scene{
    constructor(){
        super("Creditos");
    }

    init(){
        
    }
    create(){
        const botonback = this.add.text(config.width/8, 7*config.height/8,"Back",{font:"80px Courier", fill:"Red"}).setOrigin(0.5,0.5);
        
        var dani = this.add.text(config.width/2,config.height/7,"Daniel Brenlla Gómez",{font:"40px Courier", fill:"white"}).setOrigin(0.5,0.5);
        var ale= this.add.text(config.width/2,2*config.height/7,"Alejandra Casado Ceballos",{font:"40px Courier", fill:"white"}).setOrigin(0.5,0.5);
        var patri = this.add.text(config.width/2,3*config.height/7,"Patricia Ruiz Bermejo",{font:"40px Courier", fill:"white"}).setOrigin(0.5,0.5);
        var juan = this.add.text(config.width/2,4*config.height/7,"Juan Sanchez Romero",{font:"40px Courier", fill:"white"}).setOrigin(0.5,0.5);
        var blanca = this.add.text(config.width/2,5*config.height/7,"Blanca de la Fuente Alonso",{font:"40px Courier", fill:"white"}).setOrigin(0.5,0.5);

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
        botonback.on('pointerout', () => { this.toRed(botonback); });
    }

    toYellow(boton){
        boton.setStyle({ fill: 'Yellow'});
    }

    toRed(boton){
        boton.setStyle({ fill: 'Red'});
    }


}