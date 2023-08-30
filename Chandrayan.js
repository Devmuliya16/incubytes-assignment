class SpaceCraft {
    constructor(direction, x,y,z) {
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
    }

    rotateLeft() {
        this.direction = this.temp;
        switch (this.direction) {
            case 'N':
                this.direction = 'W';
                break;
            case 'E':
                this.direction = 'N';
                break;
            case 'S':
                this.direction = 'E';
                break;
            case 'W':
                this.direction = 'S';
                break;
            default:
                break;
        }
    }

    rotateUp() {
        this.temp = this.direction;
        this.direction = 'U';
    }

    rotateDown() {
        this.temp = this.direction;
        this.direction = 'D';
    }

    move(command) {
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