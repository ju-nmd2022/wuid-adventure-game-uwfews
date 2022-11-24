const characterHandle = document.querySelector("#character-2");
const levelHandle = document.querySelector("#next-level");

levelHandle.addEventListener("click", function () {
  window.location.replace("../third.html");
});

document.querySelector(".chiken").addEventListener("click", function () {
  document.querySelector(".chiken").style.display = "none";
  document.querySelector(".chiken-wing").style.display = "block";
  characterHandle.style.transform = "translateX(320px)";
  characterHandle.setAttribute("src", "../media/character-2-attack.gif");
});
document.querySelector(".chiken-wing").addEventListener("click", function () {
  document.querySelector(".chiken-wing").style.display = "none";
  document.querySelector(".wing-bag").style.display = "block";
});
document.querySelector(".cow").addEventListener("click", function () {
  document.querySelector(".cow").style.display = "none";
  document.querySelector(".stake").style.display = "block";
  characterHandle.style.transform = "translateX(600px)";
  characterHandle.setAttribute("src", "../media/character-2-attack.gif");
});
document.querySelector(".stake").addEventListener("click", function () {
  document.querySelector(".stake").style.display = "none";
  document.querySelector(".stake-bag").style.display = "block";
  document.querySelector(".next-level").style.display = "block";
});
