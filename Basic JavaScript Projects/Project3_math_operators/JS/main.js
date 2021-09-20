// const PI = Math.PI;
// document.write(PI.toFixed(2));

// const PI = Math.PI;
// const min = Math.min( 1,2,3,100,43,7,5000 );
// document.write(min);

// const max = Math.max( 1,2,3,100,43,7,5000 );
// document.write(max);

// const pow = Math.pow(5,6);
// document.write(pow);

// const random = Math.random().toFixed(1) * 100;
// document.write(random);

// let ceil = Math.ceil(5.7)
// document.write(ceil);

// let floor = Math.floor(5.7)
// document.write(floor);

// let round = Math.round(5.51)
// document.write(round);



// let num1 = Math.random().toFixed(1) * 10;
// let num2 = Math.random().toFixed(1) * 10;
// let num3 = Math.random().toFixed(1) * 10;

// document.write(`${num1}${num2}${num3} </br>`);

// let max = Math.max(num1,num2,num3)

// document.write(max)



// var mynum;

// mynum = Math.sqrt(64);
// document.write(` ${mynum} `)

// mynum = Math.abs(-10);
// document.write(` ${mynum} `)

// var a = window.prompt("Enter side A");
// var b = window.prompt("Enter side B");
// var c;

// c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

// document.write(`Side c = ${c}`);




// const getRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

// console.log(getRandomNumber(7,2).toFixed(1) * 100);



function addnumber() {
    var add = 9 + 4;
    document.getElementById("display1").innerHTML = ` 9 + 4 = ${add} `;
}

function subnumber() {
    var sub = 67 - 39;
    document.getElementById("display2").innerHTML = ` 67 - 39 = ${sub} `;
}

function multinumber() {
    var multi = 7 * 74;
    document.getElementById("display3").innerHTML = ` 7 * 74 = ${multi} `;
}

function modnumebr() {
    var modulus = 40 % 14;
    document.getElementById("display4").innerHTML = ` 40 % 14 = ${modulus} `;
}

function plusplusnumber() {
    var plusplus = 67;
    plusplus ++;
    document.getElementById("display5").innerHTML = ` 67 ++ = ${plusplus} `;
}

function minusminusnumber() {
    var minuminus = 285;
    minuminus --;
    document.getElementById("display6").innerHTML = ` 285 -- = ${minuminus} `;
}



function findBiggestRandomNumber() {
    var num1 = Math.random().toFixed(1) * 99;
    var num2 = Math.random().toFixed(1) * 99;
    var num3 = Math.random().toFixed(1) * 99;

    var max = Math.max(num1,num2,num3);

    document.getElementById("num1").innerHTML = ` Number 1 : ${num1} `;
    document.getElementById("num2").innerHTML = ` Number 2 : ${num2} `;
    document.getElementById("num3").innerHTML = ` Number 3 : ${num3} `;
    document.getElementById("max").innerHTML = ` Max number is :  ${max} `;
};