function call_loop(){
    var Digit = "";
    var counter = 0;

    while (counter < 6){
        Digit += `${counter}`;
        counter++;
    }
    document.getElementById("loop").innerHTML = Digit;
};


var stringLenght = " I am a linas string ";

document.write(stringLenght.length);
document.write(stringLenght.toLowerCase());
document.write(stringLenght.toUpperCase());
document.write(stringLenght.indexOf("linas"));
document.write(stringLenght.length)

if (stringLenght.indexOf("linas") === -1) {
    document.write(`The word linas is not in the string`)
}else {
    document.write(` </br> The position of the word linas starts at ${stringLenght.indexOf("linas")}`)
};

var string1 = "abc";
var string2 = "ABC";

var string3 = "abc";
var string4 = "bcd";

console.log(string1 === string2) 
console.log(string1.toLocaleLowerCase() === string2.toLocaleLowerCase());

console.log(string3 < string4);




function call_instruments(){
    var instrumentsList = [
        'Guitar',
        'Piano',
        'Drums',
        'Bass',
        'Violin'
    ];
    var content = '';

    for (x = 0; x < instrumentsList.length; x++) {
        content += instrumentsList[x] + " </br>";

    }
    document.getElementById("instruments").innerHTML += content;
}


function call_array(){
    var catPicture = [];
    catPicture[0] = "Sleeping";
    catPicture[1] = "eating";
    catPicture[2] = "playing";
    catPicture[3] = "purring";

    document.getElementById("array").innerHTML += `</br> In this picture, the cat is ${catPicture[2]}`
}


function constant_function() {
    const Musical_instrument = {type: 'guitar', brand: 'Fender', color: 'Black'};

    Musical_instrument.color = 'Blue',
    Musical_instrument.price = '900',
    document.getElementById("constant").innerHTML += `The color of ${Musical_instrument.type} is ${Musical_instrument.color}`
}

var x = 67;
document.write(x)
{
    x = 29
    document.write(`</br> ${x}`)
}
document.write(`</br> ${x} </br>`)

var x = 67;
document.write(`</br> ${x}`)
{
    let x = 29
    document.write(`</br> ${x}`)
}
document.write(`</br> ${x}`)


const calculateArea = function(radius) {
    return 3.14 * radius**2 + 2;
}
const area = calculateArea(5);
console.log(area);


let car = {
    make: "Audi",
    model: "A8 Sport",
    year: "2021",
    color: "Matt Black",
    description: function(){
        return `The car is a ${this.year} ${this.color} ${this.make} ${this.model}`;
    }
};

document.getElementsByClassName('.car').innerHTML += car.description();


// break keyword
for (i = 0; i < 10; i++) { 

    if(i === 5 || i === 3){
        continue;
    }

    console.log(i);
    if( i === 7){
        break;
    }
}
console.log("I have broken out of the loop");