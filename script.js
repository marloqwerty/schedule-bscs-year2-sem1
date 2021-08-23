import meme from './meme.js';
import testimonials from './testimonials.js';

const container = document.querySelector('.text');

// create date
const day = new Date();

let startSlider = (position) => {
	Object.keys(meme[position].schedule).forEach((key) => console.log(key, meme[position].schedule[key]));

	// n + type;
	console.log(position);

	container.innerHTML = `
	
	<h1>${meme[position].day}</h1>
	<h2>${meme[position].text}</h2>
	<h3>${meme[position].schedule}</h3>
	`;
};

startSlider(day.getDay());

/*   var p = {
"p1": "value1",
"p2": "value2",
"p3": "value3"
};


Object.keys(p).forEach(key => { console.log(key, p[key]) }) 

			const pokemonTypes = [];
			json.types.forEach((item) => {
				pokemonTypes.push(item.type.name);
			});
			then use join() into printing



*/

//
