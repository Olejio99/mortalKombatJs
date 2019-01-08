let height,width, canvas, ctx;

// canvas = document.createElement('canvas');
// canvas.width = width = window.innerWidth;
// canvas.height = height = window.innerHeight;
// document.body.appendChild(canvas);
// ctx = canvas.getContext('2d');

class Main{
    constructor(){
        this.groundY = height-(height*0.11);
        
        // this.player1 = new Player(0, this.groundY - 150);
        // player2 = new Player;
        // this.render = new Render;
        // this.atlases=[];
        // this.loadAtlas('scorpion','');
        // this.loadAtlas('sub-zero', '');
        canvas = document.createElement('canvas');
        canvas.width = width = window.innerWidth;
        canvas.height = height = window.innerHeight;
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
    }
    
    game(){

    }
    
    loadAtlas(master, atlas){
        let img  = new Image();
        img.src = atlas;
        this.atlases[master] = img;
    }
    
    draw(){
        // player.new Render()
        render.draw();
    }
    
    loop(){
        this.draw();
        requestAnimationFrame(() => {
            this.loop();
        });
    }
}

let main = new Main;
let render = new Render;
main.loop();