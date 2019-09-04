//-------------------------Build House-------------------------

var array = [];

function build5x5(wallStart, door1, door2, door3, door4, corner1, corner2){
  array = [];
  addWalls5x5(wallStart);
  addDoors(door1, door2, door3, door4);
  addFloors(corner1, corner2);
  addCrates(corner1, corner2);
}

function build10x10(wallStart, door1, door2, door3, door4, corner1, corner2){
  array = [];
  addWalls10x10(wallStart);
  addDoors(door1, door2, door3, door4);
  addFloors(corner1, corner2);
  addCrates(corner1, corner2);
  addCrates(corner1, corner2);
  addCrates(corner1, corner2);
}

//-------------------------Add Walls-------------------------

function addWalls10x10(startTop){
  var row = startTop.split("-")[1];
  var col = startTop.split("-")[2];
  //top row
  horizontal10(row, col);
  row++
  row += 10;
  //bottom row
  horizontal10(row, col);
  row -= 12;
  col++;
  //left row
  vertical10(row, col);
  col += 11;
  //right row
  vertical10(row, col);
  for(i = 0; i < array.length; i++){
    document.getElementById(array[i]).classList = "wall";
  }
}

function addWalls5x5(startTop){
  var row = startTop.split("-")[1];
  var col = startTop.split("-")[2];
  //top row
  horizontal5(row, col);
  row++;
  row += 5;
  //bottom row
  horizontal5(row, col);
  row -= 7;
  col++;
  //left row
  vertical5(row, col);
  col += 6;
  //right row
  vertical5(row, col);
  for(i = 0; i < array.length; i++){
    document.getElementById(array[i]).classList = "wall";
  }
}

function horizontal10(row, col){
  for(i = 0; i < 12; i++){
    col++;
    var spot = "r-" + row + "-" + col;
    array.push(spot);
  }
}

function horizontal5(row, col){
  for(i = 0; i < 7; i++){
    col++;
    var spot = "r-" + row + "-" + col;
    array.push(spot);
  }
}

function vertical10(row, col){
  for(i = 0; i < 11; i++){
    row++;
    var spot = "r-" + row + "-" + col;
    array.push(spot);
  }
}

function vertical5(row, col){
  for(i = 0; i < 6; i++){
    row++;
    var spot = "r-" + row + "-" + col;
    array.push(spot);
  }
}

//-------------------------Add Floors-------------------------

function addFloors(topLeft, bottomRight){
  var minCol = topLeft.split("-")[2];
  minCol++;
  minCol--;
  var maxCol = bottomRight.split("-")[2];
  maxCol++;
  maxCol--;
  var minRow = topLeft.split("-")[1];
  minRow++;
  minRow--;
  var maxRow = bottomRight.split("-")[1];
  maxRow++;
  maxRow--;
  for(i = minRow; i <= maxRow; i++){
    for(j = minCol; j <= maxCol; j++){
      var spot = "r-" + i + "-" + j;
      document.getElementById(spot).classList = "floor";
    }
  }
}

//-------------------------Add Doors-------------------------

function addDoors(door1, door2, door3, door4){
  document.getElementById(door1).classList = "door";
  if(door2 != "none"){
    document.getElementById(door2).classList = "door";
  }
  if(door3 != "none"){
    document.getElementById(door3).classList = "door";
  }
  if(door4 != "none"){
    document.getElementById(door4).classList = "door";
  }
}

//-------------------------Add Crates-------------------------

function addCrates(topLeft, bottomRight){
  var minCol = topLeft.split("-")[2];
  minCol++;
  minCol--;
  var maxCol = bottomRight.split("-")[2];
  maxCol++;
  maxCol--;
  var minRow = topLeft.split("-")[1];
  minRow++;
  minRow--;
  var maxRow = bottomRight.split("-")[1];
  maxRow++;
  maxRow--;

  while(true){
    var randRow = Math.floor(Math.random() * (maxRow - minRow + 1) + minRow);
    var randCol = Math.floor(Math.random() * (maxCol - minCol + 1) + minCol);
    var spot = "r-" + randRow + "-" + randCol;
    if(spot != "r-7-10"){
      break;
    }
  }
  document.getElementById(spot).classList = "crate";
}

//-------------------------Build Roads-------------------------

function buildRoadHorizontal(topLeft, bottomRight, lineStart, lineEnd){
  var minCol = topLeft.split("-")[2];
  minCol++;
  minCol--;
  var maxCol = bottomRight.split("-")[2];
  maxCol++;
  maxCol--;
  var minRow = topLeft.split("-")[1];
  minRow++;
  minRow--;
  var maxRow = bottomRight.split("-")[1];
  maxRow++;
  maxRow--;
  //road
  for(i = minRow; i < maxRow; i++){
    for(j = minCol; j <= maxCol; j++){
      var spot = "r-" + i + "-" + j;
      document.getElementById(spot).classList = "road";
    }
  }
  //road line
  var temp = lineStart;
  lineStart = lineStart.split("-")[2];
  lineStart++;
  lineStart--;
  lineEnd = lineEnd.split("-")[2];
  lineEnd++;
  lineEnd--;
  for(i = lineStart; i <= lineEnd; i++){
    var spot = "r-" + temp.split("-")[1] + "-" + i;
    document.getElementById(spot).classList = "road_line";
  }
  //sidewalk
  for(i = minCol; i <= maxCol; i++){
    var spot = "r-" + (minRow - 1) + "-" + i;
    document.getElementById(spot).classList = "sidewalk";
  }
  for(i = minCol; i <= maxCol; i++){
    var spot = "r-" + maxRow + "-" + i;
    document.getElementById(spot).classList = "sidewalk";
  }
}

function buildRoadVertical(topLeft, bottomRight, lineStart, lineEnd){
  var minCol = topLeft.split("-")[2];
  minCol++;
  minCol--;
  var maxCol = bottomRight.split("-")[2];
  maxCol++;
  maxCol--;
  var minRow = topLeft.split("-")[1];
  minRow++;
  minRow--;
  var maxRow = bottomRight.split("-")[1];
  maxRow++;
  maxRow--;
  //road
  for(i = minRow; i <= maxRow; i++){
    for(j = minCol; j <= maxCol; j++){
      var spot = "r-" + i + "-" + j;
      document.getElementById(spot).classList = "road";
    }
  }
  //road line
  var temp = lineStart;
  lineStart = lineStart.split("-")[1];
  lineStart++;
  lineStart--;
  lineEnd = lineEnd.split("-")[1];
  lineEnd++;
  lineEnd--;
  for(i = lineStart; i <= lineEnd; i++){
    var spot = "r-" + i + "-" + temp.split("-")[2];
    document.getElementById(spot).classList = "road_line";
  }
  //sidewalk
  for(i = minRow; i <= maxRow; i++){
    var spot = "r-" + i + "-" + (minCol + 5);
    document.getElementById(spot).classList = "sidewalk";
  }
  for(i = minRow; i <= maxRow; i++){
    var spot = "r-" + i + "-" + (minCol - 1);
    document.getElementById(spot).classList = "sidewalk";
  }
}

function buildRoadIntersection(topLeft, bottomRight, lineStart1, lineEnd1, lineStart2, lineEnd2){
  var minCol = topLeft.split("-")[2];
  minCol++;
  minCol--;
  var maxCol = bottomRight.split("-")[2];
  maxCol++;
  maxCol--;
  var minRow = topLeft.split("-")[1];
  minRow++;
  minRow--;
  var maxRow = bottomRight.split("-")[1];
  maxRow++;
  maxRow--;
  //road
  for(i = minRow; i <= maxRow; i++){
    for(j = minCol; j <= maxCol; j++){
      var spot = "r-" + i + "-" + j;
      document.getElementById(spot).classList = "road";
    }
  }
  //road line horizontal
  var temp = lineStart1;
  lineStart1 = lineStart1.split("-")[2];
  lineStart1++;
  lineStart1--;
  lineEnd1 = lineEnd1.split("-")[2];
  lineEnd1++;
  lineEnd1--;
  for(i = lineStart1; i <= lineEnd1; i++){
    var spot = "r-" + temp.split("-")[1] + "-" + i;
    document.getElementById(spot).classList = "road_line";
  }
  //road line vertical
  var temp = lineStart2;
  lineStart2 = lineStart2.split("-")[1];
  lineStart2++;
  lineStart2--;
  lineEnd2 = lineEnd2.split("-")[1];
  lineEnd2++;
  lineEnd2--;
  for(i = lineStart2; i <= lineEnd2; i++){
    var spot = "r-" + i + "-" + temp.split("-")[2];
    document.getElementById(spot).classList = "road_line";
  }
  //sidewalk
  document.getElementById(topLeft).classList = "sidewalk";
  document.getElementById(bottomRight).classList = "sidewalk";
  document.getElementById("r-" + topLeft.split("-")[1] + "-" + (topLeft.split("-")[2] - 1 + 7)).classList = "sidewalk";
  document.getElementById("r-" + (topLeft.split("-")[1] - 1 + 7) + "-" + topLeft.split("-")[2]).classList = "sidewalk";
}

//-------------------------Dig River-------------------------

function digRiver(topLeft, bottomRight, lineStartCol, lineEndCol){
  var minRow = topLeft.split("-")[1];
  var maxRow = bottomRight.split("-")[1];
  var minCol = topLeft.split("-")[2];
  var maxCol = bottomRight.split("-")[2];
  //dig river
  for(i = minRow; i <= maxRow; i++){
    for(j = minCol; j <= maxCol; j++){
      var spot = "r-" + i + "-" + j;
      document.getElementById(spot).classList = "river";
    }
  }
  //sand side left
  for(i = minRow; i <= maxRow; i++){
    var spot = "r-" + i + "-" + lineStartCol;
    document.getElementById(spot).classList = "sand";
  }
  //sand side right
  for(i = minRow; i <= maxRow; i++){
    var spot = "r-" + i + "-" + lineEndCol;
    document.getElementById(spot).classList = "sand";
  }
}

//-------------------------Build Bridge-------------------------

function buildBridge(topLeft, bottomRight, lineStartCol, lineEndCol){
  var minRow = topLeft.split("-")[1];
  var maxRow = bottomRight.split("-")[1];
  var minCol = topLeft.split("-")[2];
  var maxCol = bottomRight.split("-")[2];
  //build bridge
  for(i = minRow; i <= maxRow; i++){
    for(j = minCol; j <= maxCol; j++){
      var spot = "r-" + i + "-" + j;
      document.getElementById(spot).classList = "bridge";
    }
  }
  //barrier top
  for(i = lineStartCol; i <= lineEndCol; i++){
    var spot = "r-" + minRow + "-" + i;
    document.getElementById(spot).classList = "bridge_barrier";
  }
  //barrier bottom
  for(i = lineStartCol; i <= lineEndCol; i++){
    var spot = "r-" + maxRow + "-" + i;
    document.getElementById(spot).classList = "bridge_barrier";
  }
}
