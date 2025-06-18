import { exercises as data } from './data.js';

let tabMenuList = document.querySelectorAll('.tab_menu > li');
let tabContList = document.querySelectorAll('.tab_cont_wrap > div');


// NodeList → Array로 변환
tabMenuList = [...tabMenuList];
tabContList = [...tabContList];

/* 탭 이동 */
function handleTabMenu(e) {
  e.preventDefault();

  const activeTab = e.currentTarget;
  const index = tabMenuList.indexOf(activeTab);

  tabMenuList.forEach((tab) => {
    tab.classList.remove('active');
  });
  activeTab.classList.add('active');

  tabContList.forEach((cont, i) => {
    cont.classList.toggle('active', i === index);
  });
}

/* 탭 컨텐츠 데이터 출력 */
function renderTabCont(category, i) {
  const filtered = data.filter((item) => item.category === category);
  let names = filtered.map((item) => item.name);

  console.log(names);

  // 임시 보여주기위한
  // names = names.join(', ');
  // tabContList[i].textContent = names;
}



/* 이벤트 바인딩 */
// 탭 카테고리 데이터 이벤트 (페이지가 다만들어지고 난후)
document.addEventListener('DOMContentLoaded', () => {
  const categories = ['등', '팔', '가슴', '하체', '유산소'];

  categories.forEach((category, i) => {
    renderTabCont(category, i);
  });
});

// 탭 메뉴 클릭 이벤트
tabMenuList.forEach((tab) => {
  tab.addEventListener('click', handleTabMenu);
});