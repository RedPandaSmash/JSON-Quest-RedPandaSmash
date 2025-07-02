const form = document.getElementById("questform");
const message = document.getElementById("message");
const userAnswers = { name: "", quest: "", color: "" };

["name", "quest", "color"].forEach((field) => {
  form[field].addEventListener("change", (e) => {
    userAnswers[field] = e.target.value.trim();
  });
});
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  message.textContent = "checking...";

  try {
    const res = await fetch("/api/answers");
    const resjson = await res.json();
    console.log("userAnswers.name:", userAnswers.name);
    console.log("userAnswers.quest:", userAnswers.quest);
    console.log("userAnswers.color:", userAnswers.color);

    const passed =
      userAnswers.name === resjson.name &&
      userAnswers.quest === resjson.quest &&
      userAnswers.color === resjson["color"];
    message.textContent = passed ? "you may pass..." : "you may not pass go.";
  } catch (err) {
    console.error(err);
  }
});
