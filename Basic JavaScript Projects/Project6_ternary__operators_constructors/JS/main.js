function Vote() {
  var age, Can_Vote;
  age = document.getElementById("age").value;

  Can_Vote = age < 18 ? "You are too young too vote 🧒" : "You can vote 😇";
  document.getElementById("Vote").innerHTML += `
        ${Can_Vote}
    `;
}

function Vechile(Make, Model, Year, Color) {
  this.Vechile_Make = Make;
  this.Vechile_Model = Model;
  this.Vechile_Year = Year;
  this.Vechile_Color = Color;
}

var Linas = new Vechile("Mercedes", "AMG", 2021, "Red");
var Ugne = new Vechile("BMW", "M3", 2022, "White");
var Amanda = new Vechile("Dodge", "Dodge-2020", 2020, "Blue");
var Anna = new Vechile("Audi", "A9", 2024, "Matt Black");

function add() {
  var userNameEntered = document.getElementById("enterName").value;
  document.getElementById("New_and_This").innerHTML += `
        <p>${userNameEntered} drives ${Linas.Vechile_Color}  ${Linas.Vechile_Make}  car manufactured in ${Linas.Vechile_Year}</p><br>
    `;
}




function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }


var Lainukas = new Person("Linas", "Tom", "25", "Blue")

function addNewPerson(){

    document.getElementById("newPerson").innerHTML += `
        <p>First name ${Lainukas.firstName}, last name ${Lainukas.lastName}, age ${Lainukas.age}, eye color: ${Lainukas.eyeColor}</p>
    `;
}




function nameGet(){
    document.getElementById("gName").innerHTML += name();
    function name(){
        var userInput = window.prompt("Enter your name: ");
        function nameGetter(){ document.write(userInput);}
        nameGetter(userInput);
    };
};
