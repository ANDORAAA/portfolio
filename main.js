const btnSwitch = document.querySelector(".theme-switch input");

const theme = localStorage.getItem("theme");

if (theme) {
  if (theme === "light") {
    document.querySelector("#darkmode").href = "";
  }
  if (theme === "dark") {
    btnSwitch.checked = true;
    document.querySelector("#darkmode").href = "darkmode.css";
  }
}

btnSwitch.addEventListener("click", (event) => {
  if (event.target.checked) {
    document.querySelector("#darkmode").href = "darkmode.css";
    localStorage.setItem("theme", "dark");
  } else {
    document.querySelector("#darkmode").href = "";
    localStorage.setItem("theme", "light");
  }
});
