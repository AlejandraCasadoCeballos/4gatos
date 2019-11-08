class Scene3 extends Phaser.Scene{
    constructor(){
        
        super("Game");
        this.platforms;
        this.player;
        this.cursors;
        this.stars;
        this.score = 0;
        this.scoreText;
        this.paused = false;
        
    }
    //----------------------------------------------------------------
    
    preload () //precargar recursos
    {
        this.load.image('fondo', 'assets/fondo.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('pescado', 'assets/pescado.png');
        this.load.image('ovillo', 'assets/ovillo.png');
        this.load.image('rata', 'assets/rata.png');
        this.load.image('lata', 'assets/lata.png');

        this.load.spritesheet('dude', 'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 } //carga especial para una hoja de sprites
        );
        this.load.spritesheet('dude2', 'assets/dude2.png',
        { frameWidth: 32, frameHeight: 48 } //carga especial para una hoja de sprites
        );
    }

        

    create ()
    { 
        
        this.add.image(400, 300, 'fondo');

        platforms = this.physics.add.staticGroup(); //crea un nuevo grupo de elementos estáticos y lo asigna a la variable platforms
        platforms.create(400, 568, 'ground').setScale(2).refreshBody(); //cargarmos la imagen multiplicando por 2 su tamaño
        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');

        //Creación del personaje
        player = this.physics.add.sprite(100, 450, 'dude'); //creación de un sprite con físicas
        this.physics.add.collider(player, platforms);
        player2 = this.physics.add.sprite(16, 450, 'dude2'); //creación de un sprite con físicas
        this.physics.add.collider(player2, platforms);
        this.physics.add.collider(player2, player, this.touchPlayer);
        player.setBounce(0.0);
        player.setCollideWorldBounds(true);
        player.body.setGravityY(1000)
        player2.setBounce(0.0);
        player2.setCollideWorldBounds(true);
        player2.body.setGravityY(1000)

        //animaciones sin objeto
        this.anims.create({
            key: 'left', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frames: this.anims.generateFrameNumbers('dude2', { start: 0, end: 3 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frames: [ { key: 'dude2', frame: 4 } ],
            frameRate: 1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frames: this.anims.generateFrameNumbers('dude2', { start: 5, end: 8 }),
            frameRate: 20,
            repeat: -1
        });

        //animaciones con objeto
        this.anims.create({
            key: 'leftWO', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frames: this.anims.generateFrameNumbers('dude2', { start: 5, end: 8 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });

        this.anims.create({
            key: 'turnWO',
            frames: [ { key: 'dude', frame: 4 } ],
            frames: [ { key: 'dude2', frame: 4 } ],
            frameRate: 1
        });

        this.anims.create({
            key: 'rightWO',
            frames: this.anims.generateFrameNumbers('dude', { start: 1, end: 3 }),
            frames: this.anims.generateFrameNumbers('dude2', { start: 1, end: 3 }),
            frameRate: 20,
            repeat: -1
        });
        // vomito animacion 
        this.anims.create({
            key: 'VO', //nombre de la animación
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frames: this.anims.generateFrameNumbers('dude2', { start: 0, end: 3 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });

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
        objeto.create(320,240, objetoAleatorio);

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

        info = this.add.text(10, 10, '', { font: '48px Arial', fill: '#000000' });
        timer = this.time.addEvent({ delay: 45000, callback: this.gameOver, callbackScope: this });

    }

    gameOver ()
    {
        this.input.off('gameobjectup');
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
            objetoCogido=false;
            objetoCogido2=true;
        }
        else if (objetoCogido2)
        {
            objetoCogido2=false;
            objetoCogido=true;
        }
    }

    update(time, delta) {
            tiempo = Math.round(Math.floor(45000 - timer.getElapsed()) / 1000);

            //Cuando el tiempo que queda es igual al random en el que aparecen los power ups
            if (tiempo === generarPowerUp1) {
                generarPowerUp1 = 130;

                objetoPowerUp.create(Phaser.Math.Between(50, 100), Phaser.Math.Between(50, 100), "lata");
                this.physics.add.overlap(player, objetoPowerUp, this.colectPowerUp1, null, this);
                this.physics.add.overlap(player2, objetoPowerUp, this.colectPowerUp2, null, this);
            }

            if (tiempo === generarPowerUp2) {
                generarPowerUp2 = 130;

                objetoPowerUp.create(Phaser.Math.Between(50, 100), Phaser.Math.Between(50, 100), "lata");
                this.physics.add.overlap(player, objetoPowerUp, this.colectPowerUp1, null, this);
                this.physics.add.overlap(player2, objetoPowerUp, this.colectPowerUp2, null, this);
            }

            //para mostrar el temporizador
            info.setText('Time: ' + tiempo);

            //Si coge el power up y aun no se ha acabado el tiempo de duracion de este, el jugador se mueve más rápido
            if (colisionPowerUp && cuentaAtrasPowerUp) {
                tiempoPowerUp--;
                if (tiempoPowerUp === 0) {
                    tiempoPowerUp = 250;
                    cuentaAtrasPowerUp = false;
                }
                //jugador 1
                if (cursors.left.isDown && P1P2 == false) {
                    player.setVelocityX(-500);

                    if (objetoCogido)
                        player.anims.play('leftWO', true);
                    
                    else
                        player.anims.play('left', true);
                }
                else if (cursors.right.isDown && P1P2 == false) {
                    player.setVelocityX(500);
                    if (objetoCogido)
                        player.anims.play('rightWO', true);
                    
                    else
                        player.anims.play('right', true);
                }
                else {
                    player.setVelocityX(0);

                    if (objetoCogido)
                        player.anims.play('turnWO');
                    
                    else
                        player.anims.play('turn');
                }
                if (cursors.up.isDown && player.body.touching.down && P1P2 == false) {
                    
                   player.setVelocityY(-800); 
                }
                if (P1P2 == true) {
                    tiempoParadoP1--;
                    if (tiempoParadoP1 > 0) {
                        if (cursors.left.isDown) {
                            player.anims.play('VO', true);
                        } else if (cursors.right.isDown) {
                            player.anims.play('VO', true);
                        } else {
                            player.anims.play('VO', true);
    
                        } if (cursors.up.isDown && player.body.touching.down) {
                            player.anims.play('VO', true);
                        }
                    } else {
                        tiempoParadoP1 = 150;
                        P1P2 = false;
    
                    }
    
                } 
                    
                
                //jugador 2
                if (player2.right.isDown && P2P1 == false) {

                    player2.setVelocityX(180);

                    if (objetoCogido2)
                        player2.anims.play('rightWO', true);
                    
                    else
                        player2.anims.play('right', true);

                } else if (player2.left.isDown && P2P1 == false) {

                    player2.setVelocityX(-180);
                           
                    if (objetoCogido2)
                        player2.anims.play('leftWO', true);
                    

                    else
                        player2.anims.play('left', true);

                } else {

                    player2.setVelocityX(0);

                    if (objetoCogido2)
                        player2.anims.play('turnWO');
                    
                    else
                        player2.anims.play('turn');
                }
                if (player2.up.isDown && player2.body.touching.down && P2P1 == false) {
                    
                    player2.setVelocityY(-800); 
                     
                 }
                 if (P2P1 == true) {
                    tiempoParadoP2--;
                    if (tiempoParadoP2 != 0) {
                        if (player2.left.isDown) {
                            player2.anims.play('VO', true);
                        } else if (player2.right.isDown) {
                            player2.anims.play('VO', true);
                        } else {
                            player2.anims.play('VO', true);
    
                        } if (player2.up.isDown && player2.body.touching.down) {
                            player2.anims.play('VO', true);
                        }
                    } else {
                        tiempoParadoP2 = 150;
                        P2P1 = false;
    
                    }
                }     

                
            }
            if (colisionPowerUp2 && cuentaAtrasPowerUp) {
                tiempoPowerUp2--;
                if (tiempoPowerUp2 === 0) {
                    tiempoPowerUp2 = 250;
                    cuentaAtrasPowerUp = false;
                }
                //jugador 1
                if (cursors.left.isDown && P1P2 == false) {
                    player.setVelocityX(-180);

                    if (objetoCogido)
                        player.anims.play('leftWO', true);
                   
                    else
                        player.anims.play('left', true);
                }
                else if (cursors.right.isDown && P1P2 == false) {
                    player.setVelocityX(180);
                    if (objetoCogido)
                        player.anims.play('rightWO', true);
                        
                    else
                        player.anims.play('right', true);
                }
                else {
                    player.setVelocityX(0);

                    if (objetoCogido)
                        player.anims.play('turnWO');
                    
                    else
                        player.anims.play('turn');
                }
                if (cursors.up.isDown && player.body.touching.down && P1P2 == false) {
                    
                    player.setVelocityY(-800); 
                }
                if (P1P2 == true) {
                    tiempoParadoP1--;
                    if (tiempoParadoP1 > 0) {
                        if (cursors.left.isDown) {
                            player.anims.play('VO', true);
                        } else if (cursors.right.isDown) {
                            player.anims.play('VO', true);
                        } else {
                            player.anims.play('VO', true);
    
                        } if (cursors.up.isDown && player.body.touching.down) {
                            player.anims.play('VO', true);
                        }
                    } else {
                        tiempoParadoP1 = 150;
                        P1P2 = false;
    
                    }
    
                }     
                 
                //jugador 2
                if (player2.right.isDown && P2P1 == false) {

                    player2.setVelocityX(500);

                    if (objetoCogido2)
                        player2.anims.play('rightWO', true);
                    
                    else
                        player2.anims.play('right', true);

                } else if (player2.left.isDown && P2P1 == false) {

                    player2.setVelocityX(-500);

                    if (objetoCogido2)
                        player2.anims.play('leftWO', true);
                    
                    else
                        player2.anims.play('left', true);

                } else {

                    player2.setVelocityX(0);

                    if (objetoCogido2)
                        player2.anims.play('turnWO');
                    
                    else
                        player2.anims.play('turn');
                }
                if (player2.up.isDown && player2.body.touching.down && P2P1 == false) {
                    
                    player2.setVelocityY(-800); 
                }
                if (P2P1 == true) {
                    tiempoParadoP2--;
                    if (tiempoParadoP2 != 0) {
                        if (player2.left.isDown) {
                            player2.anims.play('VO', true);
                        } else if (player2.right.isDown) {
                            player2.anims.play('VO', true);
                        } else {
                            player2.anims.play('VO', true);
    
                        } if (player2.up.isDown && player2.body.touching.down) {
                            player2.anims.play('VO', true);
                        }
                    } else {
                        tiempoParadoP2 = 150;
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

                    if ( objetoCogido===false) {
                        player.anims.play('left', true);
                    }
                    
                    else if(objetoCogido)
                        player.anims.play('leftWO', true);

                }
                else if (cursors.right.isDown && P1P2 == false) {

                    player.setVelocityX(180);
                    if ( objetoCogido===false) {
                        player.anims.play('right', true);
                    }
                    
                    else if(objetoCogido)
                        player.anims.play('rightWO', true);

                }
                else {

                    player.setVelocityX(0);

                    if(objetoCogido)
                        player.anims.play('turnWO');
                    else 
                        player.anims.play('turn');

                    
                }
                if (cursors.up.isDown && player.body.touching.down && P1P2 == false) {
                    
                    player.setVelocityY(-800); 
                     
                }
                if (P1P2 == true) {
                    tiempoParadoP1--;
                    if (tiempoParadoP1 > 0) {
                        if (cursors.left.isDown) {
                            player.anims.play('VO', true);
                        } else if (cursors.right.isDown) {
                            player.anims.play('VO', true);
                        } else {
                            player.anims.play('VO', true);
    
                        } if (cursors.up.isDown && player.body.touching.down) {
                            player.anims.play('VO', true);
                        }
                    } else {
                        tiempoParadoP1 = 150;
                        P1P2 = false;
    
                    }
    
                }
                
                //jugador 2
                if (player2.right.isDown && P2P1 == false) {

                    player2.setVelocityX(180);

                    if ( !objetoCogido2) {
                        
                        player2.anims.play('right', true);
                    }
                    
                    else if(objetoCogido2)
                        player2.anims.play('rightWO', true);

                } else if (player2.left.isDown && P2P1 == false) {

                    player2.setVelocityX(-180);

                    if ( !objetoCogido2) {
                        player2.anims.play('left', true);
                    }
                    else if(objetoCogido2)
                        player2.anims.play('leftWO', true);
                    

                } else {
                    player2.setVelocityX(0);
                    if(objetoCogido2)
                        player2.anims.play('turnWO');
                    else 
                        player2.anims.play('turn');
                    
                } 
                if (player2.up.isDown && player2.body.touching.down && P2P1 == false) {
                    
                    player2.setVelocityY(-800); 
                     
                 }
                 if (P2P1 == true) {
                    tiempoParadoP2--;
                    if (tiempoParadoP2 != 0) {
                        if (player2.left.isDown) {
                            player2.anims.play('VO', true);
                        } else if (player2.right.isDown) {
                            player2.anims.play('VO', true);
                        } else {
                            player2.anims.play('VO', true);
    
                        } if (player2.up.isDown && player2.body.touching.down) {
                            player2.anims.play('VO', true);
                        }
                    } else {
                        tiempoParadoP2 = 150;
                        P2P1 = false;
    
                    }
                }
                
                
            }
        }
    
    
    render() {

        game.debug.text('Time until event: ' + timer.duration.toFixed(0), 32, 32);
        game.debug.text('Loop Count: ' + total, 32, 64);

    }
        
    
   
    
}