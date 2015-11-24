function showColor(){
	var color = document.getElementById('colorInput').value;
	document.getElementById('colorRGB').value = color;
	document.getElementById('colorPanel').style.background = color;
}
//window.addEventListener('load', showColor, false);