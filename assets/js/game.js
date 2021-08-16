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
   window.alert("Welcome to Robot Gladiators!") ;
    // add fight or skip option
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "fight" || promptFight === "FIGHT") {
            
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in 'enemyHealth' variable.
            enemyHealth = enemyHealth - playerAttack; 
    // Log a resulting message to the console so that we know it worked.
            console.log (
                playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
            );
    // Check enemy's health
                if (enemyHealth <= 0) {
                    window.alert(enemyNames[i] + " has died!");
                }
                else {
                    window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
                }
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth" and use that result to update the value in 'playerHealth' variable.
            playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so that we know it worked. 
            console.log (
                enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
    // Check player's health
                if (playerHealth <= 0){
                    window.alert(playerName + " has died!");
                }
                else {
                    window.alert(playerName + " still has " + playerHealth + " health remaining.");
                }
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you want to skip this battle?");
                if (confirmSkip) {
                    window.alert(playerName + " has chosen to skip this fight. See ya!");
                    playerMoney = playerMoney - 2;
                } else {
                    fight();
                }
        } else {
            window.alert("You need to choose a valid option. Try again!");
        }
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

// fight();