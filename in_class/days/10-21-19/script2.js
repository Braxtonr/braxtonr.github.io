class Person{
    constructor(firstName, lastName)
    {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(){
        return this._firstName + "*";
    }

    set firstName(firstName){
        this._firstName = firstName + "!";
    }
}

class myDate {
    constructor(hour, minute, second)
    {
        this._hour = hour;
        this._minute = minute;
        this._second = second;
    }

    get hour(){
        return this._hour;
    }
    set hour(hour){
        this._hour = hour;
    }
    get minute(){
        return this._minute;
    }
    set minute(minute){
        this._minute = minute;
    }
    get second(){
        return this._second;
    }
    set second(second){
        this._second = second;
    }
    getformattedDate(){
        return `${this.prependZero(this.hour)}:${this.prependZero(this.minute)}:${this.prependZero(this.second)}`;
    }

    prependZero(data){
        if(data < 10)
        {
            return '0' + data;
        }
        return data;
    }
}

class Food{
    constructor(name, calories)
    {
        this._name = name;
        this._calories = calories;
    }

    getFoodname(){
        return this._name;
    }

    getFoodCalories(){
        return this._calories;
    }

    getTableRow(){
        let trElem = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdCal = document.createElement("td");
        tdName.innerHTML = this._name;
        tdCal.innerHTML = this._calories;
        trElem.append(tdName);
        trElem.append(tdCal);
        return trElem;
    }
}

//create array of foods
foodArr = [];
foodArr.push(new Food("Cheeseburger", 1200));
foodArr.push(new Food("Popcorn", 20));
foodArr.push(new Food("Cheese", 50));

totalCalories = 0;

let tableElem = document.createElement("table");
let contentDiv = document.getElementById("content");
contentDiv.append(tableElem);

for(i of foodArr)
{
    console.log(i.getFoodname());
    totalCalories += i.getFoodCalories();

    tableElem.append(i.getTableRow());
}
console.log("Total Calories: " + totalCalories);

// me = new Person ("Amy", "Smith");
// me.firstName = "Bobby";
// console.log(me.firstName);

time = new myDate(2,53, 45);
console.log(time.getformattedDate());