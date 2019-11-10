class Scene2 extends Phaser.Scene{
    constructor(){
        super("Menu");
        //this.button;
        //this.botonMenu;
    }
    init(){
        
    }
    create(){
        const Titulo = this.add.text(config.width/2,config.height/8,"Just 4 Cats",{font:"100px Courier", fill:"White"}).setOrigin(0.5,0.5);
        const botonPlay = this.add.text(config.width/2,2*config.height/5,"Play",{font:"60px Courier", fill:"White"}).setOrigin(0.5,0.5);
        const botonCreditos = this.add.text(config.width/2,4*config.height/5,"Credits",{font:"60px Courier", fill:"White"}).setOrigin(0.5,0.5);
        const botonComoJugar = this.add.text(config.width/2,3*config.height/5,"Como jugar",{font:"60px Courier", fill:"White"}).setOrigin(0.5,0.5);
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
        botonPlay.on('pointerdown', () => { this.scene.start("Game"); });
        botonPlay.on('pointerover', () => { this.toYellow(botonPlay) });
        botonPlay.on('pointerout', () => { this.toWhite(botonPlay); });
        //BOTON CREDITOS
        botonCreditos.on('pointerdown', () => { this.scene.start("Creditos"); });
        botonCreditos.on('pointerover', () => { this.toYellow(botonCreditos) });
        botonCreditos.on('pointerout', () => { this.toWhite(botonCreditos); });
        //BOTON CREDITOS
        botonComoJugar.on('pointerdown', () => { this.scene.start("ComoJugar"); });
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