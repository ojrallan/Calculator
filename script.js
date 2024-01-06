let displayScreen = document.querySelector(".display");
let buttons = document.querySelectorAll(".button");

displayScreen.textContent = "";

console.log(buttons);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    //For press animation
    btn.classList.add("pressed");
    setTimeout(() => {
      btn.classList.remove("pressed");
    }, 100);

    //button values
    btnClasses = btn.classList;
    for (let i = 0; i < btnClasses.length; i++) {
      displayContent(btnClasses[i]);
    }
  });
});

function displayContent(item) {
  switch (item) {
    case "1":
      displayScreen.textContent += "1";
      break;

    case "2":
      displayScreen.textContent += "2";
      break;

    case "3":
      displayScreen.textContent += "3";
      break;
    case "4":
      displayScreen.textContent += "4";
      break;

    case "5":
      displayScreen.textContent += "5";
      break;

    case "6":
      displayScreen.textContent += "6";
      break;

    case "7":
      displayScreen.textContent += "7";
      break;

    case "8":
      displayScreen.textContent += "8";
      break;

    case "9":
      displayScreen.textContent += "9";
      break;

    case "0":
      displayScreen.textContent += "0";
      break;

    case "clear":
      displayScreen.textContent = "";
      break;

    case "divide":
      displayScreen.textContent += "/";
      break;

    case "del":
      let cDisplay = displayScreen.textContent;
      displayScreen.textContent = cDisplay.slice(0, -1);
      break;

    default:
      break;
  }
}
