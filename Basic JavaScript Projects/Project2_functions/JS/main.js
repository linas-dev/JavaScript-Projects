function getExamples() {
    var getexample1 = "Example changed";
    var getexample2 = getexample1.fontcolor("blue")
    document.getElementById("example1").innerHTML = getexample2;

    var getexample3 = `Example changed 2`;
    var getexample4 = getexample3.fontsize("100px");
    document.getElementById("example2").innerHTML = getexample4;
};

function addMore(){
    var button = document.createElement("button");
    button.innerHTML = "Added more buttons 😅";

    var div = document.getElementById("mb");
    div.appendChild(button);
};