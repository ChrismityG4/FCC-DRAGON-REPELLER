//LET VARIABLES //let(VARIABLE SET TO 'text') xp(INITIALIZED TO 'number')
let xp = 0;  
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"]; //[](ARRAY FOR MULTIPLE OPTIONS) ""(STRING TO INPUT TEXT)


//BUTTON CONST ARGUMENTS 
//const(A CONSTANT) red text(VARIABLE) document(TARGETS THE HTML) .querySelector(TAKES CSS'#' SELECTOR AS ARGUMENT)
const button1 = document.querySelector("#button1") 
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")


//TEXT & STATS CONST ARGUMENTS
//const(A CONSTANT) red text(VARIABLE) document(TARGETS THE HTML) .querySelector(TAKES CSS'#' SELECTOR AS ARGUMENT)
const text = document.querySelector("#text")
const xpText = document.querySelector("#xpText")
const healthText = document.querySelector("#healthText")
const goldText = document.querySelector("#goldText")
const monsterStats = document.querySelector("#monsterStats")
const monsterName = document.querySelector("#monsterName")
const monsterHealthText = document.querySelector("#monsterHealth")


const locations = [ //const(A CONSTANT) red text(VARIABLE) [](ARRAY FOR MULTIPLE OPTIONS) 
    { //{}(INDICATES OBJECTS) 
        name: "town square", //(key: "value")(USED TO ACCESS AND MODIFY VALUE)
        "button text": ["Go to store", "Go to cave", "Fight dragon"], //"property":array[functions(""-strings)]
        "button functions": [goStore, goCave, fightDragon], //property:variables
        "text": "You are in the town square. You see a sign that says \"Store\"." //property:string
    },
    { //{}(INDICATES OBJECTS)
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown], 
        "text": "You enter the store." 
    },
    { //{}(INDICATES OBJECTS)
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        "text": "You enter the cave. You see some monsters."
    },
];

const weapons = [
    {
        name: "stick",
        "power": 5
    },
    {
        name: "dagger",
        "power": 30
    },
    {
        name: "claw hammer",
        "power": 50
    },
    {
        name: "sword",
        "power": 100
    },
];


//INITIALIZE BUTTONS
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) { // location(PARAMETER)
    button1.innerText = location["button text"][0]; //BUTTON text CHANGES TO .innerText "" [0]="button text" 1ST ARGUMENT   
    button2.innerText = location["button text"][1];      
    button3.innerText = location["button text"][2]; 
    button1.onclick = location["button functions"][0]; //.onclick(ON CLICK OF BUTTON GO TO function array []) [0]="button function" FIRST ARGUMENT
    button2.onclick = location["button functions"][1]; 
    button3.onclick = location["button functions"][2]; 
    text.innerText = location.text; //TEXT BOX CHANGES TO .innerText of location "text" property
}

//function(RUNS SECTION OF CODE AT SPECIFIC TIMES)
function goTown() {//SHOWS BELOW OPTIONS ONCE button1.onclick =() SELECTED BY USER)
    update(locations[0]); //update(call) PASS ARGUMENT(locations) INTO THE update(call) [0]=FIRST ARGUMENT(town square)
}

function goStore() { //SHOWS BELOW OPTIONS ONCE button1.onclick =() SELECTED BY USER)
    update(locations[1]); //update(call) PASS ARGUMENT(locations) INTO THE update(call) [1]=2ND ARGUMENT(store)
}

function goCave() {
    update(locations[2]);
}

function fightDragon() {
    console.log("Fighting dragon.");
}

function buyHealth() { //MATH OF BUYING HEALTH FUNCTION BELOW
    if (gold >= 10) {
        gold -= 10; //SHORTHAND FOR (gold = gold -10) COMPOUND ASSIGNMENT
        health += 10; //SHORTHAND FOR (health = health +10) COMPOUND ASSIGNMENT
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "You do not have enough gold to buy health."
    }
}

function buyWeapon() {
    if (currentWeapon < weapons.length - 1) { //IF CURRENT WEAPON IS SMALLER THAN .length OF weapons array -1 COMPENSATES FOR INDEX STARTING AT 0
        if (gold >= 30) {
            gold-=30;
            currentWeapon ++ ; //++(INCREMENTING COMPOUND ASSIGNMENT)
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name; //variable = array[variable/index]
            text.innerText = "You now have a " + newWeapon + "."; //.innerText DISPLAYS MESSAGE SPECIFYING NAME OF NEW WEAPON
            inventory.push(newWeapon); //PUSHES newWeapon TO USER inventory
            text.innerText += " In your inventory you have: " + inventory;
        } else {
            text.innerText = "You do not have enough gold to buy a weapon.";
        }
    } else {
        text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }
}

function sellWeapon() {
    if (inventory.length > 1){ //leNgth OF INVENTORY MUST BE GREATER THAN 1
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift(); //.shift (DISPOSES OF WEAPON AT START OF ARRAY (STICK))
        text.innerText = "You sold a " + currentWeapon + ".";
        text.innerText += " In your inventory you have: " + inventory;
    } else {
        text.innerText = "Don't sell your only weapon!"
    }
}

function fightSlime() {
}

function fightBeast() {
}