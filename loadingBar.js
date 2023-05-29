let bar = document.querySelector(".bar");
let i = 0;
function increase() {
  bar.style.width = `${i}%`;
  i += 0.47;
}

let musicName = "Pray For Me.mp3";

document.querySelector(".click").addEventListener("click", () => {
  musicPlay;
  setInterval(increase, 1000);
});

function musicPlay() {
  let music = new Audio(musicName);
  document.querySelector(".click").innerHTML = musicName;
  music.play();
}

document.querySelector(".click").addEventListener("click", musicPlay);
