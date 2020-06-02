

document.getElementById("adding_words").innerHTML = "Click the button to add more text and change to green.<br> ";

function color_change() {
    var fix = "With a little bit of this <br>";
    var that = "and a little bit of that";
    var fix = fix.fontcolor("red");
    var that = that.fontcolor("orange");
    var total = fix + that;
    document.getElementById("colorChange").innerHTML = total;
}

function colorWords() {
    document.getElementById("adding_words").innerHTML += "Click the button to add more text.<br>";
    var change = document.getElementById("adding_words").innerHTML;
    var diff = change.fontcolor("green");
    document.getElementById("adding_words").innerHTML = diff;

}