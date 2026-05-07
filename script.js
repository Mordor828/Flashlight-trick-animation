let card = document.querySelector(".card");
cards.forEach((card) => {
  card.onmousemove = function (e) {
    let x = e.pageX - card.offsetLeft;
    let y = y.pageY - card.offsetTop;
  };
});
