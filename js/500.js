var canvas;
var ctx;
var timer;
var matrix = [];
for(var i = 0; i < 500; i++) {
    matrix[i] = [];
    for(var j = 0; j < 500; j++) {
        matrix[i][j] = 0;
    }
}
var locations = [];

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    timer = setInterval(update, 10);
    return timer;
}
function update() {
  for (var d = 0; d < 10; d++) {
    if (d == 0) {
      locations.push([249,249]);
    }
    else {
      var count = locations.length;
      var new_locations = [];

      for(var i = 0; i < count; i++) {
        var item = locations[i];
        var x = item[0];
        var y = item[1];
        if (matrix[x][y] == 0) {
          if (y > 0) {
            var new_item = [x, y - 1];
            new_locations.push(new_item);
          }
          matrix[x][y] = 1;
          ctx.fillStyle = "blue";
          ctx.fillRect(x, y, 1, 1);
        }
        else if (matrix[x][y] == 1) {
          if (x > 0) {
            var new_item = [x - 1, y];
            new_locations.push(new_item);
          }
          matrix[x][y] = 2;
          ctx.fillStyle = "red";
          ctx.fillRect(x, y, 1, 1);
        }
        else if (matrix[x][y] == 2) {
          if (y < 499) {
            var new_item = [x, y + 1];
            new_locations.push(new_item);
          }
          matrix[x][y] = 3;
          ctx.fillStyle = "green";
          ctx.fillRect(x, y, 1, 1);
        }
        else if (matrix[x][y] == 3) {
          if (x < 499) {
            var new_item = [x + 1, y];
            new_locations.push(new_item);
          }
          matrix[x][y] = 0;
          ctx.fillStyle = "yellow";
          ctx.fillRect(x, y, 1, 1);
        }
      }
      locations = new_locations;
    }
  }
}
