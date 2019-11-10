var config = {
    type: Phaser.AUTO, //Intenta inicializar WebGl y si no puede inicializa canvas
    
    width: 800,
    height: 600,    
    
    physics:{
        default: 'arcade',
        arcade:{
            gravity:{y:300},
            debug:false
        }
    },
    scene: [Scene2,Scene1,Scene3,Scene4],
    scale: {
        mode: Phaser.Scale.FIT,// para qeu al rescalar la pantalla se siga manteninedo igual
        autoCenter: Phaser.Scale.LEFT,// centrar
        width: 800,
        height: 600
    },
    
};

var game = new Phaser.Game(config); //Se crea una instancia de un objeto Phaser.Game
