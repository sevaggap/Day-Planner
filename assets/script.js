// put datetime in javascript, add to currentday ID
// create function that checks time, and compares it to past, present, or future and assigns background colours to input fields
// create function to log input to storage, and refill input area on reload
// look into moment.js for time math

let datetimeEl = $("#currentDay");
let containerEl = $(".container");
let buttonEl = $(".saveBtn");
let rowtimeEl = $(".time-block")

localStorage.getItem("nineStor");
localStorage.getItem("tenStor");
localStorage.getItem("elevenStor");
localStorage.getItem("twelveStor");
localStorage.getItem("oneStor");
localStorage.getItem("twoStor");
localStorage.getItem("threeStor");
localStorage.getItem("fourStor");
localStorage.getItem("fiveStor");

let time = moment();
datetimeEl.text(time.format("dddd, MMMM Do, YYYY"));

let currenttime = moment().format('H');
console.log(currenttime);

function savetask () {
    let input9 = $('#9').val()
    let input10 = $('#10').val()
    let input11 = $('#11').val()
    let input12 = $('#12').val()
    let input1 = $('#13').val()
    let input2 = $('#14').val()
    let input3 = $('#15').val()
    let input4 = $('#16').val()
    let input5 = $('#17').val()

    localStorage.setItem("nineStor", input9);
    localStorage.setItem("tenStor", input10);
    localStorage.setItem("elevenStor", input11);
    localStorage.setItem("twelveStor", input12);
    localStorage.setItem("oneStor", input1);
    localStorage.setItem("twoStor", input2);
    localStorage.setItem("threeStor", input3);
    localStorage.setItem("fourStor", input4);
    localStorage.setItem("fiveStor", input5);

   console.log("saved");
}

function populatetasks () {
    $('#9').val(localStorage.getItem("nineStor"));
    $('#10').val(localStorage.getItem("tenStor"));
    $('#11').val(localStorage.getItem("elevenStor"));
    $('#12').val(localStorage.getItem("twelveStor"));
    $('#13').val(localStorage.getItem("oneStor"));
    $('#14').val(localStorage.getItem("twoStor"));
    $('#15').val(localStorage.getItem("threeStor"));
    $('#16').val(localStorage.getItem("fourStor"));
    $('#17').val(localStorage.getItem("fiveStor"));

    console.log('populated');
}

function settimeblockcolour () {
    if(9 < currenttime) {
        $('#9').css('background-color', '#d3d3d3');
    } else if (9 == currenttime) {
        $('#9').css('background-color', '#ff6961');
    } else {
        $('#9').css('background-color', '#77dd77');
    }

    if(10 < currenttime) {
        $('#10').css('background-color', '#d3d3d3');
    } else if (10 == currenttime) {
        $('#10').css('background-color', '#ff6961');
    } else {
        $('#10').css('background-color', '#77dd77');
    }

    if(11 < currenttime) {
        $('#11').css('background-color', '#d3d3d3');
    } else if (11 == currenttime) {
        $('#11').css('background-color', '#ff6961');
    } else {
        $('#11').css('background-color', '#77dd77');
    }

    if(12 < currenttime) {
        $('#12').css('background-color', '#d3d3d3');
    } else if (12 == currenttime) {
        $('#12').css('background-color', '#ff6961');
    } else {
        $('#12').css('background-color', '#77dd77');
    }

    if(13 < currenttime) {
        $('#13').css('background-color', '#d3d3d3');
    } else if (13 == currenttime) {
        $('#13').css('background-color', '#ff6961');
    } else {
        $('#13').css('background-color', '#77dd77');
    }

    if(14 < currenttime) {
        $('#14').css('background-color', '#d3d3d3');
    } else if (14 == currenttime) {
        $('#14').css('background-color', '#ff6961');
    } else {
        $('#14').css('background-color', '#77dd77');
    }

    if(15 < currenttime) {
        $('#15').css('background-color', '#d3d3d3');
    } else if (9 == currenttime) {
        $('#15').css('background-color', '#ff6961');
    } else {
        $('#15').css('background-color', '#77dd77');
    }

    if(16 < currenttime) {
        $('#16').css('background-color', '#d3d3d3');
    } else if (9 == currenttime) {
        $('#16').css('background-color', '#ff6961');
    } else {
        $('#16').css('background-color', '#77dd77');
    }

    if(17 < currenttime) {
        $('#17').css('background-color', '#d3d3d3');
    } else if (17 == currenttime) {
        $('#17').css('background-color', '#ff6961');
    } else {
        $('#17').css('background-color', '#77dd77');
    }    
}

buttonEl.on("click",savetask)

populatetasks ();
settimeblockcolour ();