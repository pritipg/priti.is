var cellSize = 40;

function setup() {
  const container = document.querySelector("#homepage-header");
  const canvas = createCanvas(container.clientWidth, container.clientHeight);
  canvas.elt.classList.add("absolute", "top-0", "left-0", "-z-1");
  canvas.parent("#homepage-header");

  angleMode(DEGREES);
  noFill();
  frameRate(5);
}

function draw() {
  background("#ff454475");
  strokeWeight(1.75);
  stroke(250);
  for (var y = 0; y < height; y += cellSize) {
    for (var x = 0; x < width; x += cellSize) {
      if (((x + y) / cellSize) % 2 == frameCount % 2) {
        continue;
      }
      strokeWeight(random(0.75, 2.15));
      var selectPattern = random([patternOne, patternFour, patternSix]);
      var selectAngle = random([0, 90]);
      selectPattern(x, y, selectAngle);
    }
  }
}

function patternOne(x, y, theta) {
  push();
  translate(x, y);
  translate(cellSize / 2, cellSize / 2);
  rotate(theta);
  translate(-cellSize / 2, -cellSize / 2);
  arc(0, 0, (2 / 3) * cellSize, (2 / 3) * cellSize, 0, 90);
  arc(cellSize, 0, (2 / 3) * cellSize, (2 / 3) * cellSize, 90, 180);
  line(0, (2 / 3) * cellSize, cellSize, (2 / 3) * cellSize);
  arc(cellSize / 2, cellSize, (1 / 3) * cellSize, (1 / 3) * cellSize, 180, 360);
  pop();
}

function patternTwo(x, y, theta) {
  push();
  translate(x, y);
  translate(cellSize / 2, cellSize / 2);
  rotate(theta);
  translate(-cellSize / 2, -cellSize / 2);
  arc(cellSize / 2, 0, (1 / 3) * cellSize, (1 / 3) * cellSize, 0, 180);
  line(0, (1 / 3) * cellSize, cellSize, (1 / 3) * cellSize);
  line(0, (2 / 3) * cellSize, cellSize, (2 / 3) * cellSize);
  arc(cellSize / 2, cellSize, (1 / 3) * cellSize, (1 / 3) * cellSize, 180, 360);
  pop();
}

function patternThree(x, y, theta) {
  push();
  translate(x, y);
  translate(cellSize / 2, cellSize / 2);
  rotate(theta);
  translate(-cellSize / 2, -cellSize / 2);
  arc(0, 0, (2 / 3) * cellSize, (2 / 3) * cellSize, 0, 90);
  arc(cellSize, 0, (2 / 3) * cellSize, (2 / 3) * cellSize, 90, 180);
  arc(cellSize, cellSize, (2 / 3) * cellSize, (2 / 3) * cellSize, 180, 270);
  arc(0, cellSize, (2 / 3) * cellSize, (2 / 3) * cellSize, 270, 360);
  pop();
}

function patternFour(x, y, theta) {
  push();
  translate(x, y);
  translate(cellSize / 2, cellSize / 2);
  rotate(theta);
  translate(-cellSize / 2, -cellSize / 2);
  arc(cellSize / 2, 0, (1 / 3) * cellSize, (1 / 3) * cellSize, 0, 180);
  arc(0, cellSize / 2, (1 / 3) * cellSize, (1 / 3) * cellSize, -90, 90);
  arc(cellSize, cellSize, (2 / 3) * cellSize, (2 / 3) * cellSize, 180, 270);
  arc(cellSize, cellSize, (4 / 3) * cellSize, (4 / 3) * cellSize, 180, 270);
  pop();
}

function patternFive(x, y, theta) {
  push();
  translate(x, y);
  translate(cellSize / 2, cellSize / 2);
  rotate(theta);
  translate(-cellSize / 2, -cellSize / 2);
  arc(0, 0, (2 / 3) * cellSize, (2 / 3) * cellSize, 0, 90);
  arc(0, 0, (4 / 3) * cellSize, (4 / 3) * cellSize, 0, 90);
  arc(cellSize, cellSize, (2 / 3) * cellSize, (2 / 3) * cellSize, 180, 270);
  arc(cellSize, cellSize, (4 / 3) * cellSize, (4 / 3) * cellSize, 180, 270);
  pop();
}

function patternSix(x, y, theta) {
  push();
  translate(x, y);
  translate(cellSize / 2, cellSize / 2);
  rotate(theta);
  translate(-cellSize / 2, -cellSize / 2);
  line(0, (1 / 3) * cellSize, (1 / 3) * cellSize, 0);
  line((2 / 3) * cellSize, 0, cellSize, (1 / 3) * cellSize);
  line(0, (2 / 3) * cellSize, (1 / 3) * cellSize, cellSize);
  line((2 / 3) * cellSize, cellSize, cellSize, (2 / 3) * cellSize);
  pop();
}
