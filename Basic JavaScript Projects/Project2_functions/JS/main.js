// function getExamples() {
//     var getexample1 = "Example changed";
//     var getexample2 = getexample1.fontcolor("blue")
//     document.getElementById("example1").innerHTML = getexample2;

//     var getexample3 = `Example changed 2`;
//     var getexample4 = getexample3.fontsize("100px");
//     document.getElementById("example2").innerHTML = getexample4;
// };

// function addMore(){
//     var button = document.createElement("button");
//     button.innerHTML = "Added more buttons 😅";

//     var div = document.getElementById("mb");
//     div.appendChild(button);
// };


// function clickFunction(){ // defining function name

//     var changeInnerText = "Text was changed "; // creating variable for inner text
//     var surpriseText = "This new blue color text" // defining new variable for new text
//     var surpriseText = surpriseText.fontcolor("blue"); // assigning color to new variable text
//     changeInnerText += ` to: ${surpriseText} `; // assigning inner text to new created variable

//     document.getElementById("click").innerHTML = changeInnerText; // getting id on click function and changing assigned variable to inner text

// };
  
function clickFunction() {

    var x = 4;
    var y = 4;
    x += y;
    document.getElementById("x").innerHTML = ` 4 + 4 =  ${x} `
}

function clickFunction2() {

    var x = 4;
    var y = 2;
    x -= y;
    document.getElementById("x2").innerHTML = ` 4 - 2 =  ${x} `
}

