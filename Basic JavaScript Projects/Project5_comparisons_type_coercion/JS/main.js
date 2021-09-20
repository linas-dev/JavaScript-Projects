function test(){
    document.getElementById("test").innerHTML += `
        <p>${0/0}</p> `;
    // document.getElementById("test").innerHTML = isNaN("077666")
};

function test2(){
    document.getElementById("test2").innerHTML += `
        <p>${isNaN("text")}</p>`;
};

function test3(){
    document.getElementById("test3").innerHTML += `
    <p>${isNaN("077666")}</p>`;
};

function infinite(){
    document.getElementById("infinite").innerHTML += `<p>Infinity number: ${3E310} </p>`

    document.getElementById("negative-infinite").innerHTML += `<p>Negative Infinity number: ${-3E310} </p>`
};

function greater() {
    var result = 10 > 9 ;
    document.getElementById("greater").innerHTML += `<p>10 is greater then 9: ${result}</p>`;
}

function lesser() {
    var result2 = 10 > 9 ;
    document.getElementById("lesser").innerHTML += `<p>9 is less then 10: ${result2}</p>`;
}


function coercion() {
    var result3 = "100" + 5;
    document.getElementById("coercion").innerHTML += `<p>Coercion "100" + 5: ${result3}</p>`;
}






function isequal() {
    var result4 = (22 - 4) == 17;
    document.getElementById("isequal").innerHTML += `<p>(22 - 4) = 17  ${result4}</p>`;
}
function isequal2() {
    var result5 = 30 == (15 * 2);
    document.getElementById("isequal2").innerHTML += `<p>30 == (15 * 2)  ${result5}</p>`;
}

function trippleequalcompare() {
    var nameOne = "Linas";
    var nameTwo = "Lainas"
    var result6 = nameOne === nameTwo;
    document.getElementById("trippleequalcompare").innerHTML += `<p>Name ${nameOne} is equal to  ${nameTwo}: ${result6} </p>`;
}







var number1 = 67;
var number2 = 67;

var result = number1 === number2

var a = "Ugne"
var b = 87;
var c = a === b;

var d = 100;
var e = "100";
var f = d === e;

var g = true;
var h = false;
var i = g === h;

document.write(`
    Number ${number1} is equal to number ${number2} =  ${result}. </br>
    <p>String: "${a}" is equal to number ${b}? = ${c}.</p>
    <p>Number: ${d} is equal to string "${e}"? = ${f}.</p>
    <p>Boolean: ${g} is equal to Boolean ${h}? = ${i}.</p><br>
    `);



var and = 5 > 2 && 10 > 2;
var and2 = (10 * 2 ) > 22 && ( 3 * 3 ) > 9;

document.write(`
    <p>5 > 2 && 10 > 2 ${and}.</p>
    <p>(10 * 2 ) > 22 && ( 3 * 3 ) > 9 ${and2}.</p><br>
`)





var or = 5 > 2 || 10 < 2;
var or2 = (30 * 2 ) < 22 || ( 3 * 3 ) < 9;

document.write(`
    <p>5 > 2 || 10 < 2 ${or}.</p>
    <p>(30 * 2 ) < 22 || ( 3 * 3 ) < 9 ${or2}.</p><br>
`)






function isnot() {
    var aa = 5;
    var bb = 10;
    document.getElementById("isnot").innerHTML += `
    ${!(aa > bb)}
    `;
}

function isnot2() {
    var dd = 23;
    var ee = 11;
    document.getElementById("isnot2").innerHTML += `
    ${!(dd > ee)}
    `;
}




console.log(2+2);
console.log(10 < 9);
