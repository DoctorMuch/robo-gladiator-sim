// Game States
// "WIN" - Player robot defeats all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

const randomNumber = function(min, max) {
  let value = Math.floor(Math.random()* (max - min) + min);

  return value;
};

var fightOrSkip = function(){
  
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  if (promptFight === "" || promptFight === null) {
      window.alert("You need to provide a valid answer! Please try again.");
      return fightOrSkip();
    }
    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you want to skip this battle?");
      if (confirmSkip) {
        window.alert(playerInfo.name + " has chosen to skip this fight. See ya!");
       
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        // console.log("playerMoney", playerInfo.money);
        return true;
      } 
    } 
    return false;
  };

var fight = function(enemy) {
  var isPlayerTurn = true;
  
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }

  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {  
      if (fightOrSkip()) {
        break;  
      }
  
      var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
        
      // Subtract the value of 'playerAttack' from the value of 'enemy.health' and use that result to update the value in 'enemy.health' variable.     
      enemy.health = Math.max(0, enemy.health - damage); 
      // Log a resulting message to the console so that we know it worked.
      console.log (
        playerInfo.name + 
        " attacked " + 
        enemy.name + 
        ". " + 
        enemy.name + 
        " now has " + 
        enemy.health + 
        " health remaining."
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
    } else {
      var damage = randomNumber(enemy.attack -3, enemy.attack);   
      // Subtract the value of 'enemyAttack' from the value of 'playerHealth" and use that result to update the value in 'playerHealth' variable.
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      // Log a resulting message to the console so that we know it worked. 
      console.log (
        enemy.name + 
        " attacked " + 
        playerInfo.name + 
        ". " + 
        playerInfo.name + 
        " now has " + 
        playerInfo.health + 
        " health remaining."
      );
     // Check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health remaining.");
      }
    }   
    isPlayerTurn = !isPlayerTurn;
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
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 to 'REFILL', 2 to 'UPGRADE', or 3 to 'LEAVE' to make a choice. "
        );
        // could also use parseInt() as suggested in the module
        shopOptionPrompt = Number(shopOptionPrompt);
        switch (shopOptionPrompt) {
            case 1:
                playerInfo.refillHealth();
                break;
            
            case 2:
                playerInfo.upgradeAttack();
                break;
            
            case 3:
                window.alert(`Nothing caught ${playerInfo.name}'s eye. Leaving the store.`)
                console.log(playerInfo.name + " left the store.")
                break;
            default: 
                window.alert("You did not pick a valid option. Try again.");

                shop();
                break;
        }
};

var getPlayerName = function (){
  var name = "";
  
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  console.log("Your robot's name is " + name + ".");
  return name;
};

const playerInfo = {
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
        if (this.money >= 15) {
            window.alert(`Restoring ${this.name}'s health for 12 dollars!`);
            this.health = Math.round((100-playerInfo.health)/2 + playerInfo.health);
            this.money -=12;
        } else {
            window.alert(`You don't have enough money for this item. Go beat some robots!`);
        }
    },
    
    upgradeAttack: function(){
        if (this.money >= 5){
            window.alert(`Upgrading ${this.name}'s attack by 5 points for 8 dollars!`);
            this.attack += 5;
            this.money -= 8;
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
