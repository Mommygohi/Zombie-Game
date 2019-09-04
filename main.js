//-------------------------Create Gameboard-------------------------

function createTable(){
  createTDs(100);
  var table = createTRs(100);
  document.getElementById("everything").innerHTML = table;
  addAssets();
  updateView();
}

var tds = [];

function createTDs(){
  for(i = 1; i <= 100; i++){
    for(j = 1; j <= 100; j++){
      var id = "r-" + i + "-" + j;
      var element = "<td id='" + id + "'>" + "r-" + i + "-" + j + "</td>";
      tds.push(element);
    }
  }
}

var trs = [];

function createTRs(){
  for(i = 0; i < 100; i++){
    var tempTds = [];
    for(j = 0 + (100 * i); j < 100 + (100 * i); j++){
      var element = tds[j];
      tempTds.push(element);
    }
    tempTds = tempTds.join("");
    var element = "<tr>" + tempTds + "</tr>";
    trs.push(element);
  }
  return trs.join("");
}

//-------------------------Add objects to gameboard-------------------------

function addAssets(){
  //Build Houses
  build5x5("r-4-6", "r-10-10", "r-4-10", "none", "none", "r-5-8", "r-9-12"); //wallStart, door1, door2, door3, door4, corner1, corner2
  build5x5("r-6-16", "r-12-20", "r-9-17", "none", "none", "r-7-18", "r-11-22");
  build5x5("r-5-28", "r-8-29", "r-5-32", "none", "none", "r-6-30", "r-10-34");
  build10x10("r-1-40", "r-12-46", "r-12-47", "r-5-41", "r-6-41", "r-2-42", "r-11-51");
  buildRoadHorizontal("r-15-1", "r-20-54", "r-17-1", "r-17-54"); //topLeft, bottomRight, lineStart, lineEnd
  buildRoadVertical("r-1-56", "r-13-60", "r-1-58", "r-13-58");
  buildRoadIntersection("r-14-55", "r-20-61", "r-17-55", "r-17-61", "r-14-58", "r-20-58"); //topLeft, bottomRight, lineStart1, lineEnd1, lineStart2, lineEnd2
  buildRoadHorizontal("r-15-62", "r-20-76", "r-17-62", "r-17-76");
  buildRoadVertical("r-21-56", "r-100-60", "r-21-58" , "r-100-58");
  build5x5("r-5-65", "r-8-66", "r-8-72", "none", "none", "r-6-67", "r-10-71");
  digRiver("r-1-77", "r-100-87", 77, 87); //topLeft, bottomRight, lineStartCol, lineEndCol
  buildBridge("r-14-77", "r-20-87", 77, 87);
  buildRoadHorizontal("r-15-88", "r-20-100", "r-17-88", "r-88-100");
  build5x5("r-5-91", "r-8-92", "r-11-95", "none", "none", "r-6-93", "r-10-97");
  //Add Player
  document.getElementById("r-7-10").classList.add("player");
  document.getElementById("r-1-1").classList.add("zombie1");
  document.getElementById("r-14-55").classList.add("zombie2");
  document.getElementById("r-13-28").classList.add("zombie3");
}

//-------------------------Key Press Detection-------------------------

document.onkeydown = function(e) {
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }

  switch(e.keyCode) {
    case 37:
      move("left");
      break;
    case 38:
      move("up");
      break;
    case 39:
      move("right");
      break;
    case 40:
      move("down");
      break;
    case 69:
      openCrate();
      break;
    case 65:
      fire("left");
      break;
    case 87:
      fire("up");
      break;
    case 68:
      fire("right");
      break;
    case 83:
      fire("down");
      break;
  }
};

//-------------------------Player Movement and Collision-------------------------

function move(direction){
  var player_location = document.querySelector(".player").id;
  player_location = player_location.split("-");
  var row = player_location[1];
  var col = player_location[2];
  var obstacle = testForObstacles(direction, col, row);
  if(obstacle != "obstacle"){
    if(direction == "left"){
      col--;
    } else if(direction == "right"){
      col++;
    } else if(direction == "up"){
      row--;
    } else if(direction == "down"){
      row++;
    }
    var new_location = "r-" + row + "-" + col;
    player_location = document.querySelector(".player").id;
    document.getElementById(player_location).classList.remove("player");
    document.getElementById(new_location).classList.add("player");
    updateView();
  }
}

function testForObstacles(direction, col, row){
  if(direction == "left" && col == 1){
    return "obstacle";
  } else if(direction == "right" && col == 100){
    return "obstacle";
  } else if(direction == "up" && row == 1){
    return "obstacle";
  } else if(direction == "down" && row == 100){
    return "obstacle";
  }

  var walls = [];
  var crates = [];
  var sand = [];
  var bridge_barriers = [];
  var zombies = [
    document.querySelector(".zombie1").id,
    document.querySelector(".zombie2").id,
    document.querySelector(".zombie3").id
  ];
  var player = [document.querySelector(".player").id];
  for(i = 0; i < document.getElementsByClassName("wall").length; i++){
    walls.push(document.getElementsByClassName("wall")[i].id);
  }
  for(i = 0; i < document.getElementsByClassName("crate").length; i++){
    crates.push(document.getElementsByClassName("crate")[i].id);
  }
  for(i = 0; i < document.getElementsByClassName("sand").length; i++){
    sand.push(document.getElementsByClassName("sand")[i].id);
  }
  for(i = 0; i < document.getElementsByClassName("bridge_barrier").length; i++){
    bridge_barriers.push(document.getElementsByClassName("bridge_barrier")[i].id);
  }
  var obstacles = walls.concat(crates, zombies, player, sand, bridge_barriers);
  for(i = 0; i < obstacles.length; i++){
    var test = obstacles[i].split("-");
    var row2 = test[1];
    var col2 = test[2];
    if(direction == "left" && row == row2 && col - 1 == col2){
      return "obstacle";
    } else if(direction == "right" && row == row2 && col - col2 == -1){
      return "obstacle";
    } else if(direction == "up" && row - 1 == row2 && col == col2){
      return "obstacle";
    } else if(direction == "down" && row - row2 == -1 && col == col2){
      return "obstacle";
    }
  }
}

//-------------------------Update Viewport-------------------------

function updateView(){
  var player = document.querySelector(".player").id;
  var playerRow = player.split("-")[1];
  playerRow++
  playerRow--;
  var playerCol = player.split("-")[2];
  playerCol++
  playerCol--;

  for(i = -3; i <= 3; i++){
    for(j = -3; j <= 3; j++){
      var view = "v-" + (4 + i) + "-" + (4 + j);
      var map = "r-" + (playerRow + i) + "-" + (playerCol + j);
      var element = document.getElementById(map);
      var elem = window.getComputedStyle(element);
      if(document.getElementById(map).classList == "door" || document.getElementById(map).classList == "crate"){
        document.getElementById(view).style.backgroundImage = elem.backgroundImage;
        document.getElementById(view).style.backgroundColor = "default";
      } else {
        document.getElementById(view).style.backgroundColor = elem.backgroundColor;
        document.getElementById(view).style.backgroundImage = "none";
      }
    }
  }
}

//-------------------------Weapon Firing and Bullet Movement-------------------------
function fire(direction){
  var player = document.querySelector(".player").id;
  var playerRow = player.split("-")[1];
  playerRow++;
  playerRow--;
  var playerCol = player.split("-")[2];
  playerCol++;
  playerCol--;
  var bulletRow = playerRow;
  var bulletCol = playerCol;

  if(direction == "up"){
    bulletRow--;
  } else if(direction == "down"){
    bulletRow++;
  } else if(direction == "left"){
    bulletCol--;
  } else if(direction == "right"){
    bulletCol++;
  }
  if(testForObstacles(direction, playerCol, playerRow) != "obstacle"){
    document.getElementById("r-" + bulletRow + "-" + bulletCol).classList.add("bullet");
    moveBullet(direction, bulletRow, bulletCol);
  }
}

function moveBullet(direction, row, col){
  while(testForObstacles(direction, col, row) != "obstacle"){
    document.getElementById("r-" + row + "-" + col).classList.remove("bullet");
    updateView();
    if(direction == "up"){
      row--;
    } else if(direction == "down"){
      row++;
    } else if(direction == "left"){
      col--;
    } else if(direction == "right"){
      col++;
    }
    document.getElementById("r-" + row + "-" + col).classList.add("bullet");
    updateView();
  }
  setTimeout(function(){
    document.getElementById("r-" + row + "-" + col).classList.remove("bullet");
    updateView();
  }, 500);
}

//-------------------------Crate Opening and Item Collection-------------------------

var oldplayer;

function openCrate(){
  var newplayer = document.querySelector(".player").id;
  var row = newplayer.split("-")[1];
  var col = newplayer.split("-")[2];
  if(testForObstacles("left", col, row) == "obstacle" || testForObstacles("right", col, row) == "obstacle" || testForObstacles("up", col, row) == "obstacle" || testForObstacles("down", col, row) == "obstacle"){
    if(newplayer != oldplayer){
      var rand = Math.floor(Math.random() * 10);

      switch(rand){
        case 0:
          var item = "Gun";
          break;
        case 1:
          var item = "Gun";
          break;
        case 2:
          var item = "Heal";
          break;
        case 3:
          var item = "Heal";
          break;
        case 4:
          var item = "Heal";
          break;
        case 5:
          var item = "Ammo";
          break;
        case 6:
          var item = "Ammo";
          break;
        case 7:
          var item = "Ammo";
          break;
        case 8:
          var item = "Ammo";
          break;
        case 9:
          var item = "Ammo";
          break;
      }
      alert(item);
    }
    oldplayer = document.querySelector(".player").id;
  }
}
