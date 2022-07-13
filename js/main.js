const buttonLeft = document.getElementById('left-arrow')
const buttonRight = document.getElementById('right-arrow')
const container = document.getElementsByClassName('scrolling-wrapper-flexbox')

buttonRight.onclick = function () {
	document.getElementById('scrolling-wrapper-flexbox').scrollLeft += 200
};
buttonLeft.onclick = function () {
	document.getElementById('scrolling-wrapper-flexbox').scrollLeft -= 200
};
