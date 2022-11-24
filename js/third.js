const prefix = "https://ju-nmd2022.github.io/wuid-adventure-game-uwfews/";
const characterHandle = document.querySelector("#BBQ-man");

document.querySelector(".fire-bag").addEventListener("click", function () {
  document.querySelector(".fire-bag").style.display = "none";
  document.querySelector(".fire-21").style.display = "block";
  document.querySelector(".fire-22").style.display = "block";
  document.querySelector(".fire-23").style.display = "block";
  document.querySelector(".fire-24").style.display = "block";
  characterHandle.style.transform = "translateX(170px) translateY(-40px)";
  document.querySelector(".text-3").style.display = "none";
  document.querySelector(".text-4").style.display = "block";
});
document.querySelector(".wing-bag").addEventListener("click", function () {
  document.querySelector(".wing-bag").style.display = "none";
  document.querySelector(".chiken-wing").style.display = "block";
  document.querySelector(".text-2").style.display = "none";
  document.querySelector(".text-3").style.display = "block";
});
document.querySelector(".stake-bag").addEventListener("click", function () {
  document.querySelector(".stake-bag").style.display = "none";
  document.querySelector(".stake").style.display = "block";
  document.querySelector(".text-2").style.display = "none";
  document.querySelector(".text-3").style.display = "block";
});
document.querySelector(".hat-man").addEventListener("click", function () {
  document.querySelector(".hat-man").style.transform =
    "translateX(-95px) translateY(-92px)";
  document.querySelector(".text-1").style.display = "none";
  document.querySelector(".text-2").style.display = "block";
});
document.querySelector(".woman").addEventListener("click", function () {
  document.querySelector(".woman").style.transform =
    "translateX(-130px) translateY(20px)";
  document.querySelector(".text-1").style.display = "none";
  document.querySelector(".text-2").style.display = "block";
});
document.querySelector(".BBQ").addEventListener("click", function () {
  document.querySelector(".GG").style.display = "block";
});
