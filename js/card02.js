import { exercises as data } from './data.js';

const moreBtn = document.querySelector('.more_btn');
const cardWrap = document.querySelector('.card_wrap');



export function createCardItem(thumbnail, name) {
  const cardHTML = `
    <li class="card_contents">
      <img src="./${thumbnail}" alt="${name}" />
      <span class="ex_name">${name}</span>					
      <img class="like" src="./assets/images/heart.svg" alt="좋아요 버튼" />
      <button class="view_detail_btn" type="button">상세 보기</button>
    </li>
  `;

  return cardHTML;
}


function handleLikeClick() {
  let heart = false;

  return (e) => {
    const target = e.currentTarget;
    const emptySrc = './assets/images/heart.svg';
    const fillSrc = './assets/images/fillheart.svg';

    if (!heart) {
      target.src = fillSrc;
    } else {
      target.src = emptySrc;
    }
    heart = !heart;
  };
}

function LikeEvents() {
  const likes = document.querySelectorAll('.like');

  likes.forEach(el => {
    el.addEventListener('click', handleLikeClick());
  });
}

function DetailEvents() {
  const detailButtons = document.querySelectorAll('.view_detail_btn');

  detailButtons.forEach(btn => {
    btn.addEventListener('click', handleDetailButtonClick);
  });
}

function handleDetailButtonClick() {
  alert('상세 보기 눌림');
}

function handleMoreButtonClick() {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const cardHTML = createCardItem(item.thumbnail, item.name);
    cardWrap.insertAdjacentHTML('beforeend', cardHTML);
  }
  LikeEvents();
  DetailEvents();
  moreBtn.style.display = 'none';
}

LikeEvents();
DetailEvents();
moreBtn.addEventListener('click', handleMoreButtonClick);