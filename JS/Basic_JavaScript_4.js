function objects() {
    var door = {
        Type:"entrance",
        color: "black",
        color:"white",
        lock:"Bolt and Doorknob locks",
        material:"wood",
        open:"locked",
        degreeOpen: 0,
        health: 100,
        
    };
    document.getElementById("Dictionary").innerHTML += "<br>The " + door.color + " door is " + door.open;
    delete door.health;
    document.getElementById("Dictionary").innerHTML += "<br> The health of the door has been deleted. It is now " + door.health;
}