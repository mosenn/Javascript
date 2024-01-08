import {ShowResult , showDetail} from './main.js';

export  async function Fetchapi(searchValue) {

	const response = await fetch(
		`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchValue}`
	);
	const data = await response.json();
	// console.log(data.meals);
	const DATA = data.meals;
	// console.log(DATA);
	ShowResult(DATA);
}

export  async function FetchApiID(foodIds) {
    			const res = await fetch(
					`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodIds.dataset.id}`
				);
    const data = await res.json();
    showDetail(data);
}