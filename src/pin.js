

class Pin {
    constructor(pin) {
        this.pin = pin;
    }
    
    randomInt() {
        return Math.floor(Math.random() * 65536);
    }
}

export default Pin;