var playerName = window.prompt("What is your robot name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roboto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt('Woudl you like to FIGHT or SKIP this fight?');
    if (prompFight === 'FIGHT' || promptFight === 'fight'){

        enemyHealth = enemyHealth - playerAttack;
        console.log (playerName + " attacked " + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health reamining');
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + ' attacked ' + playerName + '. '+ playerName + ' now has '+ playerHealth + ' health remaining.');
        if (playerHealth <= 0){
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight === 'skip' || promptFight === "SKIP"){
        window.alert(playerName + ' has chosen to skip the fight!');
    } else{
        window.alert("You need to choose a valid option. Try again!");
    }
};

fight();