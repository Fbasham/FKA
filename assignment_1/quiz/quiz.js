const background = document.querySelectorAll(
  "input[name=background][id=background]"
);
const color = document.querySelectorAll("input[name=color][id=color]");
const fontFamily = document.querySelectorAll(
  "input[name=font-family][id=font-family]"
);

function grade() {
  a = background[0].checked;
  b = color[0].checked;
  c = fontFamily[0].checked;
  s = (100 * (a + b + c)) / 3;
  r = document.querySelector(".result");
  r.style.color = s > 70 ? "lime" : s > 40 ? "orange" : "red";
  r.innerText = `
  You scored:
  ${s.toFixed(2) + "%"}
  `;
}
