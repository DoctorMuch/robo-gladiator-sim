var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// "WIN" - Player robot defeats all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var fight = function(enemyName) {
   while (playerHealth > 0 && enemyHealth > 0) {
    // add fight or skip option
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "skip" || promptFight === "SKIP") {
        
            var confirmSkip = window.confirm("Are you sure you want to skip this battle?");
            
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip this fight. See ya!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            } 
        }
            
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in 'enemyHealth' variable.
            enemyHealth = enemyHealth - playerAttack; 
    // Log a resulting message to the console so that we know it worked.
            console.log (
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
    // Check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                playerMoney = playerMoney + 20;
                console.log("playerMoney", playerMoney);
                break;
                
                } else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth" and use that result to update the value in 'playerHealth' variable.
            playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so that we know it worked. 
            console.log (
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
    // Check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
                } else {
                    window.alert(playerName + " still has " + playerHealth + " health remaining.");
                }
            }   
        }; 
    

var startGame = function () {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
    
        enemyHealth = 50;
    
        // debugger;
        // call fight function with enemy-robot
        fight(pickedEnemyName);
   
        // } else {
        //     window.alert("You have lost your robot in battle! Game Over!");
        //     break;
        }    
    } endGame();
};

const endGame = function() {
    // if player is still alive, they win!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + "!");
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

startGame();

// fight();