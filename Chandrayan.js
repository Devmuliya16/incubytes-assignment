class SpaceCraft {
    constructor(direction, x,y,z) {
        if (typeof direction !== "string" || direction.length !== 1) {
            throw new Error("direction must be a single character");
        }
        if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
            throw new Error("x, y, and z must be numbers");
        }
        this.direction = direction;
        this.temp = direction;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    moveForward() {
        switch (this.direction) {
            case 'N':
                this.y++;
                break;
            case 'S':
                this.y--;
                break;
            case 'E':
                this.x++;
                break;
            case 'W':
                this.y--;
                break;
            case 'U':
                this.z++;
                break;
            case 'D':
                this.z--;
                break;
            default:
                break;
        }
    }

    moveBackward() {
        switch (this.direction) {
            case 'N':
                this.y--;
                break;
            case 'S':
                this.y++;
                break;
            case 'E':
                this.x--;
                break;
            case 'W':
                this.x++;
                break;
            case 'U':
                this.z--;
                break;
            case 'D':
                this.z++;
                break;
            default:
                break;
            }
        }
        
        rotateRight() {
        this.direction = this.temp;
        switch (this.direction) {
            case 'N':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'S';
                break;
            case 'S':
                this.direction = 'W';
                break;
            case 'W':
                this.direction = 'N';
                break;
            default:
                break;
        }
        if(this.direction!='U' && this.direction!='D'){
            this.temp = this.direction;
        }
    }

    rotateLeft() {
        this.direction = this.temp;
        switch (this.direction) {
            case 'N':
                this.direction = 'W';
                break;
            case 'W':
                this.direction = 'S';
                break;
            case 'S':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'N';
                break;
            default:
                break;
        }
        if(this.direction!='U' && this.direction!='D'){
            this.temp = this.direction;
        }
    }

    rotateUp() {
        if(this.direction!='U' && this.direction!='D'){
            this.temp = this.direction;
        }
        this.direction = 'U';
    }

    rotateDown() {
        if(this.direction!='U' && this.direction!='D'){
            this.temp = this.direction;
        }
        this.direction = 'D';
    }

    move(command) {
        if(!['r', 'l', 'f', 'b','u','d'].includes(command)){
            throw new Error("invalid inputs of diractions");
        }
        switch (command) {
            case 'f':
                this.moveForward();
                break;
            case 'b':
                this.moveBackward();
                break;
            case 'l':
                this.rotateLeft();
                break;
            case 'r':
                this.rotateRight();
                break;
            case 'u':
                this.rotateUp();
                break;
            case 'd':
                this.rotateDown();
                break;
            default:
                break;
        }

        console.log(this.x,this.y,this.z,this.direction);
    }
}

module.exports = SpaceCraft;

const spaceCraft = new SpaceCraft('N',0,0,0);

let commands = ['f','r','u','b','l'];
commands = ['u','d','l','r'];

commands.forEach((command)=>spaceCraft.move(command));