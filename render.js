

class Render{
    constructor(player = new Player){
        this.player = player;
        this.index = 0;
        this.frameCount = 0;

        this.atlases=[];
        this.loadAtlas('scorpion','img/player/scorpion.png');
        
        // this.loadAtlas('sub-zero', '');
    }

    draw(){
        ctx.clearRect(0, 0,width, height);
        this.show();
        this.move();
        this.attack();
    }

    show(){
        if(this.player.state !== this.player.lastState){
            this.index = 0;
            this.player.lastState = this.player.state;
        }
        let spr = atlas[this.player.state];
         
        if(this.frameCount>spr.length){
            this.frameCount = 0;
            if (this.index + 1 === spr.length){
                this.animeStop = true;//переделать
            }
            this.index = (this.index + 1) % spr.length;
        }
        let a = spr[this.index].frame;
        this.w = a.w ;
        this.h = a.h;
        
        if(this.view === -1){
            ctx.save();
            ctx.scale(-1, 1);
            ctx.drawImage(this.atlases['scorpion'], a.x, a.y, a.w, a.h,
            -this.player.x-this.w, this.player.y, this.w, this.h );
            ctx.restore();
        }else {
            ctx.drawImage(this.atlases['scorpion'], a.x, a.y, a.w, a.h,
            this.player.x, this.player.y, this.w, this.h );
        }
        this.frameCount++;
        console.log(this.frameCount)
    }
  
    loadAtlas(master, atlas){
        let img  = new Image();
        img.src = atlas;
        this.atlases[master] = img;
    }

    move(){
        if ((this.player.dir === -1 && this.player.x <= 0) || 
        (this.player.dir === 1 && this.player.x + this.w >= width)) return;
        
        if(this.shieldOn)return;
        if(this.runOn){
            this.player.x += this.dir * this.speed;
            this.player.state = 'run';
        }else{
            this.player.state = 'idle'
        }
    }
    
    attack(){

    }
    skills(){

    }
}
// let render = new Render;