const playBtn = document.querySelector("#play-btn");
const playerWrap = document.querySelector("#player-wrap");

let isPlaying = false;

playBtn.addEventListener("click", function () {
  if (!isPlaying) {
    playerWrap.innerHTML = `
      <iframe 
        id="ytplayer" 
        src="https://www.youtube.com/embed/0hT2gdwsKZo?autoplay=1"
        frameborder="0" 
        allow="autoplay">
      </iframe>
    `;
    isPlaying = true;
  } else {
    playerWrap.innerHTML = ""; // iframe 제거 → 재생 중지
    isPlaying = false;
  }
});