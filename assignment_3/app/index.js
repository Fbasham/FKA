const divs = document.querySelectorAll(".accordian");

divs.forEach((e, i) =>
  e.addEventListener("click", () => {
    const body = document.querySelector(`#b${i}`);
    if ([...body.classList].includes("active")) {
      e.style.border = "1px solid plum";
    } else {
      e.style.border = "2px solid plum";
    }
    body.classList.toggle("active");
  })
);
