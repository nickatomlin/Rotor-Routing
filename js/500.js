// FILE NOT CURRENTLY IN USE
// RESULTS CAN BE SEEN HERE: https://www.youtube.com/watch?v=m7LxnPqYXuY
// CAN BE IMPLEMENTED IN index.html

var canvas;
var ctx; // canvas object to which functions like fillRect are applied
var timer;
/* Defines a matrix with dimension 500 and fills it with zeroes. This matrix
   is used to store the directions of arrows at each point on the grid. */
var matrix = [];
for(var i = 0; i < 500; i++) {
    matrix[i] = [];
    for(var j = 0; j < 500; j++) {
        matrix[i][j] = 0;
    }
}
/* An array of locations of sand grains, represented by their lattice points.
   Initialized as empty, but may look like [[241,1], [32,454]] after update has
   been repeatedly called. */
var locations = [];

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    timer = setInterval(update, 10); // calls update every 10 milliseconds
    return timer;
}
function update() {
  /* Adds a new grain of sand every tenth iteration. In the future, we will
     make this a selectable parameter for the website user. */
  for (var d = 0; d < 10; d++) {
    if (d == 0) {
      locations.push([249,249]);
    }
    else {
      var count = locations.length;
      var new_locations = [];
      /* Iterates over every grain of sand in locations. Since the sand grains
         will not stay in place, their new locations are stored in the
         new_locations array. */
      for(var i = 0; i < count; i++) {
        var item = locations[i]; // the current grain of sand
        var x = item[0]; // the x-coordinate of the sand grain
        var y = item[1]; // the y-coordinate of the sand grain
        /* A series of if statements checks the direction of the arrow at the
           location of the current grain of sand. It fills the */
        if (matrix[x][y] == 0) {
          /* These nested if statements remove any grains of sand that are about
             to exit the matrix. */
          if (y > 0) {
            var new_item = [x, y - 1];
            new_locations.push(new_item);
          }
          matrix[x][y] = 1; // changes arrow direction
          ctx.fillStyle = "blue"; // sets fill color
          ctx.fillRect(x, y, 1, 1); // visualization for arrow direction
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
      locations = new_locations; // updates locations array
    }
  }
}
