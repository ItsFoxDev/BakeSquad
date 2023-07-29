const buttons = document.querySelectorAll("img[ca]");

const buttonPressed = e => {
  console.log(e.target.id);  // Get ID of Clicked Element
}

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}