function drop() {
	var dropBtn = document.querySelector('.box-links');

	if (dropBtn.style.display === "block") {
		dropBtn.style.display = "none";
		dropBtn.style.transition = "0.5s";
		dropBtn.style.opacity = "0";
	} else {
		dropBtn.style.display = "block";
		dropBtn.style.opacity = "1";
	}
}