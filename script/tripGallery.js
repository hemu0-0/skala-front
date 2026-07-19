const galleryBtn = document.querySelector("#gallery-btn");
const galleryOverlay = document.querySelector("#trip-gallery-overlay");
const galleryClose = document.querySelector("#gallery-close");
const galleryCard = document.querySelector("#gallery-card");
const galleryImg = document.querySelector("#gallery-img");
const galleryCaption = document.querySelector("#gallery-caption");
const galleryCount = document.querySelector("#gallery-count");
const galleryPrev = document.querySelector("#gallery-prev");
const galleryNext = document.querySelector("#gallery-next");

const FLIP_DURATION = 300;

const tripPhotos = [
  { src: "../media/nagoya.jpeg", alt: "나고야 여행 사진", caption: "나고야 나고야성 (2024년)" },
  { src: "../media/qingdao.jpeg", alt: "칭다오 여행 사진", caption: "칭다오 (2025년)" },
  { src: "../media/thailand.jpg", alt: "태국 여행 사진", caption: "방콕 왓아룬 (2026년)" },
  { src: "../media/boryeong.jpeg", alt: "보령 여행 사진", caption: "보령 녹차밭" },
  { src: "../media/xian.jpeg", alt: "시안 여행 사진", caption: "시안 종루" },
  { src: "../media/jeju.jpeg", alt: "제주도 여행 사진", caption: "제주도 노을" },
];

let currentIndex = 0;
let isFlipping = false;

galleryBtn.addEventListener("click", () => {
  galleryOverlay.style.display = "flex";
  showCard(0);
});

galleryClose.addEventListener("click", () => {
  galleryOverlay.style.display = "none";
});

galleryPrev.addEventListener("click", () => flipTo(currentIndex - 1));
galleryNext.addEventListener("click", () => flipTo(currentIndex + 1));

function flipTo(index) {
  if (isFlipping) return;
  isFlipping = true;

  const nextIndex = (index + tripPhotos.length) % tripPhotos.length;

  galleryCard.classList.add("flip-out");
  setTimeout(() => {
    showCard(nextIndex);
    galleryCard.classList.remove("flip-out");
    galleryCard.classList.add("flip-in");
    setTimeout(() => {
      galleryCard.classList.remove("flip-in");
      isFlipping = false;
    }, FLIP_DURATION);
  }, FLIP_DURATION);
}

function showCard(index) {
  currentIndex = index;
  const photo = tripPhotos[index];
  galleryImg.src = photo.src;
  galleryImg.alt = photo.alt;
  galleryCaption.textContent = photo.caption;
  galleryCount.textContent = `${index + 1} / ${tripPhotos.length}`;
}
