var one // Making this a global variable so I may
        //used it in multiple functions

function concating() {
    var sen = "Now this is the Story";
    var tence =" all about how ";
    var num ="<br> My life got "; 
    var ber ="flipped turned upside down";
    one = sen.concat(tence, num, ber);
    document.getElementById("concat").innerHTML = one;
}

function slicing() {
    var whatHappen = one.slice(40,60);
    document.getElementById("splicetxt").innerHTML = whatHappen;
}

function numToString(){
    var x = 2;
    document.getElementById("numToString").innerHTML = x.toString();
}

function roundNum(){
    var num1 = 2198038.239830;
    document.getElementById("roundNum").innerHTML = num1.toPrecision(10);
}