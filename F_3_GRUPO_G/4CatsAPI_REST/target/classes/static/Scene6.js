class Scene6 extends Phaser.Scene{
    constructor(){
        super("elegirEscenario");
    }

    init(){
        
    }
    preload () //precargar recursos
    {
    	this.load.image('elegirEscenario','/Recursos/Interfaz/elegirEscenario.jpg');
    	this.load.image('escenario1','/Recursos/Interfaz/escenario1.jpg');
    	this.load.image('filtro','/Recursos/Interfaz/filtro.jpg');
    	
    }

    create(){
    	
    	this.add.image(400, 300,'elegirEscenario');
    	im= this.physics.add.staticGroup(); 
    	
    	const botonEscenario1=im.create(150, 400, 'escenario1').setScale(0.25, 0.25).refreshBody();
    	const botonEscenario2=im.create(400, 400, 'elegirEscenario').setScale(0.25, 0.25).refreshBody();
    	const botonEscenario3=im.create(650, 400, 'elegirEscenario').setScale(0.25, 0.25).refreshBody();
    	
    	te2 = this.add.text(40, 10, jugador.nombre, {font:"25px Courier", fill:"white"});
    	
    	botonEscenario1.setInteractive();
    	botonEscenario2.setInteractive();
    	botonEscenario3.setInteractive();
        
    	botonEscenario1.on('pointerdown', () => { this.scene.start("EligeGato"); escenarioUno=true;});
    	botonEscenario1.on('pointerover', () => {im.create(150, 400, 'filtro').setScale(0.25, 0.25).refreshBody().setAlpha(0.4);});
    	botonEscenario1.on('pointerout', () => {im.create(150, 400, 'escenario1').setScale(0.25, 0.25).refreshBody(); });
    	
    	botonEscenario2.on('pointerdown', () => { this.scene.start("EligeGato"); escenarioDos=true;});
    	botonEscenario2.on('pointerover', () => {im.create(400, 400, 'filtro').setScale(0.25, 0.25).refreshBody().setAlpha(0.4);});
    	botonEscenario2.on('pointerout', () => {im.create(400, 400, 'elegirEscenario').setScale(0.25, 0.25).refreshBody(); });
    	
    	botonEscenario3.on('pointerdown', () => { this.scene.start("EligeGato"); escenarioTres=true;});
    	botonEscenario3.on('pointerover', () => {im.create(650, 400, 'filtro').setScale(0.25, 0.25).refreshBody().setAlpha(0.4);});
    	botonEscenario3.on('pointerout', () => {im.create(650, 400, 'elegirEscenario').setScale(0.25, 0.25).refreshBody(); });
    }
    update(){
    	
    }
}