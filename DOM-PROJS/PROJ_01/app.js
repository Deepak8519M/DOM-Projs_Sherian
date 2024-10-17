var isStatus = document.querySelector("h5");

var addFriend = document.querySelector("#add");

var remvFrnd = document.querySelector("#remove");

addFriend.addEventListener("click", function () {
  isStatus.innerHTML = "Friends";
  isStatus.style.color = "green";
});

remvFrnd.addEventListener("click", function () {
  isStatus.innerHTML = "Stranger";
  isStatus.style.color = "red";
});
