const levelHandle = document.querySelector("#next-level");

levelHandle.addEventListener("click", function () {
  window.location.replace("../second.html");
});

document.querySelector(".crate-1").addEventListener("click", function () {
  document.querySelector(".crate-1").style.display = "none";
  document.querySelector(".shot-1").style.display = "block";
});
document.querySelector(".shot-1").addEventListener("click", function () {
  document.querySelector(".shot-1").style.display = "none";
  document.querySelector(".fire-1").style.display = "block";
});
document.querySelector(".fire-1").addEventListener("click", function () {
  document.querySelector(".fire-1").style.display = "none";
  document.querySelector(".fire-bag").style.display = "block";
  document.querySelector(".next-level").style.display = "block";
});
document.querySelector(".crate-2").addEventListener("click", function () {
  document.querySelector(".crate-2").style.display = "none";
  document.querySelector(".shot-2").style.display = "block";
});
document.querySelector(".shot-2").addEventListener("click", function () {
  document.querySelector(".shot-2").style.display = "none";
});
document.querySelector(".crate-3").addEventListener("click", function () {
  document.querySelector(".crate-3").style.display = "none";
  document.querySelector(".shot-3").style.display = "block";
});
document.querySelector(".shot-3").addEventListener("click", function () {
  document.querySelector(".shot-3").style.display = "none";
});
