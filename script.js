import meme from './meme.js';

const container = document.querySelector('.text');

// create date
const day = new Date();

let startSlider = (position) => {
	let col = [];

	meme[position].schedule.forEach((item) => {
		for (let key in item) {
			if (col.indexOf(key) === -1) {
				col.push(key);
			}
		}
	});

	// for (let i = 0; i < meme[position].schedule.length; i++) {
	// 	meme[position].schedule[i].forEach((key) => {
	// 		if (col.indexOf(key) === -1) {
	// 			col.push(key);
	// 		}
	// 	});
	// }

	const table = document.createElement('table');

	let tr = table.insertRow(-1); // table row.

	for (let i = 0; i < col.length; i++) {
		let th = document.createElement('th');
		th.innerHTML = col[i];

		tr.appendChild(th);
	}

	// json data to the table as rows.

	meme[position].schedule.forEach((key) => {
		tr = table.insertRow(-1);
		tr.classList.add(key.subject.replace(/\s+/g, '_'));
		// words.replace(/\s+/g, '') replaces whitespace with non-whitespace or remove whitespace
		for (let j = 0; j < col.length; j++) {
			let tabCell = tr.insertCell(-1);
			tabCell.innerHTML = key[col[j]];
		}
	});

	// Now, add the newly created table with json data, to a container.
	let divShowData = document.getElementById('showData');
	divShowData.innerHTML = '';
	divShowData.appendChild(table);
	container.innerHTML = `
	
	<h1>${meme[position].day}</h1>
	<h2>${meme[position].text}</h2>

	`;
};

// startSlider(2);
startSlider(day.getDay());
let daysOfWeek = [];
let selectSubject = document.getElementById('subject-select');
meme.forEach((item) => {
	selectSubject.add(new Option(item.day.toUpperCase(), item.day));
	daysOfWeek.push(item.day);
});
selectSubject.onchange = () => {
	console.log(selectSubject.value);
	startSlider(daysOfWeek.indexOf(selectSubject.value));
};
console.log(daysOfWeek[day.getDay()]);
selectSubject.value = daysOfWeek[day.getDay()];
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
