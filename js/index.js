const moreBtn = document.querySelector('.more_btn');
const tapWrap = document.querySelector('.tap_wrap');

const cardHTML = `
  <div class="tap_contents">
    <span class="ex_name">바벨 스쿼트</span>
    <img class="like" src="./assets/images/heart.svg" alt="좋아요 버튼" />
    <button class="view_detail_btn" type="button">상세 보기</button>
  </div>
`;

// 좋아요 클릭 이벤트
function handleLikeClick() {
  let heart = false;

  return (e) => {
    const target = e.currentTarget;
    const emptySrc = './assets/images/heart.svg';
    const fillSrc = './assets/images/fillheart.svg';

    target.src = heart ? emptySrc : fillSrc;
    heart = !heart;
  };
}

function LikeEvents() {
  const likes = document.querySelectorAll('.like');

  likes.forEach(el => {
    el.addEventListener('click', handleLikeClick());
  });
}

// 상세 보기 버튼
function DetailEvents() {
  const detailButtons = document.querySelectorAll('.view_detail_btn');

  detailButtons.forEach(btn => {
    btn.addEventListener('click', handleDetailButtonClick);
  });
}

// 상세 보기 버튼 클릭 시 동작
function handleDetailButtonClick() {
  alert('상세 보기 눌림');
}

// 더보기 버튼 클릭 시 카드 추가 및 이벤트 등록
function handleMoreButtonClick() {
  for (let i = 0; i < 3; i++) {
    tapWrap.insertAdjacentHTML('beforeend', cardHTML);
  }
  LikeEvents();
  DetailEvents();
  moreBtn.style.display = 'none';
}


LikeEvents();
DetailEvents();
moreBtn.addEventListener('click', handleMoreButtonClick);