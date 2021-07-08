"use strict";

const btn = document.querySelector("#btn");
const box = document.querySelector("#six");

btn.addEventListener("click", function () {
  document.querySelector("#six").scrollIntoView(true);
});
