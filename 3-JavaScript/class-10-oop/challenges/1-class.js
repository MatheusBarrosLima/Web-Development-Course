class Animal {
    constructor(name, race) {
        this.name = name;
        this.race = race;
    }

    action() {
        return this.sound
    }
}

class Dog extends Animal {
    constructor(name, race, sound) {
        super(name, race);
        this.sound = sound;
    }

    action() {
        return `${this.name} está ${this.sound}`;
    }
}

const myDog = new Dog("Messi", "Pitbull", "latindo!")

console.log(myDog.action());
