class Player1{
    constructor(){
        this.x = 0;
        this.y = window.innerHeight / 2 + 80 ;
        this.state = 'run';
        this.lastState = 'run';
        this.punchPower = 0;
        this.hp = 100;
        this.dir = 1;
        this.view = 1;
        this.speed = 3;
        this.runOn = false;
        this.w = 150;
        this.h = 264;
    }


}

// class Scorpion extends Player1{
//     constructor(){
//         this.x = x;
//         this.y = y;
//         this.dir = dir;
//     }
// }
