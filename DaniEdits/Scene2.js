class Scene2 extends Phaser.Scene{
    constructor(){
        super("Menu2");
        //this.button;
        //this.botonMenu;
    }
    init(){
        
    }
    create(){
        const botonMenu = this.add.text(config.width/2,config.height/2,"MENU",{font:"100px Arial", fill:"red"}).setOrigin(0.5,0.5);
        //setOrigin(0.5,0.5) pone el punto de referencia de la imagen en el centro
        //button = game.add.button(config.width/2, config.height/2 + 100, 'button', overbutton, this, 2, 1, 0).setOrigin(0.5,0.5);
        botonMenu.setInteractive();
        /*
            pointerover
            pointerout
            pointerdown
            pointerup
        */
        botonMenu.on('pointerdown', () => { this.scene.start("Game"); });
        botonMenu.on('pointerover', () => { this.toYellow(botonMenu) });
        botonMenu.on('pointerout', () => { this.toRed(botonMenu); });
        
    }

    toYellow(botonMenu){
        botonMenu.setStyle({ fill: 'Yellow'});
    }

    toRed(botonMenu){
        botonMenu.setStyle({ fill: 'Red'});
    }
}