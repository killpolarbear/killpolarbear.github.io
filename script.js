function asr() {
    document.getElementById("Weapon").innerHTML = "Weapon: Assault Rifle";
    document.getElementById("Outcome").innerHTML = "Outcome: Bear gets obliterated";
}

function kk() {
    document.getElementById("Weapon").innerHTML = "Weapon: Knife"; 
    document.getElementById("Outcome").innerHTML = "Outcome: You experience a slow painful death as the bear consumes you alive.";
}

function rev() {
    prob = Math.random() 
    document.getElementById("Weapon").innerHTML = "Weapon: Revolver";
    if (prob <= 0.1){
        document.getElementById("Outcome").innerHTML = "Outcome: You manage to land an extremely precise shot that took out the bear."
    }
    else {
        document.getElementById("Outcome").innerHTML = "Outcome: The revolver remains, your hand does not."
    }
}

function coke() {
    document.getElementById("Weapon").innerHTML = "";
    document.getElementById("Outcome").innerHTML = "<img src=\"Bear.png\"> </img>";
}

function wds() {
    document.getElementById("Weapon").innerHTML = "Weapon: Wooden Stick";
    document.getElementById("Outcome").innerHTML = "Outcome: Retard";
}