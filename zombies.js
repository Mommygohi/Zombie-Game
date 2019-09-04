setInterval(moveZom1, 1000);
setInterval(moveZom2, 1000);
setInterval(moveZom3, 1000);

//-------------------------Move Zombie1-------------------------

var health = 100;

function attack(playerRow, playerCol, zombieRow, zombieCol){
  if(((playerRow - 1 == zombieRow || playerRow + 1 == zombieRow) && playerCol == zombieCol) || ((playerCol - 1 == zombieCol || playerCol + 1 == zombieCol) && playerRow == zombieRow) && health > 0){
    health--;
    document.getElementById("health").style.width = health + "%";
  } else if(health <= 0){
    document.getElementById("body").innerHTML = "<center><h1>You Died</h1><br><h2>Refresh To Play Again</h2></center>";
    document.getElementById("body").style.marginTop = "15%";
  }
}

function moveZom1(){
  var player = document.querySelector(".player").id;
  var playerRow = player.split("-")[1];
  var playerCol = player.split("-")[2];
  playerRow++;
  playerRow--;
  playerCol++;
  playerCol--;

  var zombie = document.querySelector(".zombie1").id;
  var zombieRow = zombie.split("-")[1];
  var zombieCol = zombie.split("-")[2];
  zombieRow++;
  zombieRow--;
  zombieCol++;
  zombieCol--;

  var zombieRowDirection = Math.sign(playerRow - zombieRow);
  var zombieColDirection = Math.sign(playerCol - zombieCol);

  if(Math.abs(playerRow - zombieRow) <= 50 && Math.abs(playerCol - zombieCol) <= 50){
    if(zombieRowDirection == 1){
      if(testForObstacles("down", zombieCol, zombieRow) != "obstacle"){
        zombieRow += zombieRowDirection;
      }
    } else if(zombieRowDirection == -1){
      if(testForObstacles("up", zombieCol, zombieRow) != "obstacle"){
        zombieRow += zombieRowDirection;
      }
    } else if(zombieColDirection == 1){
      if(testForObstacles("right", zombieCol, zombieRow) != "obstacle"){
        zombieCol += zombieColDirection;
      }
    } else if(zombieColDirection == -1){
      if(testForObstacles("left", zombieCol, zombieRow) != "obstacle"){
        zombieCol += zombieColDirection;
      }
    }
    attack(playerRow, playerCol, zombieRow, zombieCol);
  } else {
    var rand = Math.floor(Math.random() * 3);
    switch(rand){
      case 0:
        if(testForObstacles("down", zombieCol, zombieRow) != "obstacle"){
          zombieRow++;
        }
        break;
      case 1:
        if(testForObstacles("up", zombieCol, zombieRow) != "obstacle"){
          zombieRow--;
        }
        break;
      case 2:
        if(testForObstacles("right", zombieCol, zombieRow) != "obstacle"){
          zombieCol++;
        }
        break;
      case 3:
        if(testForObstacles("left", zombieCol, zombieRow) != "obstacle"){
          zombieCol--;
        }
        break;
    }
  }

  document.getElementById(zombie).classList.remove("zombie1");
  document.getElementById("r-" + zombieRow + "-" + zombieCol).classList.add("zombie1");
  updateView();
}

//-------------------------Move Zombie2-------------------------

function moveZom2(){
  var player = document.querySelector(".player").id;
  var playerRow = player.split("-")[1];
  var playerCol = player.split("-")[2];
  playerRow++;
  playerRow--;
  playerCol++;
  playerCol--;

  var zombie = document.querySelector(".zombie2").id;
  var zombieRow = zombie.split("-")[1];
  var zombieCol = zombie.split("-")[2];
  zombieRow++;
  zombieRow--;
  zombieCol++;
  zombieCol--;

  var zombieRowDirection = Math.sign(playerRow - zombieRow);
  var zombieColDirection = Math.sign(playerCol - zombieCol);

  if(Math.abs(playerRow - zombieRow) <= 50 && Math.abs(playerCol - zombieCol) <= 50){
    if(zombieRowDirection == 1){
      if(testForObstacles("down", zombieCol, zombieRow) != "obstacle"){
        zombieRow += zombieRowDirection;
      }
    } else if(zombieRowDirection == -1){
      if(testForObstacles("up", zombieCol, zombieRow) != "obstacle"){
        zombieRow += zombieRowDirection;
      }
    } else if(zombieColDirection == 1){
      if(testForObstacles("right", zombieCol, zombieRow) != "obstacle"){
        zombieCol += zombieColDirection;
      }
    } else if(zombieColDirection == -1){
      if(testForObstacles("left", zombieCol, zombieRow) != "obstacle"){
        zombieCol += zombieColDirection;
      }
    }
    attack(playerRow, playerCol, zombieRow, zombieCol);
  } else {
    var rand = Math.floor(Math.random() * 3);
    switch(rand){
      case 0:
        if(testForObstacles("down", zombieCol, zombieRow) != "obstacle"){
          zombieRow++;
        }
        break;
      case 1:
        if(testForObstacles("up", zombieCol, zombieRow) != "obstacle"){
          zombieRow--;
        }
        break;
      case 2:
        if(testForObstacles("right", zombieCol, zombieRow) != "obstacle"){
          zombieCol++;
        }
        break;
      case 3:
        if(testForObstacles("left", zombieCol, zombieRow) != "obstacle"){
          zombieCol--;
        }
        break;
    }
  }

  document.getElementById(zombie).classList.remove("zombie2");
  document.getElementById("r-" + zombieRow + "-" + zombieCol).classList.add("zombie2");
  updateView();
}

//-------------------------Move Zombie3-------------------------

function moveZom3(){
  var player = document.querySelector(".player").id;
  var playerRow = player.split("-")[1];
  var playerCol = player.split("-")[2];
  playerRow++;
  playerRow--;
  playerCol++;
  playerCol--;

  var zombie = document.querySelector(".zombie3").id;
  var zombieRow = zombie.split("-")[1];
  var zombieCol = zombie.split("-")[2];
  zombieRow++;
  zombieRow--;
  zombieCol++;
  zombieCol--;

  var zombieRowDirection = Math.sign(playerRow - zombieRow);
  var zombieColDirection = Math.sign(playerCol - zombieCol);

  if(Math.abs(playerRow - zombieRow) <= 50 && Math.abs(playerCol - zombieCol) <= 50){
    if(zombieRowDirection == 1){
      if(testForObstacles("down", zombieCol, zombieRow) != "obstacle"){
        zombieRow += zombieRowDirection;
      }
    } else if(zombieRowDirection == -1){
      if(testForObstacles("up", zombieCol, zombieRow) != "obstacle"){
        zombieRow += zombieRowDirection;
      }
    } else if(zombieColDirection == 1){
      if(testForObstacles("right", zombieCol, zombieRow) != "obstacle"){
        zombieCol += zombieColDirection;
      }
    } else if(zombieColDirection == -1){
      if(testForObstacles("left", zombieCol, zombieRow) != "obstacle"){
        zombieCol += zombieColDirection;
      }
    }
    attack(playerRow, playerCol, zombieRow, zombieCol);
  } else {
    var rand = Math.floor(Math.random() * 3);
    switch(rand){
      case 0:
        if(testForObstacles("down", zombieCol, zombieRow) != "obstacle"){
          zombieRow++;
        }
        break;
      case 1:
        if(testForObstacles("up", zombieCol, zombieRow) != "obstacle"){
          zombieRow--;
        }
        break;
      case 2:
        if(testForObstacles("right", zombieCol, zombieRow) != "obstacle"){
          zombieCol++;
        }
        break;
      case 3:
        if(testForObstacles("left", zombieCol, zombieRow) != "obstacle"){
          zombieCol--;
        }
        break;
    }
  }

  document.getElementById(zombie).classList.remove("zombie3");
  document.getElementById("r-" + zombieRow + "-" + zombieCol).classList.add("zombie3");
  updateView();
}
