import { populateContent } from "./components/populateContent.js";

document.addEventListener("DOMContentLoaded", async function () {
  let layouts = document.querySelectorAll(".layout");

  layouts.forEach((layout) => {
    console.log("ran layouts button loop");
    let button = document.createElement("button");
    button.innerHTML = "Generate Dummy Content";
    button.classList.add("dummy-content-button");
    button.setAttribute("onClick", "javascript:void(0);");
    layout.appendChild(button);
  });

  document.addEventListener("click", async (e) => {
    if (e.target.classList.contains("dummy-content-button")) {
      e.preventDefault();
      populateContent(e.target);
    } else {
      return;
    }
  });
});
