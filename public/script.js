const inputName = document.getElementById("name");
const inputQuest = document.getElementById("quest");
const inputColor = document.getElementById("color");
let name = "";
let quest = "";
let color = "";

inputName.addEventListener("change", function (event) {
  name = event.target.value;
});
inputQuest.addEventListener("change", function (event) {
  quest = event.target.value;
});
inputColor.addEventListener("change", function (event) {
  color = event.target.value;
});

fetch("/answers.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(`The raw data from answers.json: ${data}`);
  })
  .catch((error) => {
    console.error(`oops: ${error}`);
  });
