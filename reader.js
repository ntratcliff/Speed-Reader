var regex = /([^\s]+)/g;
var matches;
var index = 0;
var wpm = 700;
var wpms;
var readerInterval;

function start() {
    index = 0;
    wpm = $("#wpm-input").val();
    wpms = 1/wpm*60000;
    matches = $("#text").val().match(regex);
    if(readerInterval)
        clearInterval(readerInterval);
    
    readerInterval = setInterval(next, wpms);
    $("#btn-pause").prop("disabled", "");
    $("#btn-resume").prop("disabled", "true");
    $("#btn-stop").prop("disabled", "");
    $("#btn-read").prop("disabled", "true");
}

function pause() {
    clearInterval(readerInterval);
    $("#btn-pause").prop("disabled", "true");
    $("#btn-resume").prop("disabled", "");
}

function resume() {
    readerInterval = setInterval(next, wpms);
    $("#btn-pause").prop("disabled", "");
    $("#btn-resume").prop("disabled", "true");
}

function stop() {
    clearInterval(readerInterval);
    $("#word").text('');
    $("#btn-pause").prop("disabled", "true");
    $("#btn-resume").prop("disabled", "true");
    $("#btn-stop").prop("disabled", "true");
    $("#btn-read").prop("disabled", "");
}

function next() {
    if (index < matches.length) {
        $("#word").text(matches[index]);
        index++;
    }
    else {
        clearInterval(readerInterval);
    }
}