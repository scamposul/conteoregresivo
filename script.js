const counter = document.getElementById("counter");
const surprise = document.getElementById("surprise");
const gif = document.getElementById("gif");
const audio1 = new Audio('amarilloamarillolosplatanos.mp3');
const audio2 = new Audio('elbailedeltroleo.mp3');
let timer = counter.textContent;

surprise.style.display = 'none';
gif.style.display = 'none';

setInterval(() => {
  counter.textContent = timer--;
  counter.style.color = timer <=5 ? 'red': 'white'
  if(timer < 0) {
    surprise.style.display = 'block';
    gif.style.display = 'block';
    audio1.play();
    audio1.loop = true;
    audio2.play();
    audio2.loop = true;
    timer = 0;
  }
  }
  , 1000);
