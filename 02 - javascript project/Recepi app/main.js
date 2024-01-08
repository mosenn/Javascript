import { Fetchapi, FetchApiID } from './fetchdata.js';

let main = document.querySelector('.main');
let form = document.querySelector('form');
let inp = document.querySelector('.search');
let showinfo = document.querySelector('.showdetail');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	setApi(inp.value.trim());
	inp.value = null;
});

function setApi(searchValue) {
	if (searchValue) {
		Fetchapi(searchValue);
	}
}

export function ShowResult(data) {
	main.innerHTML = '';
	if (data) {
		data.map((items) => {
			const { strMeal, strMealThumb, idMeal } = items;
			main.innerHTML += `<figure >
            
             <img  src=${strMealThumb}   />
             <figcaption>${strMeal
					.substring(0, 15)
					.replace('-', ' ')}</figcaption>
			     <button data-id='${idMeal}' class='btn' >Get recepie</button>
            </figure>
            `;
		});
	} else {
		main.innerHTML = `<div class='show-inp-valid-massge'>
		
		<h1 id='massge-valid'>sorry your result not found</h1>
		</div >`;
	}
	const btn = document.querySelectorAll('.btn');
	btn.forEach((e) => {
		e.addEventListener('click', async (e) => {
			if (e.target.classList.contains('btn')) {
				let foodIds = e.target;

				FetchApiID(foodIds);
			}
			showinfo.classList.toggle('activ-showdetail');
			document.body.classList.add('hidden-over-flow');
		});
	});
}

export function showDetail(data) {
	console.log(data, 'showdetail');
	const {
		strInstructions,
		strMealThumb,
		strMeal,

		//
		strIngredient1,
		strIngredient2,
		strIngredient3,
		strIngredient4,
		strIngredient5,
		strIngredient6,
		strIngredient7,
		strIngredient8,
		strIngredient9,
		strIngredient10,
		strIngredient11,
		strIngredient12,
		strIngredient13,
		strIngredient14,
		strIngredient15,
		strIngredient16,
		strIngredient17,
		strIngredient18,
		strIngredient19,
		strIngredient20,
		//
		strMeasure1,
		strMeasure2,
		strMeasure3,
		strMeasure4,
		strMeasure5,
		strMeasure6,
		strMeasure7,
		strMeasure8,
		strMeasure9,
		strMeasure10,
		strMeasure11,
		strMeasure12,
		strMeasure13,
		strMeasure14,
		strMeasure15,
		strMeasure16,
		strMeasure17,
		strMeasure18,
		strMeasure19,
		strMeasure20,
	} = data.meals[0];
	showinfo.innerHTML = `
	
	<div class='close-show-detail'>Closed</div>
	
	<h1>${strMeal}</h1>
            <figure>
                <img src="${strMealThumb}" class='detail-img' alt="22">
            </figure>
            <nav>
                
               <ul>
                    <li>
                      ${strIngredient1}  <span>${strMeasure1}</span>
                    </li>
					    <li>
                      ${strIngredient2}  <span>${strMeasure2}</span>
                    </li>
					    <li>
                      ${strIngredient3}  <span>${strMeasure3}</span>
                    </li>
					    <li>
                      ${strIngredient4}  <span>${strMeasure4}</span>
                    </li>
					    <li>
                      ${strIngredient5}  <span>${strMeasure5}</span>
					     </li>
                    <li>
					 
                      ${strIngredient6}  <span>${strMeasure6}</span>
                    </li>
					  <li>
					    ${strIngredient7}  <span>${strMeasure7}</span>
					  </li>
                    
                    </li>   
					<li>
                      ${strIngredient8}  <span>${strMeasure8}</span>
                    </li>
					    <li>
                      ${strIngredient9}  <span>${strMeasure9}</span>
                    </li>   
              		    <li>
                      ${strIngredient10}  <span>${strMeasure10}</span>
                    </li>   
              
                     	    <li>
                      ${strIngredient11}  <span>${strMeasure11}</span>
                    </li>   
				      ${
							strIngredient12
								? `   	
					  
					  <li>
                      ${strIngredient12}  <span>${strMeasure12}</span>
                    </li>`
								: ''
						}


					     ${
								strIngredient13
									? `   	
					  
					  <li>
                      ${strIngredient13}  <span>${strMeasure13}</span>
                    </li>`
									: ''
							}
								     ${
											strIngredient14
												? `   	
					  
					  <li>
                      ${strIngredient14}  <span>${strMeasure14}</span>
                    </li>`
												: ''
										}

					  ${
							strIngredient15
								? `   	
					  <li>
                      ${strIngredient15}  <span>${strMeasure15}</span>
                    </li>`
								: ''
						}
					 ${
							strIngredient16
								? `   	
					  <li>
                      ${strIngredient16}  <span>${strMeasure16}</span>
                    </li>`
								: ''
						}
						 ${
								strIngredient17
									? `   	
					  <li>
                      ${strIngredient17}  <span>${strMeasure17}</span>
                    </li>`
									: ''
							}

								 ${
										strIngredient18
											? `   	
					  <li>
                      ${strIngredient18}  <span>${strMeasure18}</span>
                    </li>`
											: ''
									}
					 ${
							strIngredient19
								? `   	
					  <li>
                      ${strIngredient19}  <span>${strMeasure19}</span>
                    </li>`
								: ''
						}

					 ${
							strIngredient20
								? `   	
					  <li>
                      ${strIngredient20}  <span>${strMeasure20}</span>
                    </li>`
								: ''
						}
                  </ul>
				 </nav>
	 <article> <p class='myp'>${strInstructions}</p> </article> `;

	const closeShowDetail = document.querySelector('.close-show-detail');
	closeShowDetail.addEventListener('click', () => {
		showinfo.classList.remove('activ-showdetail');
		document.body.classList.remove('hidden-over-flow');
	});
}

// `https://www.themealdb.com/api/json/v1/1/lookup.php?i=2`;
