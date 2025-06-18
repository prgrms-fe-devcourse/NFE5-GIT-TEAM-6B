import { exercises } from "./data.js";

const searchInput = document.querySelector("#search_input");
const cardContainer = document.querySelector(".card_container");
const autocompleteList = document.querySelector(".autocomplete_list");

function createExerciseCard() {
  const card = document.createElement("div");
  card.className = "exercise_card";
  card.innerHTML = `
  <img src="${exercises.thumbnail}" alt="${exercises.name}" />
  `;
  return card;
}

function handleSearchInput() {
  const inputValue = searchInput.value.trim().toLowerCase();
  cardContainer.innerHTML = "";
  autocompleteList.innerHTML = "";

  if (!inputValue) {
    return;
  }

  const matchedExercises = exercises.filter((item) => {
    item.name.toLowerCase().includes(inputValue);
  });

  // 입력 추천 자동 검색어..?
  matchedExercises.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name;
    li.addEventListener("click", () => {
      searchInput.value = item.name;
      autocompleteList.innerHTML = "";
      showSearchResult(item.name);
    });
    autocompleteList.appendChild(li);
  });

  showSearchResult(inputValue);
}

function showSearchResult(keyword) {
  const matchedExercises = exercises.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  cardContainer.innerHTML = "";

  if (matchedExercises.length > 0) {
    matchedExercises.forEach((item) => {
      const card = createExerciseCard(item);
      cardContainer.appendChild(card);
    });
  } else {
    cardContainer.innerHTML = `<p>해당 이름을 가진 운동을 찾을 수 없어요 😓</p>`;
  }
}

searchInput.addEventListener("input", handleSearchInput);
