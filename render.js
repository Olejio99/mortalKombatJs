let atlas = scorpion;

class Render{
    constructor(){
        // this.player = player;
        this.index = 0;
        this.frameCount = 0;
        this.atlases=[];
        this.loadAtlas('scorpion','img/player/scorpion.png');
    }

    draw(player){
        this.show(player);
        this.move(player);
        // this.attack();
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
        this.w = a.w*2 ;
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
        // if ((this.player.dir === -1 && this.player.x <= 0) || 
        // (this.player.dir === 1 && this.player.x + this.w >= width)) return;
        
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
}
// let render = new Render;