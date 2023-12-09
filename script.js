let container = document.querySelector(".container");
let subscriptionDiv = document.querySelector(".thanks-div");
let emailId = document.querySelector("#email-id");
let input = document.querySelector("#input-email");
let subscribeBtn = document.getElementById("subscribe-btn");
let dismissBtn = document.getElementById("dismiss-btn");

checkForCorrectInput(input);
function checkForCorrectInput(input) {
  console.log(input.getAttribute("type"));
  if (input.getAttribute("type") === "email") {
    subscribeBtn.addEventListener("click", (e) => {
      container.classList.toggle("hidden");
      subscriptionDiv.classList.toggle("hidden");
    });
  } else {
    console.log("valid email required");
  }
}

function dismiss() {
  container.classList.toggle("hidden");
  subscriptionDiv.classList.toggle("hidden");
}
