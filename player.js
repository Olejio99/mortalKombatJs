class Player{
    constructor(){
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
        this.state = 'run';
        this.lastState = 'run';
        this.punchPower = 0;
        this.hp = 100;
        this.dir = 1;
        this.view = 1;
        this.speed = 3;
    }


}

class Scorpion extends Player{
    constructor(){
        this.x = x;
        this.y = y;
        this.dir = dir;
    }
}
