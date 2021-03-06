class Scene3 extends Phaser.Scene{
    constructor(){
        super("Juego");
    }
    
    preload () //precargamos recursos, en este caso, el fondo, la plataforma, los objetos, la musica, los sonidos y los sprites de 
               //las animaciones de los dos gatos
    {
        this.load.image('escenario1', '/Recursos/Interfaz/escenario1.jpg');
        this.load.image('escenario2', '/Recursos/Interfaz/escenario2.png');
        this.load.image('escenario3', '/Recursos/Interfaz/escenario3.png');
        this.load.image('plataforma', '/Recursos/Plataformas/plataforma.png');
        this.load.image('pescado', '/Recursos/Objetos/pescado.png');
        this.load.image('ovillo', '/Recursos/Objetos/ovillo.png');
        this.load.image('rata', '/Recursos/Objetos/rata.png');
        this.load.image('lata', '/Recursos/Objetos/lata.png');
        this.load.audio('juego',['/Recursos/Musica/juego.mp3', '/Recursos/Musica/juego.ogg']);
        this.load.audio('aplastado',['/Recursos/Sonidos/aplastado.mp3', '/Recursos/Sonidos/aplastado.ogg']);
        this.load.audio('objeto',['/Recursos/Sonidos/objeto.mp3', '/Recursos/Sonidos/objeto.ogg']);
        this.load.audio('powerUp',['/Recursos/Sonidos/powerUp.mp3', '/Recursos/Sonidos/powerUp.ogg']);
        this.load.audio('cuentaAtras',['/Recursos/Sonidos/cuentaAtras.mp3', '/Recursos/Sonidos/cuentaAtras.ogg']);
        
        this.load.spritesheet('Muffin', '/Recursos/Personajes/Muffin.png',
        { frameWidth: 64, frameHeight: 54 } 
        );
        this.load.spritesheet('Mungojerry', '/Recursos/Personajes/Mungojerry.png',
        { frameWidth: 64, frameHeight: 54 } 
        );
        this.load.spritesheet('nieve', '/Recursos/Interfaz/nevando.png',
        { frameWidth: 800, frameHeight: 600 } 
        );
    }

    create ()
    { 
    	escenaActual = this;
    	jugador.enSala=false;
        musica=this.sound.add('juego');//añadimos la música al juego
        sonidoObjeto=this.sound.add('objeto');//añadimos el sonido que sonará al coger el objeto
        sonidoAplastado=this.sound.add('aplastado');//añadimos el sonido que sonará al aplastar a un gato
        sonidoPowerUp=this.sound.add('powerUp');//añadimos el sonido que sonará al coger el power up
        sonidoCuentaAtras=this.sound.add('cuentaAtras');//añadimos el sonido de la cuenta atrás
        musica.setLoop(true);//hacemos que la música del juego suene en bucle
        musica.play();//hacemos que suene la música
      
        
        plataformas = this.physics.add.staticGroup(); //crea un nuevo grupo de elementos estáticos y lo asigna a la variable plataformas
      //hemos creado plataformas con el alpha a 0 para que fuesen invisibles pero cumpliesen su función de colisionar con el jugador
        if(escenarioUno){
        	this.add.image(400, 300, 'escenario1');//añadimos el fondo del juego
        	
        	//plataformas propias del escenario
        	plataformas.create(120, 240, 'plataforma').setScale(0.25, 0.1).refreshBody().setAlpha(0);//farola
            plataformas.create(120, 50, 'plataforma').setScale(0.25, 0.1).refreshBody().setAlpha(0);//ventilador superior
            plataformas.create(640, 190, 'plataforma').setScale(0.33, 0.1).refreshBody().setAlpha(0);//venta derecha
            plataformas.create(340, 190, 'plataforma').setScale(0.33, 0.1).refreshBody().setAlpha(0);//ventana izquierda superior
            plataformas.create(339, 367, 'plataforma').setScale(0.33, 0.1).refreshBody().setAlpha(0);//ventana izquierda inferior
            plataformas.create(512, 347, 'plataforma').setScale(0.23, 0.1).refreshBody().setAlpha(0);//ventilador inferior
            plataformas.create(640, 480, 'plataforma').setScale(0.5, 0.1).refreshBody().setAlpha(0);//basura
            plataformas.create(90, 480, 'plataforma').setScale(0.3, 0.1).refreshBody().setAlpha(0);//coche
            plataformas.create(180, 520, 'plataforma').setScale(0.2, 0.1).refreshBody().setAlpha(0);//coche
        }
        else if(escenarioDos){
        	this.add.image(400, 300, 'escenario2');
        	//plataformas propias del escenario
        	plataformas.create(95, 225, 'plataforma').setScale(0.20, 0.1).refreshBody().setAlpha(0);//chimenea
            plataformas.create(480, 165, 'plataforma').setScale(0.27, 0.1).refreshBody().setAlpha(0);//antena arriba
            plataformas.create(650, 315, 'plataforma').setScale(0.5, 0.1).refreshBody().setAlpha(0);//bordillo arriba
            plataformas.create(360, 310, 'plataforma').setScale(0.27, 0.1).refreshBody().setAlpha(0);//antena abajo
            plataformas.create(155, 430, 'plataforma').setScale(0.55, 0.1).refreshBody().setAlpha(0);//bordillo abajo izq
            plataformas.create(570, 495, 'plataforma').setScale(0.5, 0.1).refreshBody().setAlpha(0);//bodillo abajo derecha
            
            nieve=this.physics.add.sprite(400,300,'nieve');
            nieve.setCollideWorldBounds(true);
        }
        else if(escenarioTres){
        	this.add.image(400, 300, 'escenario3');
        	//plataformas propias del escenario
        	plataformas.create(190, 247, 'plataforma').setScale(0.25, 0.1).refreshBody().setAlpha(0);//arriba izquierda
            plataformas.create(410, 125, 'plataforma').setScale(0.70, 0.1).refreshBody().setAlpha(0);//arriba
            plataformas.create(609, 247, 'plataforma').setScale(0.25, 0.1).refreshBody().setAlpha(0);//arriba derecha
            plataformas.create(280, 353, 'plataforma').setScale(0.07, 0.1).refreshBody().setAlpha(0);//columna izquierda
            plataformas.create(530, 353, 'plataforma').setScale(0.07, 0.1).refreshBody().setAlpha(0);//columna derecha
            plataformas.create(205, 465, 'plataforma').setScale(0.7, 0.1).refreshBody().setAlpha(0);//abajo izquierda
            plataformas.create(610, 465, 'plataforma').setScale(0.75, 0.1).refreshBody().setAlpha(0);//abajo derecha
            plataformas.create(35, 1, 'plataforma').setScale(0.15, 200).refreshBody().setAlpha(0); //pared izquierda
        }
        
        if(escenarioUno || escenarioDos){
        	//imprimimos el tiempo por pantalla en blanco
            info = this.add.text(640, 15, '', {font:"30px Agency FB bold", fill:"White"});
            textoPausa = this.add.text(40,15,"Pausa",{font:"30px Agency FB bold", fill:"#FFFF33"}); //cremos el botón de pausa con texto blanco
        }
        	
        else if(escenarioTres){
        	//imprimimos el tiempo por pantalla en negro
            info = this.add.text(640, 15, '', {font:"30px Agency FB bold", fill:"Black"});
            textoPausa = this.add.text(40,15,"Pausa",{font:"30px Agency FB bold", fill:"#CC0033"}); //boton de pausa negro 
        }
        const botonPausa=textoPausa;
        botonPausa.setInteractive();
        //cuando le damos cambiamos a la escena de pausa, paramos la música y esta escena
        botonPausa.on('pointerdown', () => { musica.pause(); this.scene.launch("Pausa"); sonidoCuentaAtras.pause();}); 
        botonPausa.on('pointerout', () => {
        	if(escenarioTres) //en el escenario 3 la letra del pausa en estado normal es roja
        		this.add.text(40,15,"Pausa",{font:"30px Agency FB bold", fill:"#CC0033"}); 
        	else //en los escenarios 1 y 2 la letra del pausa en estado normal es amarilla
        		this.add.text(40,15,"Pausa",{font:"30px Agency FB bold", fill:"#FFFF33"}); 
        });
        botonPausa.on('pointerover', () => {this.add.text(40,15,"Pausa",{font:"30px Agency FB bold", fill:"#FF0066"});}); 
        
        //plataformas generales(suelo y paredes)
        plataformas.create(400, 600, 'plataforma').setScale(2, 0.70).refreshBody().setAlpha(0); //cargarmos la imagen multiplicando por 2 
                                                                                                //su tamaño, esta plataforma es la del suelo
        plataformas.create(1, 1, 'plataforma').setScale(0.15, 200).refreshBody().setAlpha(0); //cargarmos la imagen multiplicando por 2 su 
                                                                                              //tamaño, esta plataforma es la pared izquierda
        plataformas.create(800, 800, 'plataforma').setScale(0.15, 200).refreshBody().setAlpha(0);//pared derecha

        //Creación del personaje
        player = this.physics.add.sprite(734, 560, 'Muffin'); //creación de un sprite con físicas
        this.physics.add.collider(player, plataformas);// añadimos las fisicas al choque
        //player.body.checkCollision.up=false; practica 2
        player2 = this.physics.add.sprite(100, 560, 'Mungojerry'); //creación de un sprite con físicas
        this.physics.add.collider(player2, plataformas);//añadimos las fisicas al choque
        //player2.body.checkCollision.up=false; practica2
        this.physics.add.collider(player2, player, this.touchPlayer);//añadimos las fisicas cuando se chocan los personajes
        player.setCollideWorldBounds(true);// para no salirse del mapa
        player.body.setGravityY(700);//incorporamos la gravedad al gato1
        // hacemos lo mismo para el gato2
        player2.setCollideWorldBounds(true);
        player2.body.setGravityY(700);

        //PLAYER 1 animaciones -----------------------------------------------------------------------------------------
        //animaciones sin objeto
        //cuando va hacia la izquierda
        this.anims.create({
            key: 'leftplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Muffin', { start: 0, end: 7 }),// frames que utilziamos para la animacion
            frameRate: 20,//velocidad de la animación
            repeat: -1 //volver a empezar cuando termine
        });
        //cuando está quieto
        this.anims.create({
            key: 'turnplayer',
            frames: [ { key: 'Muffin', frame: 32 } ],
            frameRate: 1
        });
        //cuando va hacia la derecha
        this.anims.create({
            key: 'rightplayer',
            frames: this.anims.generateFrameNumbers('Muffin', { start: 56, end: 63 }),
            frameRate: 20,
            repeat: -1
        });
        //animaciones jugador 1 con ovillo
        this.anims.create({
            key: 'ovilloleftplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Muffin', { start: 8, end: 15 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'ovillorightplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Muffin', { start: 64, end: 71 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'ovilloturnplayer', //nombre de la animación
            frames: [ { key: 'Muffin', frame: 8 } ],
            frameRate: 1
        });
        //animaciones jugador 1 con pescado
        this.anims.create({
            key: 'pescadoleftplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Muffin', { start: 16, end: 23 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'pescadorightplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Muffin', { start: 72, end: 79 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'pescadoturnplayer', //nombre de la animación
            frames: [ { key: 'Muffin', frame: 16 } ],
            frameRate: 1
        });
        //animaciones jugador 1 con rata
        this.anims.create({
            key: 'rataleftplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Muffin', { start: 24, end: 31 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'ratarightplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Muffin', { start: 80, end: 87 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'rataturnplayer', //nombre de la animación
            frames: [ { key: 'Muffin', frame: 24 } ],
            frameRate: 1
        });
        //vómito jugador 1 animación 
        this.anims.create({
            key: 'VOplayer', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Muffin', { start: 32, end: 55 }),
            frameRate: 20,
            repeat: 1 
        });

        //PLAYER 2 animaciones-------------------------------------------------------------------------------------
        //izquierda, quieto y derecha
        this.anims.create({
            key: 'leftplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Mungojerry', { start: 0, end: 7 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });

        this.anims.create({
            key: 'turnplayer2',
            frames: [ { key: 'Mungojerry', frame: 32 } ],
            frameRate: 1
        });

        this.anims.create({
            key: 'rightplayer2',
            frames: this.anims.generateFrameNumbers('Mungojerry', { start: 56, end: 63 }),
            frameRate: 20,
            repeat: -1
        });

        //animaciones jugador 2 con ovillo
        this.anims.create({
            key: 'ovilloleftplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Mungojerry', { start: 8, end: 15 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'ovillorightplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Mungojerry', { start: 64, end: 71 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'ovilloturnplayer2', //nombre de la animación
            frames: [ { key: 'Mungojerry', frame: 8 } ],
            frameRate: 1
        });
        //animaciones jugador 2 con pescado
        this.anims.create({
            key: 'pescadoleftplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Mungojerry', { start: 16, end: 23 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'pescadorightplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Mungojerry', { start: 72, end: 79 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'pescadoturnplayer2', //nombre de la animación
            frames: [ { key: 'Mungojerry', frame: 16 } ],
            frameRate: 1
        });
        //animaciones jugador 2 con rata
        this.anims.create({
            key: 'rataleftplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Mungojerry', { start: 24, end: 31 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'ratarightplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Mungojerry', { start: 80, end: 87 }),
            frameRate: 20,
            repeat: -1 //volver a empezar cuando termine
        });
        this.anims.create({
            key: 'rataturnplayer2', //nombre de la animación
            frames: [ { key: 'Mungojerry', frame: 24 } ],
            frameRate: 1
        });
        // vomito animacion jugador 2
        this.anims.create({
            key: 'VOplayer2', //nombre de la animación
            frames: this.anims.generateFrameNumbers('Mungojerry', { start: 88, end: 111 }),
            frameRate: 20,
            repeat: 1 
        });
        //NIEVE
        this.anims.create({
            key: 'nieve', //nombre de la animación
            frames: this.anims.generateFrameNumbers('nieve', { start: 0, end: 47}),// frames que utilziamos para la animacion
            frameRate: 10,//velocidad de la animación
            repeat: -1 //volver a empezar cuando termine
        });
        //FIN ANIMACIONES--------------------------------------------------------------------

        objeto= this.physics.add.staticGroup(); //objeto por el que lucharán
        objetoPowerUp1= this.physics.add.staticGroup(); //power up
        objetoPowerUp2= this.physics.add.staticGroup();
        
        //Generamos el objeto en el centro de la pantalla
        //dependiendo del escenario elegido el objeto principal tiene una posición asignada 
        if(escenarioUno)
        	objeto.create(340, 175, objetoAleatorio);
        else if(escenarioDos)
        	objeto.create(480, 140, objetoAleatorio);
        else if(escenarioTres)
        	objeto.create(400, 105, objetoAleatorio);

        //colision con los objetos
        this.physics.add.overlap(player, objeto, this.collectObject, null, this);
        this.physics.add.overlap(player2, objeto, this.collectObject2, null, this);

        //controlador de movimientod el personaje
        cursors = this.input.keyboard.createCursorKeys();

        
        //llamamos a la funcion hitplayer cada vez que player2 salte sobre player uno y a la inversa
        this.physics.add.overlap(player, player2, this.hitPlayer, null, this);
        this.physics.add.overlap(player2, player, this.hitPlayer, null, this);
        
        if(escenarioDos){//si el  escenario seleccionado ha sido el dos, se activa la animación de la nieve
        	nieve.anims.play("nieve",true);
        }
        
        timer = this.time.addEvent({ delay: 45000, callback: this.gameOver, callbackScope: this });

       //var textoPantalla =this.add.text(570, 10, GETservidor(), {font:"20px Courier", fill:"white"});
        
    }

    //función de acabar el juego. Al terminar, dependiendo de quién tenga el objeto al final de la partida, el juego lleva a la escena del 
    //ganador correspondiente. Si ningún jugador coge el objeto el juego vuelve al menú. Además, volvemos a inicializar las variables para
    //la próxima partida
    gameOver ()
    {   
    	DELETEservidor(jugador);
        musica.stop();
        if(objetoCogido)
        	ganadorUno=true;
        else if(objetoCogido2)
        	ganadorDos=true;
        else if(!objetoCogido && !objetoCogido2)
        	empate=true;

        this.scene.start("Fin");
        
    }

    //esta función se usa para detectar la colisión entre el objeto y el jugador 1
    collectObject (player, objetoAleatorio)
    {
        sonidoObjeto.play();//suena el sonido de cuando coges el objeto
        objetoAleatorio.disableBody(true, true);// cuando toca el objeto desaparece
        objetoCogido=true;//esta variable se pone a true cuando el jugador 1 tiene el objeto

    }
    //esta función se usa para detectar la colisión entre el objeto y el jugador 2
    collectObject2 (player, objetoAleatorio)
    {
        sonidoObjeto.play();//suena el sonido de cuando coges el objeto
        objetoAleatorio.disableBody(true, true);// cuando toca el objeto desaparece
        objetoCogido2=true;//esta variable se pone a true cuando el jugador 1 tiene el objeto
    }
    //esta función se usa para detectar la colisión entre el powerUp y el jugador 1
    colectPowerUp1(player, lata) {
        sonidoPowerUp.play();//activamos el sonido de cuando el jugador coge el power up
        lata.disableBody(true, true); // cuando toca el objeto desaparece
        colisionPowerUp = true;//esta variable se activa para detectar que el jugador 1 tiene el power up
        cuentaAtrasPowerUp = true;//esta variable se usa para gestionar el tiempo en el que está activo el power up
    }
    //esta función se usa para detectar la colisión entre el powerUp y el jugador 2
    colectPowerUp2(player, lata) {
        sonidoPowerUp.play();//activamos el sonido de cuando el jugador coge el power up
        lata.disableBody(true, true); // cuando toca el objeto desaparece
        colisionPowerUp2 = true;//esta variable se activa para detectar que el jugador 2 tiene el power up
        cuentaAtrasPowerUp = true;//esta variable se usa para gestionar el tiempo en el que está activo el power up

    }
    //Esta función se usa cuando los jugadores se pisan el uno al otro.  En este momento se activa un sonido y una variable (cuentaAtrasParadoP1)
    //que hace que el jugador que ha sido aplastado no se pueda mover durante unos segundos.También se activa otra variable(P2P1 o P1P2)
    //que sirve para saber qué jugador ha sido aplastado
    hitPlayer(player, player2) {
    	
        if (player.body.touching.up && player2.body.velocity.y>0) { 
            sonidoAplastado.play();
            cuentaAtrasParadoP1 = true;
            P2P1 = true;
            cuentaAtrasParadoP2 = false;
            
            P1P2 = false;

        }
        ////console.log(player.body.velocity.y);
        if(player2.body.touching.up && player.body.velocity.y>0){
            sonidoAplastado.play();
            cuentaAtrasParadoP2 = true;
            P1P2 = true;
            cuentaAtrasParadoP1 = false;
            P2P1 = false;
        }


    }
    //Esta función se usa cuando un jugador toca a otro. En este momento, si el jugador 1 tiene el objeto, si ha pasado un tiempo desde que se 
    //activó, se desactiva y se activa la del jugador contrario, pasándole el objeto. Además se activa el sonido de coger objeto. En el caso
    //del jugador 2 funciona igual.
    touchPlayer() { 
    	
        if(objetoCogido)
        {
        	//console.log("hola jugador 2 se lo quita al 1");
        	//if(cursors.left.isDown || cursors.right.isDown){
            if(tiempoEspera>70){
                sonidoObjeto.play();//suena el sonido de cuando coges el objeto
                tiempoEspera=0;
                //console.log("muffin pasa objeto");
                objetoCogido=false;
                objetoCogido2=true;
            }
            
        }
        else if (objetoCogido2)
        {
        	//console.log("hola jugador 1 se lo quita al 2");
        	//if(cursors.left.isDown || cursors.right.isDown){
            if(tiempoEspera>70){
                sonidoObjeto.play();//suena el sonido de cuando coges el objeto
                tiempoEspera=0;
                //console.log("mungojerry pasa objeto");
                //console.log();
                objetoCogido=true;
                objetoCogido2=false;
            }
        }
    }
    //A continuación comienza la función update que se ejecuta en bucle
    update (time, delta) {
    	console.log(jugador.idEmparejado);
    	////console.log("Objeto jugador 1"+objetoCogido);
    	////console.log("Objeto jugador 2"+objetoCogido2);
    		connection.onopen = function () {
    	      connection.send('Hi');
    	    }

    	    connection.onerror = function(e) {

	        	desdeJuego=true;
	        	musica.stop();
	        	
	        	escenaActual.scene.start("Mensaje");
    	    }
    	      
    	    connection.onclose = function(e) {
    	    	
    	    	
	        	desdeJuego=true;
	        	musica.stop();
	        	escenaActual.scene.start("Mensaje");
    	    }
    	    connection.onmessage = function(msg) {
    	        //////console.log("WS message: " + msg.data);
    	    	
    	        var aux = JSON.parse(msg.data);
    	        if(aux.fueraSala){
    	        
    	        	desdeJuego=true;
    	        	musica.stop();
    	        	escenaActual.scene.start("Mensaje");
    	        	
    	        }
    	        if(jugador.nombreDelGato =='Muffin') { 
    	          player2.x = aux.posX;
    	          player2.y = aux.posY;
    	          player2.anims.play(aux.animacion, true);
    	          //objetoCogido2=aux.objeto;
    	        }
    	        else{
    	          player.x = aux.posX;
    	          player.y = aux.posY;
    	          player.anims.play(aux.animacion, true);
    	          //objetoCogido=aux.objeto;
    	        }
    	        ////console.log("Animacion recibida: "+aux.animacion);

    	        }
    	
    		if(jugador.nombreDelGato=='Muffin') { 
    			jugador.posX = player.x;
    			jugador.posY = player.y;
    		}
    		else{
    			jugador.posX = player2.x;
    			jugador.posY = player2.y;
    		}
    		if(jugador.fueraSala==true){
    			
    			this.gameOver();
    			DELETEservidor(jugador);
    			 
    		}
    		GETservidor();
    		PUTservidor(jugador);
    		connection.send(JSON.stringify(jugador));
    		tiempoEspera++;
            time*=delta;//para que el tiempo no dependa de la máquina que compila este código
            //console.log(time);
            //actualizamos el tiempo, dividmmos entre mil para que salga en segundos
            tiempo = Math.round(Math.floor(45000 - timer.getElapsed()) / 1000);
            
            if(tiempo===10)//si quedan 10 segundos de partida, se activa el sonido de la cuenta atrás
                sonidoCuentaAtras.play();
            
            //Cuando el tiempo que queda es igual al random en el que aparece el power up 2
            if (tiempo===generarPowerUp1) {
                generarPowerUp1=130;
                //dependiendo del escenario elegido el primer power up tiene una posición asignada
                if(escenarioUno)
                	objetoPowerUp1.create(640,170, "lata");
                else if(escenarioDos)
                	objetoPowerUp1.create(155,405, "lata");
                else if(escenarioTres)
                	objetoPowerUp1.create(609,225, "lata");
                
                this.physics.add.overlap(player, objetoPowerUp1, this.colectPowerUp1, null, this);
                this.physics.add.overlap(player2, objetoPowerUp1, this.colectPowerUp2, null, this);
            }
            //si tiempo es igual al momento que hemos elegido para destruir el primer power up, lo movemos fuera de la pantalla
            if(tiempo<destruir){
                objetoPowerUp1.clear(true);
            }
            //Cuando el tiempo que queda es igual al random en el que aparece el power up 2
            if (tiempo === generarPowerUp2) {
                generarPowerUp2 = 130;
              //dependiendo del escenario elegido el segundo power up tiene una posición asignada
                if(escenarioUno)
                	objetoPowerUp2.create(339, 350, "lata");
                else if(escenarioDos)
                	objetoPowerUp2.create(650, 295, "lata");
                else if(escenarioTres)
                	objetoPowerUp2.create(280, 330, "lata");
                
                this.physics.add.overlap(player, objetoPowerUp2, this.colectPowerUp1, null, this);
                this.physics.add.overlap(player2, objetoPowerUp2, this.colectPowerUp2, null, this);
            }

            //para mostrar el temporizador
            info.setText('Tiempo: ' + tiempo);

            //Si el jugador 1 coge el power up y aún no se ha acabado el tiempo de duración de este, el personaje se mueve más rápido
            if (colisionPowerUp && cuentaAtrasPowerUp) {
                musica.setRate(1.2);//la música se acelera
                tiempoPowerUp--;//el tiempo de power up disminuye
                if (tiempoPowerUp === 0) {//si el tiempo de power up es 0, la cuenta atras se pone a false y ya no volverá a entrar el if de arriba
                    cuentaAtrasPowerUp = false;
                    musica.setRate(1.0);//la música vuelve a su velocidad normal
                }
                if(jugador.nombreDelGato=='Muffin'){
	                //jugador 1
	                if (cursors.left.isDown && P1P2 == false) {//si pulsamos la tecla para ir a la izquierda y no ha sido aplastado el personaje se mueve 
	                                                        //en ese sentido y se activa la animación correspondiente
	                    player.setVelocityX(-300);
	                    this.animacion(player,'player','left',objetoCogido);
	                }
	                else if (cursors.right.isDown && P1P2 == false) {//si pulsamos la tecla para ir a la derecha y no ha sido aplastado el personaje se mueve 
	                                                                //en ese sentido y se activa la animación correspondiente
	                    player.setVelocityX(300);
	                    this.animacion(player,'player','right',objetoCogido);
	                }
	                else if(!P1P2) {//si no pulsamos nignua tecla y no ha sido aplastado el personaje se mueve se activa el sprite de quieto
	                    player.setVelocityX(0);
	                    this.animacion(player,'player','turn',objetoCogido);
	                }
	                if (cursors.up.isDown && player.body.touching.down && P1P2 == false) {//si pulsamos la tecla para saltar, está en el suelo y no ha sido 
	                                                                                    //aplastado el personaje salta
	                   player.setVelocityY(-600); 
	                }
	                if (P1P2 == true) {//si el jugador 1 ha sido aplastado, el tiempo de estar parado disminuye. Si el tiempo es mayor que 0 
	                                   //se activa la animación de vomitar. Si no, se setea el tiempo a 50 y la variable vuelve a false
	                    tiempoParadoP1--;
	                    if (tiempoParadoP1 > 0) {
	                        this.animacion(player,'player','VO',objetoCogido2);
	                        
	                    } else {
	                        tiempoParadoP1 = 80;
	                        P1P2 = false;
	                    }
	                }
            	}
                if(jugador.nombreDelGato=='Mungojerry'){
	                //jugador 2, igual que en el jugador 1
	                if (cursors.right.isDown && P2P1 == false) {
	
	                    player2.setVelocityX(180);
	                    this.animacion(player2,'player2','right',objetoCogido2);
	
	                } else if (cursors.left.isDown && P2P1 == false) {
	
	                    player2.setVelocityX(-180);
	                    this.animacion(player2,'player2','left',objetoCogido2);
	
	                } else if(!P2P1) {
	
	                    player2.setVelocityX(0);
	                    this.animacion(player2,'player2','turn',objetoCogido2);
	                }
	                if (cursors.up.isDown && player2.body.touching.down && P2P1 == false) {
	                    
	                    player2.setVelocityY(-600); 
	                     
	                 }
	                if (P2P1 == true) {
	                    tiempoParadoP2--;
	                    if (tiempoParadoP2 != 0) {
	                        this.animacion(player2,'player2','VO',objetoCogido2);
	                    } else {
	                        tiempoParadoP2 = 80;
	                        P2P1 = false;
	    
	                    }
	                }
                }
            }
            //Si el jugador 2 coge el power up y aún no se ha acabado el tiempo de duración de este, el jugador se mueve más rápido. Todo
            //funciona igual que en el if anterior
            if (colisionPowerUp2 && cuentaAtrasPowerUp) {
                tiempoPowerUp2--;
                musica.setRate(1.2);
                if (tiempoPowerUp2 === 0) {
                    cuentaAtrasPowerUp = false;
                    musica.setRate(1.0);
                }
                if(jugador.nombreDelGato=='Muffin'){
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
	                        tiempoParadoP1 = 80;
	                        P1P2 = false;
	    
	                    }
	                }    
                }
                if(jugador.nombreDelGato=='Mungojerry'){
	                //jugador 2
	                if (cursors.right.isDown && P2P1 == false) {
	
	                    player2.setVelocityX(300);
	                    this.animacion(player2,'player2','right',objetoCogido2);
	
	                } else if (cursors.left.isDown && P2P1 == false) {
	
	                    player2.setVelocityX(-300);
	                    this.animacion(player2,'player2','left',objetoCogido2);
	
	                } else if(!P2P1) {
	
	                    player2.setVelocityX(0);
	                    this.animacion(player2,'player2','turn',objetoCogido2);
	                }
	                if (cursors.up.isDown && player2.body.touching.down && P2P1 == false) {
	                    
	                    player2.setVelocityY(-600); 
	                }
	                if (P2P1 == true) {
	                    tiempoParadoP2--;
	                    if (tiempoParadoP2 != 0) {
	                        this.animacion(player2,'player2','VO',objetoCogido2);
	                        
	                    } else {
	                        tiempoParadoP2 = 80;
	                        P2P1 = false;
	    
	                    }
	                }    
	              }
            }
            //Si no ha cogido el Powerup o ya se ha acabado su efecto, el jugador se mueve a velocidad "normal"
            else if ((!colisionPowerUp && !colisionPowerUp2) || !cuentaAtrasPowerUp) {

            	if(jugador.nombreDelGato=='Muffin'){
	                //jugador 1, igual que en la primera explicación
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
	                        tiempoParadoP1 = 80;
	                        P1P2 = false;
	    
	                    }
	    
	                }
            	}
	            	if(jugador.nombreDelGato=='Mungojerry'){
	                //jugador 2 igual que en la primera explicación
	                if (cursors.right.isDown && P2P1 == false) {
	
	                    player2.setVelocityX(180);
	                    this.animacion(player2,'player2','right',objetoCogido2);
	
	                } else if (cursors.left.isDown && P2P1 == false) {
	
	                    player2.setVelocityX(-180);
	                    this.animacion(player2,'player2','left',objetoCogido2);
	
	                } else if(!P2P1) {
	                    player2.setVelocityX(0);
	                    this.animacion(player2,'player2','turn',objetoCogido2);
	                    
	                } 
	                if (cursors.up.isDown && player2.body.touching.down && P2P1 == false) {
	                    
	                    player2.setVelocityY(-600); 
	                     
	                 }
	                 if (P2P1 == true) {
	                    tiempoParadoP2--;
	                    if (tiempoParadoP2 != 0) {
	                        this.animacion(player2,'player2','VO',objetoCogido2);
	                    } else {
	                        tiempoParadoP2 = 80;
	                        P2P1 = false;
	    
	                    }
	                }
	             }
	          }
        }
    //esta función se usa para activar la animación correspondiente. Si el jugador tiene el objeto y no debe vomitar, el nombre de la animación
    //que cargaremos estará formado por el objeto que posee, la direccion en la que va y el nombre del jugador. Si no tiene el objeto o debe
    //vomitar, el nombre estará formado por la direccion(o VO, de vómmito) y el nombre del jugador
    animacion(jugadorAnimacion,nombre, direccion, objetocog){
 
        anim=objetoAleatorio+direccion+nombre;
        if (objetocog && direccion!='VO'){
            jugadorAnimacion.anims.play(anim, true);
            nombreAnimacion = jugadorAnimacion.anims.currentAnim.key;
            jugador.animacion = nombreAnimacion;
        }
        else if(!objetocog || direccion=='VO'){
            jugadorAnimacion.anims.play(direccion+nombre, true);
        	nombreAnimacion = jugadorAnimacion.anims.currentAnim.key;
        	//console.log(jugadorAnimacion.anims.currentAnim.key);
        	jugador.animacion = nombreAnimacion;
        }
    }
}