var global = Math.round(Math.random() * 100);

function localvari() {
    var loc = 25;
    
}
function wrongfunc() {
    var test = global < loc;
    document.getElementById("disVar").innerHTML = test
}
var Time
function getDate() {
    Time = new Date().getHours();
    if(Time >= 12 == Time <= 17) {
        document.getElementById("before").innerHTML = "Good Afternoon sir or madam."
    }
    
    else if(Time >= 6 == Time < 12) {
        document.getElementById("before").innerHTML = "Good Morning sir or madam."
    }
    else{
        document.getElementById("before").innerHTML = "Goodnight sir or madam."
    }

}
var Gold = 10, arrowsOwned = 0, ShopKeepArrows = 100, arrowBundle = 10, arrowCost = 15;

function getMore() {
    document.getElementById("Gold").innerHTML = ++Gold +"g";
}

function enoughMoney() {
    if(ShopKeepArrows <= 0) {
        document.getElementById("Amount").innerHTML = "It seems I'm out of arrows laddy... <br>Well, maybe if you refresh the page it'll refresh my arrows."
    }
    else if(Gold >= 15) {
        document.getElementById("Amount").innerHTML = "*You have recieved 10 arrows*";
        Gold = Gold - arrowCost;
        document.getElementById("Gold").innerHTML = Gold + "g";
        arrowsOwned = arrowsOwned + arrowBundle;
        document.getElementById("inventory").innerHTML = "Inventory: <br><br>" + arrowsOwned + " arrows"
        ShopKeepArrows = ShopKeepArrows - arrowBundle;
        document.getElementById("Arrows").innerHTML = "Arrows in stock: " + ShopKeepArrows;
        
        
    }
    else{
        document.getElementById("Amount").innerHTML = "Aye, lad it looks as if you don't have the funds for these arrows. Please come back with more gold";
    }
}

function Player(fullName, str, dex, con, int, wis, luc) {
    this.Name = fullName
    this.Str = str;
    this.Dex = dex;
    this.Con = con;
    this.Int = int;
    this.Wis = wis;
    this.Luc = luc;
}
var Player1
var Enemy = new Player("Brink", 18, 10, 15, 8, 10, 15)

function makePlayer() {
    Player1 = new Player(document.getElementById("name").value, document.getElementById("str").value, document.getElementById("dex").value, document.getElementById("con").value, document.getElementById("int").value, document.getElementById("wis").value, document.getElementById("luc").value);
     if(Player1.Str >= 21) {
        document.getElementById("strength").innerHTML += '<br><h5 class="wrongValue">Please enter a value between 1 and 20</h5>';
     } 
     if(Player1.Dex >= 21) {
        document.getElementById("dexterity").innerHTML += '<br><h5 class="wrongValue">Please enter a value between 1 and 20</h5>';
     }   
     if(Player1.Con >= 21) {
        document.getElementById("constitution").innerHTML += '<br><h5 class="wrongValue">Please enter a value between 1 and 20</h5>';
     }   
     if(Player1.Int >= 21) {
        document.getElementById("intelligence").innerHTML += '<br><h5 class="wrongValue">Please enter a value between 1 and 20</h5>';
     }   
     if(Player1.Wis >= 21) {
        document.getElementById("wisdom").innerHTML += '<br><h5 class="wrongValue">Please enter a value between 1 and 20</h5>';
     }   
     if(Player1.Luc >= 21) {
        document.getElementById("luck").innerHTML += '<br><h5 class="wrongValue">Please enter a value between 1 and 20</h5>';
     }

    else{
        document.getElementById("yourCharacter").innerHTML = '<h1 class="bigger">Your Character: </h1><p><strong>Name: </strong>' +
        Player1.Name + '</p><p><strong>Strength: </strong>' + Player1.Str + '</p><p><strong>Dexterity: </strong>' + 
        Player1.Dex + '</p><p><strong>Constitution: </strong>' + Player1.Con + '</p><p><strong>Intelligence: </strong>' +
        Player1.Int + '</p><p><strong>Wisdom: </strong>' + Player1.Wis + '</p><p><strong>Luck: </strong>' + Player1.Luc + '</p> <div class="bigger"><button class="big>go battle</button></div>';
    }
}
