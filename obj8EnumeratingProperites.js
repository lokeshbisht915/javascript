const circle = {

	Radius: 1,
	Draw() {
	    console.log('draw');
	}
};

for(let key in circle)
	console.log(key,circle[key]);

for(let key of Object.key(circle))
	console.log(key);

for(let entry of Object.entries(circle))
	console.log(entry);

if('radius' in circle) console.log('yes');