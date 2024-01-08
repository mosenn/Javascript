let warrpermenu = document.querySelectorAll('.warrper-menu');
let ShowBgText = document.querySelector('#ShowBgText');
// set and get LocalSTroge

let GetThemes = localStorage.getItem('themes');
let ConditionThemes = GetThemes ? GetThemes : 'Defalut';
document.body.className = GetThemes;
ShowBgText.textContent = GetThemes;
// get Lis
warrpermenu.forEach((allLi) => {
	allLi.addEventListener('click', (e) => {
		let BackGroundcolor = e.target.dataset.color;
		
		document.body.className = BackGroundcolor;
		ShowBgText.textContent = BackGroundcolor;
		localStorage.setItem('themes', BackGroundcolor);
	});
});

//********************** OTHER WAY For select List

// Array.from(warrpermenu.children).forEach((AllLiwarrper) => {
// 	AllLiwarrper.addEventListener('click', (e) => {
// 		let color = e.target.dataset.color;
// 		console.log(color);
// 		document.body.className = color;
// 		ShowBgText.textContent = color;
// 	});
// });
