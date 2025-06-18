import { exercises as data } from './data.js';

const moreBtn = document.querySelector('.more_btn');
const cardWrap = document.querySelector('.card_wrap');

function createCard(name, thumbnail) {
  const cardHTML = `
    <div class="card_contents">
      <span class="ex_name">${name}</span>
      <img class="like" src="${thumbnail}" alt="썸네일" />
      <img class="like" src="./assets/images/heart.svg" alt="좋아요 버튼" />
      <button class="view_detail_btn" type="button">상세 보기</button>
    </div>
  `;

  return cardHTML;
}

function renderCardCont(category, name, thumbnail) {
  const filtered = data.filter((item) => item.category === category);
  let cardInfo = filtered.map((item)=> ({
    name: item.name,
    thumbnail: item.thumbnail
  }));

  console.log(cardInfo);
  // 임시 보여주기위한
  // names = names.join(', ');
  // tabContList[i].textContent = names;
}


// 탭 카테고리 데이터 이벤트 (페이지가 다만들어지고 난후)
document.addEventListener('DOMContentLoaded', () => {
  const categories = ['등', '팔', '가슴', '하체', '유산소'];

  categories.forEach((category, name, thumbnail) => {
    renderCardCont(category, name, thumbnail);
  });
});


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
  for (let i = 0; i < 3; i++) {
    cardWrap.insertAdjacentHTML('beforeend', cardHTML);
  }
  LikeEvents();
  DetailEvents();
  moreBtn.style.display = 'none';
}

LikeEvents();
DetailEvents();
moreBtn.addEventListener('click', handleMoreButtonClick);