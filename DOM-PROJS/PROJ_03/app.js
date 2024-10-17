var container = document.querySelector("#container");
var love = document.querySelector("i");
var heart = document.querySelector(".ri-heart-3-fill");

container.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%, -50%) scale(1)";
  love.style.opacity = 0.8;
  heart.style.color = "red";

  //   console.log(love.style.opacity);
  setTimeout(function () {
    love.style.opacity = 0;
  }, 1000);

  setTimeout(function () {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 3000);
});
