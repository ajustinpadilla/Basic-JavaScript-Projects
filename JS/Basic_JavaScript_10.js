
    const potionHealing = 25

function healPotion(currentHealth, totalHealth) {
    if(currentHealth <= 0 ) {
        currentHealth = 0
    }
    let healthNow = currentHealth;
    while (!(currentHealth == totalHealth)) {
        currentHealth++;
        missingHealth = totalHealth - currentHealth;
        
        document.getElementById("currentHealth").style.width = healthPercent(totalHealth, missingHealth) + "%";
        document.getElementById("missingHealth").style.width = healthPercent(totalHealth, currentHealth) + "%";
        if(currentHealth === (healthNow + potionHealing)){
            break;
        }
    }
    Myhealth = currentHealth;
}

function sModifier(n) {
    var mod = (n - 10) / 2;
    return mod;
}

// Making a Character

function Player(fullName, str, dex, con, int, wis, luc) {
    this.Name = fullName
    this.Str = str;
    this.Dex = dex;
    this.Con = con;
    this.Int = int;
    this.Wis = wis;
    this.Luc = luc;
    this.Health = Math.floor((sModifier(con) + Math.ceil(Math.random() * 22 ) + 8));
}

var Player1;                    
const Enemy = new Player("Brink", 18, 10, 15, 8, 10, 15,);

// creating a Sword object using the let keyword
let sword = new weapon("Common longsword", 10, 100, 25);


function makePlayer() {
    Player1 = new Player(document.getElementById("name").value, document.getElementById("str").value, document.getElementById("dex").value, document.getElementById("con").value, document.getElementById("int").value, document.getElementById("wis").value, document.getElementById("luc").value);
    
    //adding an Inventory to the Player
    Player1.Inventory = items;
    Player1.Weapon = sword;

    // statements if you input a value over 20 for a stat
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
        Player1.Int + '</p><p><strong>Wisdom: </strong>' + Player1.Wis + '</p><p><strong>Luck: </strong>' + Player1.Luc + 
        '</p><div Id="Inventory" class="bigger"><button onclick="Inventory()" class="big">Inventory</button></div>';
    }


}

// items array
var items = ["Bedroll", "Tinder", "sword", "Rations",  "Flute"];
var i;
var Content = "";

// inventory open/close button
function Inventory() {
    for (i = 0; i < (items.length -1) ; i++) {
        Content += items[i] + ", ";
    }
        Content += items[4]
        document.getElementById("Inventory").innerHTML = "Inventory: " + Content + '<br><div class="bigger"><button  onclick="closeInventory()" class="big">Close Inventory</button></div>';
}

function closeInventory() {
    document.getElementById("Inventory").innerHTML = '<div Id="Inventory" class="bigger"><button onclick="Inventory()" class="big">Inventory</button></div>'

}

//random stats button

function randomStats() {
    document.getElementById("str").value = Math.round(Math.random() * 7) + Math.round(Math.random() * 7) + Math.round(Math.random() * 7);
    document.getElementById("dex").value = Math.round(Math.random() * 7) + Math.round(Math.random() * 7) + Math.round(Math.random() * 7);
    document.getElementById("con").value = Math.round(Math.random() * 7) + Math.round(Math.random() * 7) + Math.round(Math.random() * 7);
    document.getElementById("int").value = Math.round(Math.random() * 7) + Math.round(Math.random() * 7) + Math.round(Math.random() * 7);
    document.getElementById("wis").value = Math.round(Math.random() * 7) + Math.round(Math.random() * 7) + Math.round(Math.random() * 7);
    document.getElementById("luc").value = Math.round(Math.random() * 7) + Math.round(Math.random() * 7) + Math.round(Math.random() * 7);
}


// creating the weapon and armor objects
function weapon (name, damage, durability, cost) {
    this.Name = name;
    this.Dmg = damage;
    this.Dur = durability;
    this.Cost = cost;
}

function armor (name, armor, resistence, type, durability) {
    this.Name = name;
    this.AC = armor;
    this.res = resistence;
    this.type = type;
    this.durability = durability;
}


//creating leather armor
const LeathAr = new armor("Leather Armor", 5, 0, "light", 25);
// Adding leather armor and a dagger to the const Enemy
Enemy.Armor = LeathAr;
Enemy.Weapon = sword;

var EnArmor = Enemy.Armor.AC + Math.floor(sModifier(Enemy.Con));


var EnHealth = Enemy.Health;
function Battle() {
    Player1.Armor = Math.floor(sModifier(Player1.Con));
    MaxHealth = Player1.Health;
    Myhealth = MaxHealth;
    let currentHealth = Myhealth - potionHealing;
    document.getElementById("Fight").innerHTML = '<div class="container"><h1 class="bigger">'+ Enemy.Name +'</h1><div class="imageWrap"><img src="./img/orc.jpg" alt="' + Enemy.Name + '" name="' + Enemy.Name + '"></div><p id="EnemyStats">Health:'+ EnHealth +' Attack:5-9 Defense: ' + EnArmor + '</p><div class="bigger"><p id="dmgcal"></p><button onclick="attack()" class="big">Attack</button><button class="big" onclick="healPotion('+ currentHealth + ', ' + Myhealth + ')">Heal</button></div></div>';
    healPotion(currentHealth, Myhealth);
}

function Dmg(n, x) {
    var Damage = sModifier(n) + x;
    return Damage;
}

var MaxHealth
var Myhealth
function attack() {
    
    Player1.Dmg = Dmg(Player1.Str, Player1.Weapon.Dmg); //calling the Dmg function to total damage done
    Enemy.Dmg = Dmg(Enemy.Str, Enemy.Weapon.Dmg);
    var totDmg = dmgcal(EnArmor, Player1.Dmg);
    EnHealth = EnHealth - totDmg;
    var dmgTaken = dmgcal(Player1.Armor, Enemy.Dmg);
    Myhealth = Myhealth - totDmg;
    document.getElementById("currentHealth").style.width = (100 - healthPercent(MaxHealth, Myhealth)) + "%";
    document.getElementById("missingHealth").style.width = healthPercent(MaxHealth, Myhealth) + "%";
    if (Myhealth <= 0){
        document.getElementById("Fight").innerHTML = '<h1 class="bigger">YOU HAVE PERRISHED!!</H1><br><p>Please refesh the page</p>'
        
    }

    else {
        if (EnHealth < 20 && EnHealth > 0) {
            document.getElementById("dmgcal").innerHTML = "Your " + Player1.Weapon.Name + " stabs the orc dealing " + totDmg +" dmg. <br>The Orc's " + Enemy.Weapon.Name + " strikes you dealing "  + dmgTaken + " dmg.";
            document.getElementById("EnemyStats").innerHTML = 'Health:'+ EnHealth +' Attack:5-9 Defense: ' + EnArmor;
        }
        else if (EnHealth >= 20) {
            document.getElementById("dmgcal").innerHTML = "Your " + Player1.Weapon.Name + " stabs the orc dealing " + totDmg +" dmg.<br>The orc laughs at you.";
            document.getElementById("EnemyStats").innerHTML = 'Health:'+ EnHealth +' Attack:5-9 Defense: ' + EnArmor;

        }
        else {
            document.getElementById("Fight").innerHTML = '<h1 class="bigger">You have killed the orc and recieved 100g<h1>';
        }
    }
    
   
    function dmgcal(defArmor, Attacking) {
        var Dmg = Math.round(Attacking - defArmor);
        return Math.round(Dmg);
    }



}

function healthPercent(total,y) {
    let n = 100         // Use of the let keyword
    var percent = Math.round(((total - y)/ total) * n);
    return percent;
}

function takeHealthPot(){
    healPotion(Myhealth, MaxHealth);
}