document.querySelectorAll(".bulb").forEach((e, i) => {
  e.addEventListener("click", function () {
    c = document.querySelector(`#v${i}`);
    console.log(c, `#v${i}`);
    c.classList.toggle("active");
  });
});
