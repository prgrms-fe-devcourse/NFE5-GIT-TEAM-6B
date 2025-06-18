import { exercises as data } from './data.js';
import { createCardItem, LikeEvents, DetailEvents } from './card02.js';

let tabMenuList = document.querySelectorAll('.tab_menu > li');
let tabContList = document.querySelectorAll('.tab_cont_wrap > div');

// NodeList → Array
tabMenuList = [...tabMenuList];
tabContList = [...tabContList];

/* 탭 이동 이벤트 */
function handleTabMenu(e) {
  e.preventDefault();

  const activeTab = e.currentTarget;
  const index = tabMenuList.indexOf(activeTab);

  tabMenuList.forEach((tab) => tab.classList.remove('active'));
  tabContList.forEach((cont) => cont.classList.remove('active'));

  activeTab.classList.add('active');
  tabContList[index].classList.add('active');
}

/* 탭 컨텐츠 전체 렌더링 */
function renderAllTabContents() {
  const categories = ['등', '팔', '가슴', '하체', '유산소'];

  categories.forEach((category, index) => {
    const filtered = data.filter(item => item.category === category);
    const cardWrap = tabContList[index].querySelector('.card_wrap');

    filtered.forEach(({ thumbnail, name }) => {
      const li = createCardItem(thumbnail, name);
      //insertAdjacentHTML() : html문자열 삽입 / beforeend: 맨뒤에 삽입
      cardWrap.insertAdjacentHTML('beforeend', li);
    });
  });
}

/* 이벤트 바인딩 */
document.addEventListener('DOMContentLoaded', () => {
  renderAllTabContents(); // 페이지 로드 시 전부 렌더링

  tabMenuList.forEach((tab) => {
    tab.addEventListener('click', handleTabMenu);
  });
  LikeEvents();
  DetailEvents(); 
});