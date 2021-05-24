const covid19 = require('../src/index');

covid19.getLatestStats('IND').then((data) => {
	console.log(data);
});