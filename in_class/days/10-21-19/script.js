class Person{
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    getFirstName(){
        return this._firstName;
    }

    getLastName(){
        return this._lastName;
    }

    setFirstName(firstName)
    {
        this._firstName = firstName;
    }
        
}

me = new Person("Amy", "Anderson");
me.setFirstName("bobby");
console.log(me.getFirstName());
console.log(me.getLastName());
console.log(typeof(Person));