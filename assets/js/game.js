var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var getPlayerName = function(){
    var name = "";
    while (name === "" || name === null){
        name = prompt ("What is your robot name?");
    }
    console.log("Your robot name is " + name);
    return name;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if (this.money >= 7){
            alert("Refilling player's health by 20 for 7 dollars");
            this.health += 20;
            this.money -= 7;
        }else{
            alert("You don't have enough money.");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7){
            alert("Upgrading player's attack by 6 for 7 dollars");
            this.attack += 6;
            this.money -= 7;
        }else{
            alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name:"Zayne",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy",
        attack: randomNumber(10,14)
    },
    {
        name: "Xu",
        attack: randomNumber(10,14)
    }
];
var fightOrSkip = function(){
    var promptFight = prompt ("Would you like to fight or skip?");
    if (promptFight === "" || promptFight === null){
        alert("You need to provide a valid answer. Try again.");
        return fightOrSkip();
    }
    promptFight = promptFight.toLocaleLowerCase();
    if (promptFight === "skip" || promptFight === "SKIP"){
        var confirmSkip = window.confirm("Are you sure you want to skip?");
    
        if (confirmSkip){
            alert(playerInfo.name + " has decided to skip this fight");
            playerInfo.money = Math.max(0,playerInfo.money - 10);
            return true;
        }
    }
    return false;
};
var fight = function(enemy){
    console.log(enemy);
    while (enemy.health > 0 && playerInfo.health > 0){
        if (fightOrSkip()){
            break;
        }
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log (playerInfo.name + " attacked " + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health reamining');
        if (enemy.health <= 0){
            window.alert(enemy.name + " has died!");
            playerInfo.money = Math.max(0,playerInfo.money + 20);
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(enemy.name + ' attacked ' + playerInfo.name + '. '+ playerInfo.name + ' now has '+ playerInfo.health + ' health remaining.');
        if (playerInfo.health <= 0){
            window.alert(playerInfo.name + " has died!");
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    } 
};

var endGame = function(){
    window.alert("The game has now ended. Let's see how you did!");
    if (playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm){
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiator! Come back soon.");
    }
};

var shop = function(){
    var shopOptionPrompt = window.prompt ("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    switch (shopOptionPrompt){
        case "refill":
        case " REFILL":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};

var startGame = function (){
    playerInfo.reset();
    for (var i = 0; i < enemyInfo.length; i++){
        if (playerInfo.health > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1){
                var storeConfirm = window.confirm("The fight is over, visit the store?");
                if (storeConfirm){
                    shop();
                }
            }
        }else{
            window.alert("You have lost your robot in battle! Game over!");
            break;
        }
    }
    endGame();
};

startGame();
//fight();