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
    scene: [Scene2,Scene1,Scene3]
    
};

var game = new Phaser.Game(config); //Se crea una instancia de un objeto Phaser.Game
