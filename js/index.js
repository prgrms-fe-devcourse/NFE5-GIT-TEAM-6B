import { exercises } from "./data.js";
import { renderExercisePopup } from "./popup.js"

document.body.addEventListener("click", (e) => {
	const detailBtn = e.target.closest(".view_detail_btn");
	if (!detailBtn) return;

	const card = detailBtn.closest(".card_contents");
	const index = Number(card?.dataset.index);

	if (!isNaN(index)) {
		renderExercisePopup(index-1);
	}
});
