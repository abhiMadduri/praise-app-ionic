class Person
{
    constructor(public name: string, public age: number) {
    }

    Age() { return this.age; }

    static fromJson(json: string) {
        var data = JSON.parse(json);
        return new Person(data.name, data.age);
    }
}

var p: Person = new Person("One", 53);
var jsonPerson = JSON.stringify(p);

var p2: Person = Person.fromJson(jsonPerson);

alert(p2.Age().toString());