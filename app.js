var peopleSelectorApp = angular.module('PeopleSelectorApp', []);
peopleSelectorApp.controller('PeopleSelectorController', function() {
  console.log('PeopleSelectorController loaded');

  var people = [];

  var self = this;

  //Create an object constructor
  function Person(name, birthplace, age) {
    this.name = name;
    this.birthplace = birthplace;
    this.age = age
  }

  //create object instances
  var paul = new Person ("Paul", "Cambridge", 39);
  var lynda = new Person ("Lynda", "Richfield", 18);
  var cindy = new Person ("Cindy", "Cambridge", 42);
  var rudolph = new Person ("Rudolph", "Richfield", 1);
  console.log(cindy);

  //push object instances to array
  people.push(paul);
  people.push(lynda);
  people.push(cindy);
  people.push(rudolph);
  console.log(paul);
  //now have an array of objects

  self.people = [paul, lynda, cindy, rudolph];
  console.log(people);


  self.submitPerson = function() {
    // "This " + people.name + " was born in" + people.birthplace + " and is" + people.age + " years old.";
  }
  self.submitPerson(people);
}); //end of function and controller
