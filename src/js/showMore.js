export let showMore = function (button, spoiler, showMoreText) {
  button.addEventListener("click", function() {
    spoiler.classList.toggle('active');
    button.classList.toggle('active');
    if (button.innerText == showMoreText) {
      button.innerText = "Скрыть"
    } else {
        button.innerText = showMoreText
    }
  });
}
