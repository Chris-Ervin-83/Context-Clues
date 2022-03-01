var friends = ["Henry", "Harold", "Harry", "Hank", "Harrison"];
var locations = [
  "ballroom",
  "billiard Room",
  "cellar",
  "conservatory",
  "dining room",
  "kitchen",
  "hall",
  "library",
  "lounge",
  "study",
];
var weapons = [
  "candlestick",
  "knife",
  "lead pipe",
  "revolver",
  "rope",
  "wrench",
  "flower pot",
  "coffee mug",
  "banana peel",
  "lemon juice",
  "ninja star",
  "ball point pen",
  "shoestring",
  "lava",
  "super soaker",
  "iron",
  "water bottle",
  "picture frame",
  "jackhammer",
  "wooden spoon",
];

for (var i = 1; i <= 100; i++) {
  var header = document.createElement("h3");
  header.textContent = "Accusation " + i;
  document.body.appendChild(header);
  header.addEventListener("click", clickH3(i));
}

function clickH3(num) {
  var friend = friends[num % 20];
  var location = locations[num % 10];
  var weapon = weapons[num % 5];
  return function () {
    alert(
      "Accusation " +
        num +
        ": I accuse " +
        friend +
        ", with the " +
        weapon +
        " in the " +
        location +
        "!"
    );
  };
}
