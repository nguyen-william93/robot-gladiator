var playerName = window.prompt("What is your robot name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyNames = ["Roboto", "Amy Android", "Robo Trumble"];

var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 10;

var fight = function(enemyName){
    var promptFight = window.prompt('Woudl you like to FIGHT or SKIP this fight?');
    while (enemyHealth > 0 && playerHealth > 0){
        if (promptFight === 'FIGHT' || promptFight === 'fight'){
            enemyHealth = enemyHealth - playerAttack;
            console.log (playerName + " attacked " + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health reamining');
            if (enemyHealth <= 0){
                window.alert(enemyName + " has died!");
                playerMoney = playerMoney + 20;
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
            playerHealth = playerHealth - enemyAttack;
            console.log(enemyName + ' attacked ' + playerName + '. '+ playerName + ' now has '+ playerHealth + ' health remaining.');
            if (playerHealth <= 0){
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        } else if (promptFight === 'skip' || promptFight === "SKIP"){
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip){
                window.alert(playerName + " has decided to skip this fight.Goodbye");
                playerMoney = playerMoney - 10;
                console.log ("playerMoney", playerMoney);
                break;
            }
        }
    }
};

for (var i = 0; i < enemyNames.length; i++){
    var pickEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickEnemyName);
}
//fight();