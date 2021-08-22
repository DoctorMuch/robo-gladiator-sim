// Game States
// "WIN" - Player robot defeats all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


var fight = function(enemy) {
    console.log(enemy);
    while (playerInfo.health > 0 && enemy.health > 0) {
    // add fight or skip option
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "skip" || promptFight === "SKIP") {
        
            var confirmSkip = window.confirm("Are you sure you want to skip this battle?");
            
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip this fight. See ya!");
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerMoney", playerInfo.money);
                break;
            } 
        }
            
    // Subtract the value of 'playerAttack' from the value of 'enemy.health' and use that result to update the value in 'enemy.health' variable.
        let playerDamage =  randomNumber(playerInfo.attack -3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - playerDamage); 
    // Log a resulting message to the console so that we know it worked.
            console.log (
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
    // Check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                playerInfo.money = playerInfo.money + 20;
                console.log("playerMoney: ", playerInfo.money);
                break;
                
                } else {
                    window.alert(enemy.name + " still has " + enemy.health + " health left.");
                }
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth" and use that result to update the value in 'playerHealth' variable.
        let enemyDamage = randomNumber(enemy.attack - 3, enemy.attack);
    
        playerInfo.health = Math.max(0, playerInfo.health - enemyDamage);
    // Log a resulting message to the console so that we know it worked. 
            console.log (
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );
    // Check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
                } else {
                    window.alert(playerInfo.name + " still has " + playerInfo.health + " health remaining.");
                }
            }   
        }; 
    

var startGame = function () {
    // reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyObj = enemyInfo[i];
    
        pickedEnemyObj.health = randomNumber(40,60);
        // debugger;
        // call fight function with enemy-robot
        fight(pickedEnemyObj);
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            const storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            if (storeConfirm){
                shop();
            }
        }
        // } else {
        //     window.alert("You have lost your robot in battle! Game Over!");
        //     break;
        }    
    } endGame();
};

const endGame = function() {
    // if player is still alive, they win!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + "!");
    } else {
        window.alert("You've lost your robot in battle.");
    }
    
    const playAgainConfirm = window.confirm("Would you like to play again?");

    if  (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

const shop = function(){
    let shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice. "
        );
        switch (shopOptionPrompt) {
            case "REFILL":
            case "refill":
                playerInfo.refillHealth();
                break;
            
                case "UPGRADE":
            case "upgrade":
                playerInfo.upgradeAttack();
                break;
            
            case "LEAVE":
            case "leave":
                window.alert(`Nothing caught ${playerInfo.name}'s eye. Leaving the store.`)
                console.log(playerInfo.name + " left the store.")
                break;
            default: 
                window.alert("You did not pick a valid option. Try again.");

                shop();
                break;
        }
};

const randomNumber = function(min, max) {
    let value = Math.floor(Math.random()* (max - min + 1)) + min;

    return value;
};

const playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10, 
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if (this.money >= 15) {
            window.alert(`Restoring ${this.name}'s health for 15 dollars!`);
            this.health = 100;
            this.money -=15;
        } else {
            window.alert(`You don't have enough money for this item. Go beat some robots!`);
        }
    },
    
    upgradeAttack: function(){
        if (this.money >= 5){
            window.alert(`Upgrading ${this.name}'s attack for 5 dollars!`);
            this.attack += 3;
            this.money -= 5;
        } else {
            window.alert(`You don't have enough money for this item. Go beat some robots!`);
        }
    }
};

const enemyInfo = [
    {
    name: "Roborto",
    attack: randomNumber(10,14)
    },
    {
    name: "Amy Android",
    attack: randomNumber(10,14)
    },
    {
    name: "Robo Trumble",
    attack: randomNumber(10,14)
    }
];

startGame();

// fight();