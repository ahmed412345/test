let nextImgBtn = document.getElementById("next-img");
let imgContaner = document.getElementsByClassName("images")[0];
let images = document.querySelectorAll(".home-sec3 .gallary .images img");
let textSpan = document.getElementById("text");
let target = document.getElementById("targetTo");
let targetImg = document.getElementsByClassName("target-img")[0];
let currentImg = 0;
// scale and rotate function
let transX = 0;
function rotateImg(val, add) {
	let curImgH = getComputedStyle(images[currentImg]).height;
	let curImgW = getComputedStyle(images[currentImg]).width;
	//make all image to the same height
	images.forEach(el => {
		el.style.height = curImgH;
		el.style.filter = "blur(2px)";
		//add span to contaner for every img only in the reload
		if (add) {
			let span = document.createElement("span");
			targetImg.appendChild(span);
		}
	});
	//get all span choose
	let choosesField = document.querySelectorAll(".target-img span");
	//reomve class from every span
	choosesField.forEach(el => {
		el.classList.remove("choosen");
	});
	//add class to only span that have the same img index
	choosesField[currentImg].classList.add("choosen");
	//make current img heigher that others
	images[currentImg].style.height = `${parseInt(curImgH) + parseInt(curImgH) / 10}px`;
	images[currentImg].style.filter = "blur(0)";
	//replace the the text to the text img have
	textSpan.textContent = images[currentImg].dataset.text;
	//replace the the url to the url img have
	target.href = images[currentImg].dataset.href;
	//condetion work only on click
	if (val) {
		transX -= parseInt(curImgW) + 20;
		imgContaner.style.transform = `translate(${transX}px)`;
	}
	//reset the position of all contaner or go to next img
	if (currentImg === images.length - 1) {
		currentImg = 0;
		transX =  parseInt(curImgW);
	} else {
		currentImg += 1;
	}
}
rotateImg(false, true);
nextImgBtn.onclick = () => {
	rotateImg(true, false);
};
