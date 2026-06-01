//Inheritance Practice

class Animal{
    alive = true;
    
    eat(){
        console.log(`This ${this.name} is eating!`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping!`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";

    run(){
        console.log(`This ${this.name} is Running!`);
    }
}

class Fish extends Animal{
    name = "Fish";

    swim(){
        console.log(`This ${this.name} is Swimming!`);
    }
}

class Hawk extends Animal{
    name = "Hawk";

    fly(){
        console.log(`This ${this.name} is flying!`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.eat();
rabbit.sleep();
fish.eat();
fish.sleep();
hawk.eat();
hawk.sleep();

rabbit.run();
fish.swim();
hawk.fly();