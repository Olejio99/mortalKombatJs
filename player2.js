class Player2{
    constructor(){
        this.x = window.innerWidth - 200;
        this.y = window.innerHeight / 2 + 80 ;
        this.state = 'run';
        this.lastState = 'run';
        this.punchPower = 0;
        this.hp = 100;
        this.dir = -1;
        this.view = -1;
        this.speed = 3;
        this.runOn = false;
        this.w = 150;        
        this.h = 264;
    }
}

// class Scorpion extends Player2{
//     constructor(){
//         this.x = x;
//         this.y = y;
//         this.dir = dir;
//     }
// }