document.querySelectorAll(".card").forEach((e, i) =>
  e.addEventListener("click", (count = 0) => {
    q = document.querySelector(`#q${i + 1}`);
    ele = document.querySelector(`#a${i + 1}`);
    if (ele.style.display === "none") {
      q.style.display = "none";
      ele.style.display = "block";
    } else {
      q.style.display = "block";
      ele.style.display = "none";
    }
  })
);

async function getJoke() {
  r = await (await fetch("https://v2.jokeapi.dev/joke/Christmas")).json();
  document
    .querySelectorAll(".joke div")
    .forEach((e) => (e.style.display = "flex"));
  document.querySelector("#jokeSetup").innerHTML = r.setup;
  document.querySelector("#jokeDelivery").innerHTML = r.delivery;
  document.querySelector("button#close").style.display = "block";
}
document.querySelector("button").addEventListener("click", getJoke);

document.querySelector("button#close").addEventListener("click", function () {
  document
    .querySelectorAll(".joke div")
    .forEach((e) => (e.style.display = "none"));
  this.style.display = "none";
});

c = 0;
document.querySelector("#motiv").addEventListener("click", function () {
  if (c % 2 == 0) this.innerHTML = "Lesson";
  else this.innerHTML = "Motivation";
  c++;
});
