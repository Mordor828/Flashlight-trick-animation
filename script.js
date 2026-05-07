let card = document.querySelector(".card");
cards.forEach((card) => {
  card.onmousemove = function (e) {
    let x = e.pageX - card.offsetLeft;
    let y = y.pageY - card.offsetTop;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  };
});
