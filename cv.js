document.getElementById("darkMode").addEventListener("click", darkMode);

let isDark = false;

function darkMode() {
  const darkColor = "#999";
  const whiteColor = "white";

  const boxes = document.querySelectorAll(".card");
  boxes.forEach((box) => {
    box.style.backgroundColor = isDark ? whiteColor : darkColor;
  });

  isDark = !isDark;
}
