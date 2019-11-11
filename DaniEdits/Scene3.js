class Scene3 extends Phaser.Scene{
    constructor(){
        
        super("Game");
        
    }
    //----------------------------------------------------------------
    
    preload () //precargar recursos
    {
        this.load.image('fondo', 'assets/fondo.jpg');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('pescado', 'assets/pescado.png');
        this.load.image('ovillo', 'assets/ovillo.png');
        this.load.image('rata', 'assets/rata.png');
        pU=this.load.image('lata', 'assets/lata.png');
        this.load.audio('juego',['assets/juego.mp3', 'assets/juego.ogg']);

        this.load.spritesheet('dude', 'assets/dude.png',
        { frameWidth: 64, frameHeight: 54 } //carga especial para una hoja de sprites
        );
        this.load.spritesheet('dude2', 'assets/dude2.png',
        { frameWidth: 64, frameHeight: 54 } //carga especial para una hoja de sprites
        );
    }

        

    create ()
    { 
        musica=this.sound.add('juego');
        musica.setLoop(true);
        musica.play();
        
        this.add.image(400, 300, 'fondo');

        platforms = this.physics.add.staticGroup(); //crea un nuevo grupo de elementos estáticos y lo asigna a la variable platforms
        platforms.create(400, 600, 'ground').setScale(2, 0.90).refreshBody().setAlpha(0.2); //cargarmos la imagen multiplicando por 2 su tamaño

        platforms.create(120, 240, 'ground').setScale(0.25, 0.3).refreshBody().setAlpha(0.2);//farola
        platforms.create(120, 50, 'ground').setScale(0.25, 0.3).refreshBody().setAlpha(0.2);//ventilador1
        platforms.create(640, 190, 'ground').setScale(0.33, 0.3).refreshBody().setAlpha(0.2);//venta izquierda

        platforms.create(340, 190, 'ground').setScale(0.33, 0.3).refreshBody().setAlpha(0.2);//ventana derecha

        platforms.create(339, 367, 'ground').setScale(0.33, 0.3).refreshBody().setAlpha(0.2);//ventana centro
        platforms.create(512, 347, 'ground').setScale(0.23, 0.3).refreshBody().setAlpha(0.2);//ventilador bajo
        platforms.create(640, 480, 'ground').setScale(0.5, 0.3).refreshBody().setAlpha(0.2);//basura
        platforms.create(90, 480, 'ground').setScale(0.3, 0.3).refreshBody().setAlpha(0.2);//coche
        platforms.create(180, 520, 'ground').setScale(0.2, 0.3).refreshBody().setAlpha(0.2);//coche
        platforms.create(1, 1, 'ground').setScale(0.15, 200).refreshBody().setAlpha(0.2); //cargarmos la imagen multiplicando por 2 su tamaño
        platforms.create(800, 800, 'ground').setScale(0.15, 200).refreshBody().setAlpha(0.2);
        

        //Creación del personaje
        player = this.physics.add.sprite(734, 560, 'dude'); //creación de un sprite con físicas
        this.physics.add.collider(player, platforms);
        //player.body.checkCollision.up=false;
        player2 = this.physics.add.sprite(60, 560, 'dude2'); //creación de un sprite con físicas
        this.physics.add.collider(player2, platforms);
        //player2.body.checkCollision.up=false;
        this.physics.add.collider(player2, player, this.touchPlayer);
        player.setBounce(0.0);
        player.setCollideWorldBounds(true);
        player.body.setGravityY(1000)
        player2.setBounce(0.0);
        player2.setCollideWorldBounds(true);
        player2.body.setGravityY(1000)

        //PLAYER 1 animaciones -----------------------------------------------------------------------------------------
        //animaciones sin objeto
        this.anims.create({
            key: 'leftplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 7 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });

        this.anims.create({
            key: 'turnplayer',
            frames: [ { key: 'dude', frame: 32 } ],
            frameRate: 1
        });

        this.anims.create({
            key: 'rightplayer',
            frames: this.anims.generateFrameNumbers('dude', { start: 56, end: 63 }),
            frameRate: 20,
            repeat: -1
        });

        //animaciones con ovillo
        this.anims.create({
            key: 'ovilloleftplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 15 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'ovillorightplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude', { start: 64, end: 71 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'ovilloturnplayer', //nombre de la animación
            frames: [ { key: 'dude', frame: 8 } ],
            frameRate: 1
        });
        //animaciones con pescado
        this.anims.create({
            key: 'pescadoleftplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude', { start: 16, end: 23 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'pescadorightplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude', { start: 72, end: 79 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'pescadoturnplayer', //nombre de la animación
            frames: [ { key: 'dude', frame: 16 } ],
            frameRate: 1
        });
        //animaciones con rata
        this.anims.create({
            key: 'rataleftplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude', { start: 24, end: 31 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'ratarightplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude', { start: 80, end: 87 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'rataturnplayer', //nombre de la animación
            frames: [ { key: 'dude', frame: 24 } ],
            frameRate: 1
        });
        // vomito animacion 
        this.anims.create({
            key: 'VOplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude', { start: 32, end: 55 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });

        //PLAYER 2 animaciones-------------------------------------------------------------------------------------
        this.anims.create({
            key: 'leftplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude2', { start: 0, end: 7 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });

        this.anims.create({
            key: 'turnplayer2',
            frames: [ { key: 'dude2', frame: 32 } ],
            frameRate: 1
        });

        this.anims.create({
            key: 'rightplayer2',
            frames: this.anims.generateFrameNumbers('dude2', { start: 56, end: 63 }),
            frameRate: 20,
            repeat: -1
        });

        //animaciones con ovillo
        this.anims.create({
            key: 'ovilloleftplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude2', { start: 8, end: 15 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'ovillorightplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude2', { start: 64, end: 71 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'ovilloturnplayer2', //nombre de la animación
            frames: [ { key: 'dude2', frame: 8 } ],
            frameRate: 1
        });
        //animaciones con pescado
        this.anims.create({
            key: 'pescadoleftplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude2', { start: 16, end: 23 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'pescadorightplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude2', { start: 72, end: 79 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'pescadoturnplayer2', //nombre de la animación
            frames: [ { key: 'dude2', frame: 16 } ],
            frameRate: 1
        });
        //animaciones con rata
        this.anims.create({
            key: 'rataleftplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude2', { start: 24, end: 31 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'ratarightplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude2', { start: 80, end: 87 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'rataturnplayer2', //nombre de la animación
            frames: [ { key: 'dude2', frame: 24 } ],
            frameRate: 1
        });
        // vomito animacion 
        this.anims.create({
            key: 'VOplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude2', { start: 88, end: 111 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        //FIN ANIMACIONES--------------------------------------------------------------------

        //creamos una estrella que sera uno de los objetos.
        objeto= this.physics.add.staticGroup();
        objetoPowerUp= this.physics.add.staticGroup();
        //elegimos un objeto aleatorio
        aleatorio=Phaser.Math.Between(1, 3);
        if(aleatorio===1)
            objetoAleatorio="pescado";
        else if(aleatorio===2)
            objetoAleatorio="ovillo";
        else if(aleatorio===3)
            objetoAleatorio="rata";

        //Generamos el objeto en el centro de la pantalla
        objeto.create(340, 175, objetoAleatorio);

        //colision con los objetos
        this.physics.add.overlap(player, objeto, this.collectObject, null, this);
        this.physics.add.overlap(player2, objeto, this.collectObject2, null, this);

        //controlador de movimientod el personaje
        cursors = this.input.keyboard.createCursorKeys();

        //El segundo jugador tiene estos controles
        player2.right=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        player2.left=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        player2.up=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        
        this.physics.add.overlap(player, player2, this.hitPlayer, null, this);
        this.physics.add.overlap(player2, player, this.hitPlayer, null, this);
        

        info = this.add.text(550, 10, '', {font:"40px Courier", fill:"white"});
        timer = this.time.addEvent({ delay: 45000, callback: this.gameOver, callbackScope: this });


    }

    gameOver ()
    {   
        musica.stop();
        if(objetoCogido)
            this.scene.start("Ganador1");
        else if(objetoCogido2)
            this.scene.start("Ganador2");
        else if(!objetoCogido && !objetoCogido2)
            this.scene.start("Menu");

        objetoCogido=false;
        objetoCogido2=false;
        generarPowerUp1 = Phaser.Math.Between(40, 30);
        generarPowerUp2 = Phaser.Math.Between(20, 5);
        pU.x+=50;
    }

    // coleccionar
    collectObject (player, objetoAleatorio)
    {
        
        objetoAleatorio.disableBody(true, true);// cuando toca el objeto
        objetoCogido=true;

        if (objeto.countActive(true)=== 0)
        {
            objeto.children.iterate(function (child) {
            });

            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
            var x2 = (player2.x2 < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        }

    }
    collectObject2 (player, objetoAleatorio)
    {
        
        objetoAleatorio.disableBody(true, true);// cuando toca el objeto
        objetoCogido2=true;

        if (objeto.countActive(true)=== 0)
        {
            objeto.children.iterate(function (child) {
            });

            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
            var x2 = (player2.x2 < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        }

    }
    
    colectPowerUp1(player, lata) {
            lata.disableBody(true, true); // cuando toca el objeto
            colisionPowerUp = true;
            cuentaAtrasPowerUp = true;

            if (objeto.countActive(true) === 0) {
                objeto.children.iterate(function (child) {
                });

                var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
                var x2 = (player2.x2 < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

            }

        }
    colectPowerUp2(player, lata) {
        lata.disableBody(true, true); // cuando toca el objeto
        colisionPowerUp2 = true;
        cuentaAtrasPowerUp = true;

        if (objeto.countActive(true) === 0) {
            objeto.children.iterate(function (child) {
            });

            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
            var x2 = (player2.x2 < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        }

    }
    
    hitPlayer(player, player2) {

        if (player.body.touching.up ) {
            cuentaAtrasParadoP1 = true;
            P2P1 = true;
            cuentaAtrasParadoP2 = false;
            
            P1P2 = false;

        } else if(player2.body.touching.up ){
            cuentaAtrasParadoP2 = true;
            P1P2 = true;
            cuentaAtrasParadoP1 = false;
           P2P1 = false;
        }


    }


    touchPlayer(player, player2) { 

        if(objetoCogido)
        {
            if(tiempoEspera>70){
                tiempoEspera=0;
                objetoCogido=false;
                objetoCogido2=true;
            }
            
        }
        else if (objetoCogido2)
        {
            if(tiempoEspera>70){
                tiempoEspera=0;
                objetoCogido=true;
                objetoCogido2=false;
            }
        }
    }

    update(time, delta) {
            tiempoEspera++;
            tiempo = Math.round(Math.floor(45000 - timer.getElapsed()) / 1000);
            //Cuando el tiempo que queda es igual al random en el que aparecen los power ups
            if (tiempo< generarPowerUp1 && tiempo> (generarPowerUp1-2)) {
                generarPowerUp1=130;
                pU=objetoPowerUp.create(640,170, "lata");
                this.physics.add.overlap(player, objetoPowerUp, this.colectPowerUp1, null, this);
                this.physics.add.overlap(player2, objetoPowerUp, this.colectPowerUp2, null, this);
            }
            if(tiempo<destruir){
                pU.x=-50;
            }
            if (tiempo === generarPowerUp2) {
                generarPowerUp2 = 130;
                //objetoPowerUp.disableBody(true, true);
                objetoPowerUp.create(339, 350, "lata");
                this.physics.add.overlap(player, objetoPowerUp, this.colectPowerUp1, null, this);
                this.physics.add.overlap(player2, objetoPowerUp, this.colectPowerUp2, null, this);
            }

            //para mostrar el temporizador
            info.setText('Tiempo: ' + tiempo);

            //Si coge el power up y aun no se ha acabado el tiempo de duracion de este, el jugador se mueve más rápido
            if (colisionPowerUp && cuentaAtrasPowerUp) {
                tiempoPowerUp--;
                if (tiempoPowerUp === 0) {
                    cuentaAtrasPowerUp = false;
                }
                //jugador 1
                if (cursors.left.isDown && P1P2 == false) {
                    player.setVelocityX(-300);
                    this.animacion(player,'player','left',objetoCogido);
                }
                else if (cursors.right.isDown && P1P2 == false) {
                    player.setVelocityX(300);
                    this.animacion(player,'player','right',objetoCogido);
                }
                else if(!P1P2) {
                    player.setVelocityX(0);
                    this.animacion(player,'player','turn',objetoCogido);
                }
                if (cursors.up.isDown && player.body.touching.down && P1P2 == false) {
                    
                   player.setVelocityY(-600); 
                }
                if (P1P2 == true) {
                    tiempoParadoP1--;
                    if (tiempoParadoP1 > 0) {
                        this.animacion(player,'player','VO',objetoCogido2);
                        
                    } else {
                        tiempoParadoP1 = 50;
                        P1P2 = false;
    
                    }
    
                }
                    
                
                //jugador 2
                if (player2.right.isDown && P2P1 == false) {

                    player2.setVelocityX(180);
                    this.animacion(player2,'player2','right',objetoCogido2);

                } else if (player2.left.isDown && P2P1 == false) {

                    player2.setVelocityX(-180);
                    this.animacion(player2,'player2','left',objetoCogido2);

                } else if(!P2P1) {

                    player2.setVelocityX(0);
                    this.animacion(player2,'player2','turn',objetoCogido2);
                }
                if (player2.up.isDown && player2.body.touching.down && P2P1 == false) {
                    
                    player2.setVelocityY(-600); 
                     
                 }
                 if (P2P1 == true) {
                    tiempoParadoP2--;
                    if (tiempoParadoP2 != 0) {
                        this.animacion(player2,'player2','VO',objetoCogido2);
                    } else {
                        tiempoParadoP2 = 50;
                        P2P1 = false;
    
                    }
                }     

                
            }
            if (colisionPowerUp2 && cuentaAtrasPowerUp) {
                tiempoPowerUp2--;
                if (tiempoPowerUp2 === 0) {
                    cuentaAtrasPowerUp = false;
                }
                //jugador 1
                if (cursors.left.isDown && P1P2 == false) {
                    player.setVelocityX(-180);
                    this.animacion(player,'player','left',objetoCogido);
                }
                else if (cursors.right.isDown && P1P2 == false) {
                    player.setVelocityX(180);
                    this.animacion(player,'player','right',objetoCogido);
                }
                else if(!P1P2){
                    player.setVelocityX(0);
                    this.animacion(player,'player','turn',objetoCogido);
                }
                if (cursors.up.isDown && player.body.touching.down && P1P2 == false) {
                    
                    player.setVelocityY(-600); 
                }
                if (P1P2 == true) {
                    tiempoParadoP1--;
                    if (tiempoParadoP1 > 0) {
                        this.animacion(player,'player','VO',objetoCogido2);
                    } else {
                        tiempoParadoP1 = 50;
                        P1P2 = false;
    
                    }
    
                }     
                 
                //jugador 2
                if (player2.right.isDown && P2P1 == false) {

                    player2.setVelocityX(300);
                    this.animacion(player2,'player2','right',objetoCogido2);

                } else if (player2.left.isDown && P2P1 == false) {

                    player2.setVelocityX(-300);
                    this.animacion(player2,'player2','left',objetoCogido2);

                } else if(!P2P1) {

                    player2.setVelocityX(0);
                    this.animacion(player2,'player2','turn',objetoCogido2);
                }
                if (player2.up.isDown && player2.body.touching.down && P2P1 == false) {
                    
                    player2.setVelocityY(-600); 
                }
                if (P2P1 == true) {
                    tiempoParadoP2--;
                    if (tiempoParadoP2 != 0) {
                        this.animacion(player2,'player2','VO',objetoCogido2);
                        
                    } else {
                        tiempoParadoP2 = 50;
                        P2P1 = false;
    
                    }
                }    
                 
                
            }
            //Si no ha cogido el Powerup o ya se ha acabado su efecto, el jugador se mueve a velocidad "normal"
            else if ((!colisionPowerUp && !colisionPowerUp2) || !cuentaAtrasPowerUp) {
                //para que no exista bucle
                

                //jugador 1
                if (cursors.left.isDown && P1P2 == false) {

                    player.setVelocityX(-180);
                    this.animacion(player,'player','left',objetoCogido);

                }
                else if (cursors.right.isDown && P1P2 == false) {

                    player.setVelocityX(180);
                    this.animacion(player,'player','right',objetoCogido);

                }
                else if(!P1P2) {

                    player.setVelocityX(0);
                    this.animacion(player,'player','turn',objetoCogido);

                    
                }
                if (cursors.up.isDown && player.body.touching.down && P1P2 == false) {
                    
                    player.setVelocityY(-600); 
                     
                }
                if (P1P2 == true) {
                    tiempoParadoP1--;
                    if (tiempoParadoP1 > 0) {
                        this.animacion(player,'player','VO',objetoCogido);
                    } else {
                        tiempoParadoP1 = 50;
                        P1P2 = false;
    
                    }
    
                }
                
                //jugador 2
                if (player2.right.isDown && P2P1 == false) {

                    player2.setVelocityX(180);
                    this.animacion(player2,'player2','right',objetoCogido2);

                } else if (player2.left.isDown && P2P1 == false) {

                    player2.setVelocityX(-180);
                    this.animacion(player2,'player2','left',objetoCogido2);

                } else if(!P2P1) {
                    player2.setVelocityX(0);
                    this.animacion(player2,'player2','turn',objetoCogido2);
                    
                } 
                if (player2.up.isDown && player2.body.touching.down && P2P1 == false) {
                    
                    player2.setVelocityY(-600); 
                     
                 }
                 if (P2P1 == true) {
                    tiempoParadoP2--;
                    if (tiempoParadoP2 != 0) {
                        this.animacion(player2,'player2','VO',objetoCogido2);
                    } else {
                        tiempoParadoP2 = 50;
                        P2P1 = false;
    
                    }
                }
                
                
            }
        }
    
    animacion(jugador,nombre, direccion, objetocog){
 
        anim=objetoAleatorio+direccion+nombre;
        if (objetocog && direccion!='VO'){
            jugador.anims.play(anim, true);
        }
        else if(!objetocog || direccion=='VO')
            jugador.anims.play(direccion+nombre, true);

    }

    render() {

        game.debug.text('Time until event: ' + timer.duration.toFixed(0), 32, 32);
        game.debug.text('Loop Count: ' + total, 32, 64);

    }
        
    
   
    
}