class Scene1 extends Phaser.Scene{
    constructor(){
        super("Menu");
    }

    init(){
        
    }
    create(){
        this.botonMenu = this.add.text(400,300,"MENU",{font:"100px Arial", fill:"yellow"}).setOrigin(0.5,0.5);
        //setOrigin(0.5,0.5) pone el punto de referencia de la imagen en el centro
        this.botonMenu.setInteractive();
        this.input.on('pointerdown', () => this.start.scene('Game'));

    }

    onObjectClicked(pointer,gameObject)
    {
        //if(gameObject===this.botonMenu){
        //    this.scene.start("Menu2");
        //}
        //else{
        //    gameObject.angle+=10;
        //}
        this.scene.start("Menu2");
    }
}