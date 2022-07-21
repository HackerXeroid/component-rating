"use strict";

const $ = (query) => document.querySelector(query);

const _$ = (query) => document.querySelectorAll(query);

const rating = _$(".btn--round");

console.clear();

// It's cool 😎

let rateNumber; // Mr. rateNumber who just cares about the rating number 🤣

for (const [index, button] of rating.entries()) {
  // Going to every button and adding an event listener

  button.addEventListener("click", function () {
    // a reset 😶
    for (const button of rating) {
      button.classList.contains("btn--clicked")
        ? button.classList.remove("btn--clicked")
        : false;
    }
    // Make the magic happen 🪄
    this.classList.add("btn--clicked");
    // Let's care about rateNumber again
    rateNumber = index + 1;
  });
}

// The submit button

$(".btn--submit").addEventListener("click", function () {
  rateNumber
    ? ($(".rate-stars").textContent = rateNumber) &&
      $(".rating--2").classList.add("visible")
    : false;
});
