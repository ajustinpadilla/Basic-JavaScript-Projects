    var num1 = Math.round(Math.random() * 11);
    var num2 = Math.round(Math.random() * 11);
    var num3 = Math.round(Math.random() * 11);
    var num4 = Math.round(Math.random() * 11);

    document.getElementById("numbs").innerHTML = "These are your random numbers: " + num1 + ", " + num2 + ", " + num3 + ", and " + num4;


function Multi() {
    var product = num1 * num2;
    var quotient = num1 / num2;
    var expression = (((Math.pow(num1, num4)) + num2) / num3);
    var remainder = num2 % num4;
    document.getElementById("Math").innerHTML = "The product of " + num1 + " and " + num2 + " is " + product + ". <br>";
    document.getElementById("Math").innerHTML += " <br>The quotient of " + num1 + " and " + num2 + " is " + quotient + ". <br>";
    document.getElementById("Math").innerHTML += " <br>The expression " + num1 + " to the power of " + num4 + " plus " + num2 + " divided by " + num3 + " is  equal to " + expression + ". <br>";
    document.getElementById("Math").innerHTML += " <br>When " + num2 + " is divided by " + num4 + " you get a remainder of " + remainder + ". <br>";
    document.getElementById("Math").innerHTML +=  " <br>The negative version of the third expression is " + -expression + ". <br>";
}

function increase() {
    var health = num1++;
    document.getElementById("Math").innerHTML += "<br>Your health was " + health + ". <br>You increased health to " + num1 + ".";
}

function decrease() {
    var health = num1--;
    document.getElementById("Math").innerHTML += "<br>Your health was " + health + ".<br>You decreased health to " + num1 + ".";
}