// Global variable

var number = 25;

function global(){
    document.getElementById("global").innerHTML += number;
};

// Local variable

function local(){
    var number = 30;
    document.getElementById("local").innerHTML += number;
};


function dateGet() {

    var date = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    if( new Date().getHours() < 14) {
        document.getElementById("date").innerHTML += `
            Good day! ${date}:${minutes}:${seconds}
        `;
    };
};



function age() {

    var age = document.getElementById("age").value;
    if( age >= 18){
        vote = "old enough";
    }else {
        vote = "not enough";
    };
    document.getElementById("oldenough").innerHTML += vote;
};



function getDateAndTime() {
    var day = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();

    var replyWithTime;

    if ( hours < 12 == hours > 0) {
        replyWithTime = ` <p>Good Morning, current date: ${year} ${month} ${day} and time: ${hours}:${minutes}:${seconds}</p>`;
    }else if ( hours > 12 == hours < 18) {
        replyWithTime = ` Good Day, current date: ${year} ${month} ${day} and time: ${hours}:${minutes}:${seconds}`;
    }else {
        replyWithTime = ` Good Evening, current date: ${year} ${month} ${day} and time: ${hours}:${minutes}:${seconds}`;
    }
    document.getElementById("dateTime").innerHTML += replyWithTime;
}


