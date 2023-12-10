let container = document.querySelector(".container");
let subscriptionDiv = document.querySelector(".thanks-div");
let emailId = document.querySelector("#email-id");
let userEmailId = document.querySelector("#input-email");
let subscribeBtn = document.getElementById("subscribe-btn");
let dismissBtn = document.getElementById("dismiss-btn");
let validEmailRequiredText = document.querySelector(".validEmailRequired");

function checkForCorrectInput(input) {
  let validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validEmailRegex)) {
    return true;
  } else {
    return false;
  }
}
subscribeBtn.addEventListener("click", () => {
  if (checkForCorrectInput(userEmailId.value)) {
    container.classList.toggle("hidden");
    subscriptionDiv.classList.toggle("hidden");
    emailId.textContent = userEmailId.value;
  } else {
    userEmailId.style.backgroundColor = "hsla(4, 100%, 67%,0.3)";
    userEmailId.style.border = "0.5px solid hsl(4, 100%, 67%)";
    userEmailId.style.color = "hsl(4, 100%, 67%)";
    validEmailRequiredText.classList.toggle("hidden");
  }
});

function dismiss() {
  container.classList.toggle("hidden");
  subscriptionDiv.classList.toggle("hidden");
}

function onFocus(ele) {
  ele.style.backgroundColor = "hsl(0, 0%, 100%)";
  ele.style.border = "0.5px solid hsl(234, 29%, 20%)";
  userEmailId.style.color = "hsl(235, 18%, 26%)";
  validEmailRequiredText.classList.add("hidden");
}
