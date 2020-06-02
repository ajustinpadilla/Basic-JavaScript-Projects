var family = " Whitewulf", father = "Mikael", mother = "Veitma",    // Define string variables
    eldestSon = "Dreager", middleSon = "Fein", youngestSon = "Yale", 
    Daughter = "sheif";

var family = family.fontcolor("red"), father = father.fontcolor("gold"),    //  Define fontcolor for the previous variables
    mother = mother.fontcolor("black"), eldestSon = eldestSon.fontcolor("purple"),
    middleSon = middleSon.fontcolor("orange"), youngestSon = youngestSon.fontcolor("green"),
    youngestSon = youngestSon.fontcolor("pink");

alert("These are some alerts");

function colorChange() {        // Defining the fuction colorChange
    var test = "SEE.... I told ya\'";   // Change words
    var diff = test.fontcolor("green"); // change color
    document.getElementById("color_Change").innerHTML = diff; //displaying at location ID colorchange
}

document.write(youngestSon + family + " is the yougest son.<br>" ); // Writing to the document using concatenation

var A = 234, B = 756, C = 254;  // defining all varibles to be written.
var Z = (A + B) * C;    // Making an expression for the variables above.

document.write("Here is (234 +756) * 254: <br>" + Z);