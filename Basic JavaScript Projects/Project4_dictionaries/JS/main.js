function getPair() {
    var Car = {
        Brand: "Mercedes",
        Model: "AMG",
        Convertable: false,
        Doors: 5,
        Engine: "V12",
        Speed: "500 M/H"
    };

    var pair = document.getElementById("key-value-pair").innerHTML += ` 
    <p>Car Brand: ${Car.Brand} </p> </br>
    <p>Car Model: ${Car.Model} </p> </br>
    <p>Is convertable?: ${Car.Convertable} </p> </br>
    <p>Doors: ${Car.Doors} </p> </br>
    <p>Car Engine Size: ${Car.Engine} </p> </br>
    <p>Car Speed: ${Car.Speed} </p>
    `;
};

function getPair2() {
    var Car = {
        Brand: "Mercedes",
        Model: "AMG",
        Convertable: false,
        Doors: 5,
        Engine: "V12",
        Speed: "500 M/H"
    };

    delete Car.Model;
    var pair = document.getElementById("key-value-pair2").innerHTML += ` 
    <p>${Car.Model} </p>`;
};
