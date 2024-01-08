const container = document.querySelector('.container');
const inptSearch = document.querySelector('.inptSearch');
const form = document.querySelector('form');

const API =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=28885ce212bd64af1255f3383449d6a2&page=1';

const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=28885ce212bd64af1255f3383449d6a2&query=`;

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	let value = inptSearch.value.trim();

	if (value && value !== '') {
		container.innerHTML = '';
		fechingApi(searchApi + value);
	} else {
		window.Location.reload();
	}
	inptSearch.value = '';
	inptSearch.focus();
});

async function fechingApi(APIa) {
	try {
		const response = await fetch(APIa);
		const data = await response.json();
		showResult(data.results);
		console.log(APIa);
	} catch (error) {
		console.log(error);
		document.body.innerHTML = `<div class='error'>
          <article>
		  		<h1>Data Not Found </h1>
		<h2>if  your region Iran on your vpn and try agin , have good time</h2>
		  </article>
		</div>`;
	}
}

function showResult(data) {
	data.map((items) => {
		const {
			title,
			vote_average,
			poster_path,
			overview,
			release_date,
			id,
			backdrop_path,
		} = items;

		container.innerHTML += `
	
        <div class='wrapper'>
     
       <h2>${title}</h2>
       <figure>
	    ${
			backdrop_path
				? `<img src=https://image.tmdb.org/t/p/w500${backdrop_path}>`
				: `Img Not Found`
		}
    
	    <figcaption> <span>Vote</span> <span class='${changeColorVote(
			vote_average
		)}'>${vote_average}</span> <p>Release Date : ${release_date.replaceAll(
			'-',
			'/'
		)} </p>
		</figcaption>
      </figure>
      <p class='demo'>${overview.substring(0, 50)}...</p>
	  <span  class='btnShowMore' data-id=${id}>
	  show more
	  </span>
      </div>
	  `;

		// functions for detail show more

		const demo = document.querySelectorAll('.demo');
		const btnShowMore = document.querySelectorAll('.btnShowMore');
		btnShowMore.forEach((allbtn, allbtnIndex) => {
			allbtn.addEventListener('click', async (e) => {
				allbtn.classList.toggle('showText');
				let allBtnShowMore = e.target;
				const response = await fetch(
					`https://api.themoviedb.org/3/movie/${allBtnShowMore.dataset.id}?api_key=28885ce212bd64af1255f3383449d6a2`
				);
				const data = await response.json();
				test(demo, allbtnIndex, data, allbtn);
			});
		});
	});
}
// this function get overview and show
function test(demo, allbtnIndex, data, allbtn) {
	demo.forEach((allp, allpIndex) => {
		if (allbtnIndex == allpIndex && allbtn.classList.contains('showText')) {
			allp.innerHTML = `${data.overview}`;
			allp.classList.toggle('animatep');
		} else {
			allp.innerHTML = `${data.overview.substring(0, 49)}...`;
		}
	});
}

fechingApi(API);

function changeColorVote(voteColor) {
	if (voteColor >= 6) {
		return 'green';
	} else if (voteColor >= 5) {
		return 'orange';
	} else if (voteColor <= 5) {
		return 'gray';
	}
}
