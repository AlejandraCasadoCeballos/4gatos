

var config = {
    type: Phaser.AUTO, //Intenta inicializar WebGl y si no puede inicializa canvas
    width: 800,
    parent: 'phaser-example',
    height: 600,    
    pixelArt: true,
    audio: {
        mute: false,
        volume: 1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0
    },
    dom: {
        createContainer: true
    },
    physics:{
        default: 'arcade',
        arcade:{
            gravity:{y:300},
            debug:false
        }
    },
    scene: [Scene2,Scene12,Scene11,Scene1,Scene3,Scene4,Scene5,Scene6,Scene7,Scene8,Scene9,Scene10],
    scale: {
        mode: Phaser.Scale.FIT,// para qeu al rescalar la pantalla se siga manteninedo igual
        autoCenter: Phaser.Scale.LEFT,// centrar
        width: 800,
        height: 600
    },
    
};

var game = new Phaser.Game(config); //Se crea una instancia de un objeto Phaser.Game
