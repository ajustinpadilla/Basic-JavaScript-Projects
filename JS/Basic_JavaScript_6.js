function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color, Passengers) {
    this.Vehicle_Make = Make;
    this.vehicle_Model = Model;
    this.vehicle_Year = Year;
    this.vehicle_Color = Color;
    this.vehicle_Passengers = Passengers    // New use of 'this'
}

var Jack = new Vehicle("dodge", "viper", 2020, "Red", 2);
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black", 5);
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard", 5);
var Angel = new Vehicle("Toyota", "Corolla", 2013, "Black", 5); // New use of 'new'
function cars() {
    document.getElementById("car").innerHTML = 
    "Erik drives a " + Erik.vehicle_Color + "-colored " + Erik.vehicle_Model + 
    " manufactured in " + Erik.vehicle_Year;
}

function myCar() {
    document.getElementById("New_and_This").innerHTML = "My car is a " + Angel.vehicle_Color + " " + Angel.Vehicle_Make + " " + Angel.vehicle_Model + ". It seats " + Angel.vehicle_Passengers + " people and I got it in " + Angel.vehicle_Year + " new.";
}

// defining what Quest is
function Quest(Type, Name, Level, Experience, Item) {
    function mainQuest() {
        var main = (Type == true) ? "Main Quest":"Side Quest";
        return main 
    }
    this.questType = mainQuest();
    this.questName = Name;
    this.questLevel = Level;
    this.questExperience = Experience;
    this.questItem = Item;
    
}

// making some Quest
var ringToMordor = new Quest(true, "Take the ring to Mordor", 25, 100000, "none");
var killBalrog = new Quest(false, "Kill the Balrog", 8, 15000, "Balrog horn");

function quest() {
    document.getElementById("Quest-chosen").innerHTML = 'Your choices are: <br><div id="quest1" class="bigger"><button class="big" onclick="ringToMorder()">' +
    ringToMordor.questName + '</button></div><br><div id="quest2" class="bigger"><button class="big" onclick="Balrog()">' + killBalrog.questName + "</button></div>";
    
}

function ringToMorder() {
    document.getElementById("quest1").innerHTML = '<div class="box"><h1>' +
    ringToMordor.questType + '</h1><div class="imageWrap"><img src="./img/mordor.jpg" alt="Mordor pic"></div><h2>' +
    ringToMordor.questName + '</h2><p><strong>Required level: </strong>' + ringToMordor.questLevel +
    '<br><strong>Exp: </strong>' + ringToMordor.questExperience + '<br><strong>Item: </strong>' +
    ringToMordor.questItem + '</p><div class="bigger"><button class="big" onclick="AcceptRing()">Accept</button></div>' +
    '<div class="bigger"><button class="big" onclick="DeclineRing()">Decline</button></div></div></div>';
}

function Balrog() {
    document.getElementById("quest2").innerHTML = '<div class="box"><h1>' +
    killBalrog.questType + '</h1><div class="imageWrap"><img src="./img/Balrog.jpeg" alt="Balrog pic"></div><h2>' +
    killBalrog.questName + '</h2><p><strong>Required level: </strong>' + killBalrog.questLevel +
    '<br><strong>Exp: </strong>' + killBalrog.questExperience + '<br><strong>Item: </strong>' +
    killBalrog.questItem + '</p><div class="bigger"><button class="big" onclick="AcceptBalrog()">Accept</button></div>' +
    '<div class="bigger"><button class="big" onclick="DeclineBalrog()">Decline</button></div></div>';
}

function AcceptRing() {
    document.getElementById("Quest-chosen").innerHTML = "<h1>You have accepted the " + ringToMordor.questType + " " + ringToMordor.questName + ".<h1>";
}
function AcceptBalrog() {
    document.getElementById("Quest-chosen").innerHTML = "<h1>You have accepted the " + killBalrog.questType + " " + killBalrog.questName + ".<h1>";
}
function DeclineRing() {
    document.getElementById("quest1").innerHTML = "<h1>You have declined the " + ringToMordor.questType + " " + ringToMordor.questName + ".<h1>";
}
function DeclineBalrog() {
    document.getElementById("quest2").innerHTML = "<h1>You have declined the " + killBalrog.questType + " " + killBalrog.questName + ".<h1>";
}
