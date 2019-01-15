let atlas = scorpion;
// this.player1 = new Player1;
// this.player2 = new Player2;
class Render{
    constructor(){
        // this.player = player;
        this.player1 = new Player1;
        this.player2 = new Player2;
        this.index = 0;
        this.frameCount = 0;
        this.atlases=[];
        this.loadAtlas('scorpion','img/player/scorpion.png');
    }

    draw(){
        ctx.clearRect(0, 0,width, height);
        // this.show(player);
        // this.move(player);
        // this.attack();

        // document.addEventListener('keydown', (e) => {
        //     if (e.keyCode == 37) {
        //         this.player1.view = this.player1.dir  = -1;
        //         this.player1.runOn = true;
        //     } else if (e.keyCode == 39) {
        //         this.player1.view = this.player1.dir  = 1;
        //         this.player1.runOn = true;
        //     }else if (e.keyCode == 65) {
        //         this.player2.view = this.player2.dir  = -1;
        //         this.player2.runOn = true;
        //     }else if (e.keyCode == 68) {
        //         this.player2.view = this.player2.dir  = 1;
        //         this.player2.runOn = true;
        //     }
        // });

        // document.addEventListener('keyup', (e) => {
        //     if (e.keyCode == 37 || e.keyCode == 39 ) {
        //         this.player1.dir = 0;
        //         this.player1.runOn = false;
        //     }
        //     if(e.keyCode == 65 || e.keyCode == 68){
        //         this.player2.dir = 0;
        //         this.player2.runOn = false;
        //     }
        // });

        this.show(this.player1);
        this.show(this.player2);
        this.move(this.player1);
        this.move(this.player2);
    }

    show(player){
        if(player.state !== player.lastState){
            this.index = 0;
            player.lastState = player.state;
        }
        let spr = atlas[player.state];
        if(this.frameCount>spr.length){
            this.frameCount = 0;
            if (this.index + 1 === spr.length){
                this.animeStop = true;//переделать
            }
            this.index = (this.index + 1) % spr.length;
        }
        let a = spr[this.index].frame;
        this.w = a.w*2;
        this.h = a.h*2;
        if(player.view === -1){
            ctx.save();
            ctx.scale(-1, 1);
            ctx.drawImage(this.atlases['scorpion'], a.x, a.y, a.w, a.h,
            -player.x-this.w, player.y, this.w, this.h );
            ctx.restore();
        }else {
            ctx.drawImage(this.atlases['scorpion'], a.x, a.y, a.w, a.h,
            player.x, player.y, this.w, this.h );
        }
        this.frameCount++;
    }
  
    loadAtlas(master, atlas){
        let img  = new Image();
        img.src = atlas;
        this.atlases[master] = img;
    }


    move(player){
        document.addEventListener('keydown', (e) => {
            if (e.keyCode == 37) {
                this.player1.view = this.player1.dir  = -1;
                this.player1.runOn = true;
            } else if (e.keyCode == 39) {
                this.player1.view = this.player1.dir  = 1;
                this.player1.runOn = true;
            }else if (e.keyCode == 65) {
                this.player2.view = this.player2.dir  = -1;
                this.player2.runOn = true;
            }else if (e.keyCode == 68) {
                this.player2.view = this.player2.dir  = 1;
                this.player2.runOn = true;
            }
        });
        document.addEventListener('keyup', (e) => {
            if (e.keyCode == 37 || e.keyCode == 39 ) {
                this.player1.dir = 0;
                this.player1.runOn = false;
            }
            if(e.keyCode == 65 || e.keyCode == 68){
                this.player2.dir = 0;
                this.player2.runOn = false;
            }
        });


        if ((player.dir === -1 && player.x <= 0) || 
        (player.dir === 1 && player.x + player.w >= width)) return;
        
        // if(this.shieldOn)return;
        if(player.runOn){
            player.x += player.dir * player.speed;
            player.state = 'run';
        }
        // else{
        //     this.player.state = 'idle'
        // }
        // console.log(this.player.dir)
        // this.player.x += this.player.dir * this.player.speed;
        // this.player.state = 'run';
    }
    
    attack(){

    }
    skills(){

    }
    loop(){
        this.draw();
        requestAnimationFrame(() => {
            this.loop();
        });
    }
}
// let render = new Render;