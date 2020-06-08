/////////////////////////////////////////////////////
//                                                 //
//     Project: Basic_Javascript_5
//          By: Angel Padilla                      //
//                                                 //
////////////////////////////////////////////////////



// I know this is very messy code but I will fix later.

document.getElementById("other").innerHTML = "The type of 5.3 is " + typeof 5.3 + ". <br>";     // defining the type of "5.3" which is number.
document.getElementById("other").innerHTML += 5E310 + " is displayed becasue 5x10^308 is to big for JavaScript. <br>";    // defining a number that will output inifity
document.getElementById("other").innerHTML += -5E310 + " is displayed becasue -5x10^308 is to big for JavaScript. <br>";   // same as above but negative

// Fuction that returns if a number is greater than
// another number.
var num1 = Math.round(Math.random() * 10);
var num2 = Math.round(Math.random() * 10);

document.getElementById("whichBigger").innerHTML += "Is " + num1 + " greater than " + num2 + "? <br>";

function greaterThan() {
    var greater = num1 > num2;
    document.getElementById("answer").innerHTML = num1 + " > " + num2 + " is " + greater + ".";
}
// Putting a message inside the log
console.log ("Hi I'm inside the log ;)");

var num3 = Math.round(Math.random() * 3)
var num4 = Math.round(Math.random() * 3)

// Fuction that compares whether two values are equal
document.getElementById("Equal").innerHTML = "Are " + num3 + " and " + num4 + " equal?";

function areTheyEqual() {
    var equal = num3 == num4;
    document.getElementById("equality").innerHTML = equal;
}

var num5, num6, constant, str, compare1, compare2, compare3, compare4;
function Triple() {
    num6 = 7;
    num5 = "7";
    constant = 7;
    var str = "This is a string";
    compare1 = constant === num6;   // Same type and value: true
    compare2 = constant === str;    // Different type and value: false
    compare3 = constant === num5;   // Different type but same value: false
    compare4 = constant === num1;   // Different value but same type: false
    document.getElementById("Compare").innerHTML = '<p class="textFooter">*color denotes what button was pressed*</p><div class="midBig"><button style="color:red" onclick="comp1()" class="quarter">Are ' + constant + ' and ' + num6 +' the same?</button> <button style="color:blue" onclick="comp2()" class="quarter">Are ' + constant + ' and \"' + str + '\"?</button><button style="color:orange" onclick="comp3()" class="quarter">Are ' + constant + ' and \"' + num5 + '\"?</button> <button style="color:black" onclick="comp4()" class="quarter">Are ' + constant + ' and ' + num1 +'?</button></div>';
    

}

//functions to display answer as plain text without repeating the text.
function comp1() {
    var Styled = "The answer is " + compare1;
    var SStyled = Styled.fontcolor("red");      // plus color of text to match the button.
    document.getElementById("seven").innerHTML = SStyled;
    }
function comp2() {
    var Styled = "The answer is " + compare2;
    var SStyled = Styled.fontcolor("blue");
    document.getElementById("seven").innerHTML = SStyled;
    }
function comp3() {
    var Styled = "The answer is " + compare3;
    var SStyled = Styled.fontcolor("orange");
    document.getElementById("seven").innerHTML = SStyled;
    }
function comp4() {
    var Styled = "The answer is " + compare4;
    var SStyled = Styled.fontcolor("black");
    document.getElementById("seven").innerHTML = SStyled;
    }
// use of the && operator

function randNum() {
    num6 = Math.round(Math.random() * 11);
    num7 = Math.round(Math.random() * 11);
    num8 = Math.round(Math.random() * 11);
    num9 = Math.round(Math.random() * 11);
    document.getElementById("randNum").innerHTML = "Your numbers are: <br><h1>" + num6 + ", " + num7 + ", " + num8 + ", " + num9 + '</h1><br><div class="bigger"><button class="big" onclick="And()">Use the \'and\' operation</button></div><div class="bigger"><button class="big" onclick="Or()">Use the \'Or\' operation</button></div>';
    document.getElementById("buttons").innerHTML = '<h1 onclick="randNum()" class="big">Get some numbers</h1>'
}

function And() {
    document.getElementById("randNum").innerHTML = '<div class="midBig"><button class="quarter" onclick="lessLess()">Compare ' + num6 + ' < ' + num7 + ' and ' + num8 + ' < ' + num9 + '</button><button class="quarter" onclick="moreLess()">Compare ' + num6 + ' > ' + num7 + ' and ' + num8 + ' < ' + num9 + '</button><button class="quarter" onclick="lessMore()">Compare ' + num6 + ' < '+ num7 + ' and ' + num8 + ' > ' + num9 + '</button><button class="quarter" onclick="moreMore()">Compare ' + num6 + ' > ' + num7 + ' and ' + num8 + ' > ' + num9 + '</button></div><br>';
}

function Or() {
    document.getElementById("randNum").innerHTML = '<div class="midBig"><button class="quarter" onclick="orlessLess()">Compare ' + num6 + ' < ' + num7 + ' or ' + num8 + ' < ' + num9 + '</button><button class="quarter" onclick="ormoreLess()">Compare ' + num6 + ' > ' + num7 + ' or ' + num8 + ' < ' + num9 + '</button><button class="quarter" onclick="orlessMore()">Compare ' + num6 + ' < '+ num7 + ' or ' + num8 + ' > ' + num9 + '</button><button class="quarter" onclick="ormoreMore()">Compare ' + num6 + ' > ' + num7 + ' or ' + num8 + ' > ' + num9 + '</button></div><br>';
}

// Functions that output the comparisons done by buttons

function lessLess() {
    var andComp1 = num6 < num7; 
    var andComp2 = num8 < num9; 
    var compare5 = num6 < num7 && num8 < num9;
    document.getElementById("randNum").innerHTML = "<h4> Since, " + num6 + " < " + num7 + " is " + andComp1 + ", and " + num8 + " < " + num9 + " is " + andComp2 +  ". The full Boolean expression \"" + num6 + " < " + num7 + " and " + num7 + " < " + num9 + "\" is " + compare5 + ". <br>If using the 'not' operation the answer will be " + !compare5 + "</h4>";
    document.getElementById("buttons").innerHTML = '<h1 onclick="numDis()" class="big">Use same numbers</h1><h1 onclick="randNum()" class="big">Get some new numbers</h1>';
}
function moreLess() {
    var andComp1 = num6 > num7; 
    var andComp2 = num8 < num9; 
    var compare5 = num6 > num7 && num8 < num9;
    document.getElementById("randNum").innerHTML = "<h4> Since, " + num6 + " > " + num7 + " is " + andComp1 + ", and " + num8 + " < " + num9 + " is " + andComp2 +  ". The full Boolean expression \"" + num6 + " > " + num7 + " and " + num7 + " < " + num9 + "\" is " + compare5 + ". <br>If using the 'not' operation the answer will be " + !compare5 + "</h4>";
    document.getElementById("buttons").innerHTML = '<h1 onclick="numDis()" class="big">Use same numbers</h1><h1 onclick="randNum()" class="big">Get some new numbers</h1>';

}
function lessMore() {
    var andComp1 = num6 < num7; 
    var andComp2 = num8 > num9; 
    var compare5 = num6 < num7 && num8 > num9;
    document.getElementById("randNum").innerHTML = "<h4> Since, " + num6 + " < " + num7 + " is " + andComp1 + ", and " + num8 + " > " + num9 + " is " + andComp2 +  ". The full Boolean expression \"" + num6 + " < " + num7 + " and " + num7 + " > " + num9 + "\" is " + compare5 + ". <br>If using the 'not' operation the answer will be " + !compare5 + "</h4>";
    document.getElementById("buttons").innerHTML = '<h1 onclick="numDis()" class="big">Use same numbers</h1><h1 onclick="randNum()" class="big">Get some new numbers</h1>';
}
function moreMore() {
    var andComp1 = num6 > num7; 
    var andComp2 = num8 > num9; 
    var compare5 = num6 > num7 && num8 > num9;
    document.getElementById("randNum").innerHTML = "<h4> Since, " + num6 + " > " + num7 + " is " + andComp1 + ", and " + num8 + " > " + num9 + " is " + andComp2 +  ". The full Boolean expression \"" + num6 + " > " + num7 + " and " + num7 + " > " + num9 + "\" is " + compare5 + ". <br>If using the 'not' operation the answer will be " + !compare5 + "</h4>";
    document.getElementById("buttons").innerHTML = '<h1 onclick="numDis()" class="big">Use same numbers</h1><h1 onclick="randNum()" class="big">Get some new numbers</h1>';

}

function orlessLess() {
    var andComp1 = num6 < num7; 
    var andComp2 = num8 < num9; 
    var compare5 = num6 < num7 || num8 < num9;
    document.getElementById("randNum").innerHTML = "<h4> Since, " + num6 + " < " + num7 + " is " + andComp1 + ", or " + num8 + " < " + num9 + " is " + andComp2 +  ". The full Boolean expression \"" + num6 + " < " + num7 + " or " + num7 + " < " + num9 + "\" is " + compare5 + ". <br>If using the 'not' operation the answer will be " + !compare5 + "</h4>";
    document.getElementById("buttons").innerHTML = '<h1 onclick="numDis()" class="big">Use same numbers</h1><h1 onclick="randNum()" class="big">Get some new numbers</h1>';
}
function ormoreLess() {
    var andComp1 = num6 > num7; 
    var andComp2 = num8 < num9; 
    var compare5 = num6 > num7 || num8 < num9;
    document.getElementById("randNum").innerHTML = "<h4> Since, " + num6 + " > " + num7 + " is " + andComp1 + ", or " + num8 + " < " + num9 + " is " + andComp2 +  ". The full Boolean expression \"" + num6 + " > " + num7 + " or " + num7 + " < " + num9 + "\" is " + compare5 + ". <br>If using the 'not' operation the answer will be " + !compare5 + "</h4>";
    document.getElementById("buttons").innerHTML = '<h1 onclick="numDis()" class="big">Use same numbers</h1><h1 onclick="randNum()" class="big">Get some new numbers</h1>';

}
function orlessMore() {
    var andComp1 = num6 < num7; 
    var andComp2 = num8 > num9; 
    var compare5 = num6 < num7 || num8 > num9;
    document.getElementById("randNum").innerHTML = "<h4> Since, " + num6 + " < " + num7 + " is " + andComp1 + ", or " + num8 + " > " + num9 + " is " + andComp2 +  ". The full Boolean expression \"" + num6 + " < " + num7 + " or " + num7 + " > " + num9 + "\" is " + compare5 + ". <br>If using the 'not' operation the answer will be " + !compare5 + "</h4>";
    document.getElementById("buttons").innerHTML = '<h1 onclick="numDis()" class="big">Use same numbers</h1><h1 onclick="randNum()" class="big">Get some new numbers</h1>';
}
function ormoreMore() {
    var andComp1 = num6 > num7; 
    var andComp2 = num8 > num9; 
    var compare5 = num6 > num7 || num8 > num9;
    document.getElementById("randNum").innerHTML = "<h4> Since, " + num6 + " > " + num7 + " is " + andComp1 + ", or " + num8 + " > " + num9 + " is " + andComp2 +  ". The full Boolean expression \"" + num6 + " > " + num7 + " or " + num7 + " > " + num9 + "\" is " + compare5 + ". <br>If using the 'not' operation the answer will be " + !compare5 + "</h4>";
    document.getElementById("buttons").innerHTML = '<h1 onclick="numDis()" class="big">Use same numbers</h1><h1 onclick="randNum()" class="big">Get some new numbers</h1>';

}




function numDis() {
    document.getElementById("randNum").innerHTML = "Your numbers are: <br><h1>" + num6 + ", " + num7 + ", " + num8 + ", " + num9 + '</h1><br><div class="bigger"><button class="big" onclick="And()">Use the \'and\' operation</button></div><div class="bigger"><button class="big" onclick="Or()">Use the \'Or\' operation</button></div>';
    document.getElementById("buttons").innerHTML = '<h1 onclick="randNum()" class="big">Get some numbers</h1>'
}







