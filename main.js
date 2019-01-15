let height,width, canvas, ctx;
// let render = new Render;
// let player = new Player;

// canvas = document.createElement('canvas');
// canvas.width = width = window.innerWidth;
// canvas.height = height = window.innerHeight;
// document.body.appendChild(canvas);
// ctx = canvas.getContext('2d');

class Main{
    constructor(){
        // this.groundY = height-(height*0.11);
        // this.player1 = new Player1;
        // this.player2 = new Player2;
        // this.players = [];
        this.render = new Render
        // this.players.push(this.player1)
        // this.players.push(this.player2)

        // this.players = {
        //     'player1' : {
        //         hp: 100,
        //         x: 0,
        //         y: window.innerHeight / 2 + 80,
        //         state: 'run',
        //         lastState: 'run',
        //         dir: 1,
        //         view: 1,
        //         speed: 3,
        //         runOn: false
        //     },
        //     'player2' : {
        //         hp: 100,
        //         x: window.innerWidth - 200,
        //         y: window.innerHeight / 2 + 80,
        //         state: 'run',
        //         lastState: 'run',
        //         dir: -1,
        //         view: -1,
        //         speed: 3,
        //         runOn: false
        //     }
        // }
        // this.player1 = {
        //     hp: 100,
        //     x: 0,
        //     y: window.innerHeight / 2 + 80,
        //     state: 'run',
        //     lastState: 'run',
        //     dir: 1,
        //     view: 1,
        //     speed: 3,
        //     runOn: false
            
        // }
        // this.player2 = {
        //     hp: 100,
        //     x: window.innerWidth - 200,
        //     y: window.innerHeight / 2 + 80,
        //     state: 'run',
        //     lastState: 'run',
        //     dir: -1,
        //     view: -1,
        //     speed: 3,
        //     runOn: false
            
        // }
        // console.log(this.player)
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
    //     setTimeout(() => {
    //         this.loop();
    //     }, 100);
    }
    
    game(){
        // this.interval = setInterval(() => {
        
        // }, 1000);
        this.render.loop();
        // this.loop();
    }
    draw(){
        // ctx.clearRect(0, 0,width, height);
        
        // jwerty.key('w', function () { console.log('Player moved: Up')});
        // jwerty.key('↑, ↓, ↑, ↓', function () {console.log("it's worked")});
        // jwerty.key('s', function () { log('Player moved: Down')});
        // jwerty.key('d', function () {this.player.runOn = true }, this );
        // player.new Render()

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

        // for(let i = 0; i<this.players.length; i++){
        //     this.render.draw(this.players[i]);
        // }

        // this.render.show(this.player1);
        // this.render.show(this.player2);
        // this.render.move(this.player1);
        // this.render.move(this.player2);

    }
    
    // loop(){
    //     this.draw();
    //     requestAnimationFrame(() => {
    //         this.loop();
    //     });
    // }
}
let main = new Main;
main.game();
// console.log(main.player)
// main.loop();

