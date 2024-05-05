{
    class Animal{
        // public name:string;
        // public species:string;
        // public sound:string;
        constructor(public name:string,public species:string,public sound:string){
            // this.name=name;
            // this.species=species;
            // this.sound=sound;
        }
        makeSound(){
            console.log(`${this.name} sound is ${this.sound}`);
        }
    }

    const dog = new Animal('Mr dog','white dog','gheu gheu');
    const cat = new Animal('Mr Cat','white cat','meu meu');
    dog.makeSound();
    cat.makeSound();
}