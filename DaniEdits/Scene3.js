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
    
        
    
    preload ()
                {
                    this.load.image('sky','assets/sky.png');
                    this.load.image('ground','assets/platform.png');
                    this.load.image('star','assets/star.png');
                    this.load.image('bomb','assets/bomb.png');

                    this.load.spritesheet('dude','assets/dude.png', {frameWidth: 32,frameHeight: 48} );
                }
                
                

    create ()
        {
            //Las imagenes se muestran en el orden que se declaran, superponiendose entre si
            this.add.image(400, 300, 'sky'); //(posicionX,posicionY,id)
            //Las imagenes estan por defecto en el 0,0 de la pantalla, y el 0,0 de la foto se sitúa en el medio de la propia imagen.
            this.add.image(0,16,'star').setOrigin(0,0);
            //Otra opcion es cambiar el origen de la imagen a la coordenada que elijamos con setOrigin(x,y)
            
            platforms = this.physics.add.staticGroup(); //Crea  un grupo de elementos estaticos con físicas y lo asigna a la variable platforms
            //Existen objetos dinamicos y estáticos (dentro de las fisicas arcade)
            //Los estáticos no se ven influenciados por la gravedad, ni se les puede añadir velocidad ni reaccionan a los choques.
            //Al incluirlos en un grupo, podemos controlarlos como uno solo o comprobar las colisiopnes entre grupos.

            platforms.create(400,568,'ground').setScale(2).refreshBody();
            //Con setSacale(2) indicamos que hemos duplicado el tamaño del objeto
            //refreshBody() avisa al sistema de físicas de que se han hecho modificaciones sobre un cuerpo estático.

            platforms.create(600,400,'ground');
            platforms.create(50,250,'ground');
            platforms.create(750,220,'ground');

            //------------------
            //      PLAYER
            //------------------
            player = this.physics.add.sprite(100,450,'dude');
            //player es un objeto con físicas dinámicas.
            player.body.setGravityY(500); //Controlamos manualmente la gravedad de un objeto dinamico
            player.setBounce(0.2); //Aplica un ligero valor de rebote inicial
            player.setCollideWorldBounds(true); //Colision con los limites del juego

            this.anims.create({
                key:'left', //nombre de la animacion
                frames: this.anims.generateFrameNumbers('dude',{start:0,end:3}), //utilizará los frames del 0 al 3
                frameRate: 10,
                repeat: -1 //al terminar volverá a empezar
            });

            this.anims.create({
                key:'turn',
                frames: [ {key: 'dude', frame: 4}],
                frameRate: 20
            });

            this.anims.create({
                key:'right', //nombre de la animacion
                frames: this.anims.generateFrameNumbers('dude',{start:5,end:8}),
                frameRate: 10,
                repeat: -1
            });


            //--------------------
            //      CURSORS
            //--------------------

            cursors = this.input.keyboard.createCursorKeys();
            //Crea 4 propiedades en cursors asociado a las 4 direcciones
            //Para comprobar si se pulsan, utilizamos el update
            this.physics.add.collider(player,platforms);

            //--------------------
            //        STARS
            //--------------------
            stars = this.physics.add.group({
                key: 'star', //Textura que se le asignara a cada objeto del grupo
                repeat: 11, //Numero de veces que se repiten (habra 11 e escena)
                setXY:{ x:12, y:0, stepX: 70} //Variacion en la posicion de las estrellas
            });

            stars.children.iterate(function(child){ //Recorre todos los elementos del grupo y asigne un valor ded rebote aleatorio entre 0.4 y 0.8
                child.setBounceY(Phaser.Math.FloatBetween(0.4,0.8));
            });
            this.physics.add.collider(stars,platforms); //Collider entre estrellas y plataformas
            this.physics.add.overlap(player,stars,this.collectStar,null,this);

            //----------------------
            //      SCORE TEXT
            //----------------------

            scoreText = this.add.text(25,15,'0',{fontSize:'32px',fill:'#000'});
            //Al no especificar fuente, Phaser utiliza Courier


        }

    update()
        {
                    
            if(cursors.left.isDown){
                
                player.setVelocityX(-160);
                player.anims.play('left',true);
            }
            else if(cursors.right.isDown){
                player.setVelocityX(160);
                player.anims.play('right',true);
            }
            else{
                player.setVelocityX(0);
                player.anims.play('turn');
            }

            if(cursors.up.isDown && player.body.touching.down){
                player.setVelocityY(-550);
            }
                    

        }

    collectStar(player, star)
        {
            star.disableBody(true,true)
            score += 1;
            scoreText.setText(score);
        }
    
    
}