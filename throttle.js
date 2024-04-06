const result = document.querySelector(".card-container");

function throttle(callback, time = 1000) {
  let timer;
  return function append(...args) {
    const context = this;
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      callback.apply(context, args);
      timer = null;
    }, time);
  };
}

function scroll() {
  let clientHeight = document.documentElement.clientHeight;
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;

  if ((scrollTop + clientHeight) / scrollHeight >= 0.9) {
    for (let i = 0; i <= 10; i++) {
      let card = document.createElement("div");
      card.classList.add("card");

      let img = document.createElement("img");
      img.src = `https://picsum.photos/id/${
        Math.floor(Math.random() * 100) + 1
      }/300`;
      img.onerror = function () {
        this.src = "https://picsum.photos/id/54/300";
      };
      img.alt = "Card image";

      let cardContent = document.createElement("div");
      cardContent.classList.add("card-content");
      let title = document.createElement("h2");
      title.textContent = "New Card Title";
      let text = document.createElement("p");
      text.textContent = "New card content goes here...";

      cardContent.appendChild(title);
      cardContent.appendChild(text);
      card.appendChild(img);
      card.appendChild(cardContent);
      result.appendChild(card);
    }
  }
}

document.addEventListener("scroll", throttle(scroll));
