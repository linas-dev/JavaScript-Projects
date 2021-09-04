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



var mynum;

// mynum = Math.sqrt(64);
// document.write(` ${mynum} `)

// mynum = Math.abs(-10);
// document.write(` ${mynum} `)

var a = window.prompt("Enter side A");
var b = window.prompt("Enter side B");
var c;

c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

document.write(`Side c = ${c}`);
