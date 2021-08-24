import meme from './meme.js';

const container = document.querySelector('.text');

// create date
const day = new Date();

let startSlider = (position) => {
	var col = [];
	for (var i = 0; i < meme[position].schedule.length; i++) {
		for (var key in meme[position].schedule[i]) {
			if (col.indexOf(key) === -1) {
				col.push(key);
			}
		}
	}

	// Create a table.
	var table = document.createElement('table');

	// Create table header row using the extracted headers above.
	var tr = table.insertRow(-1); // table row.

	for (var i = 0; i < col.length; i++) {
		var th = document.createElement('th'); // table header.
		th.innerHTML = col[i];
		tr.appendChild(th);
	}

	// add json data to the table as rows.
	for (var i = 0; i < meme[position].schedule.length; i++) {
		tr = table.insertRow(-1);

		for (var j = 0; j < col.length; j++) {
			var tabCell = tr.insertCell(-1);
			tabCell.innerHTML = meme[position].schedule[i][col[j]];
		}
	}

	// Now, add the newly created table with json data, to a container.
	var divShowData = document.getElementById('showData');
	divShowData.innerHTML = '';
	divShowData.appendChild(table);
};

startSlider(3);
// startSlider(day.getDay());

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
