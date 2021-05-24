const fetch = require('node-fetch');
const json = require('../json/countries.json');
const base = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/';
const error = 'Invalid Country Provided! Check the list here: https://github.com/sujalgoel/owid-covid/';

module.exports = {
	getStats(country) {
		if (country) {
			if (!json.getStats.includes(country)) {
				throw new Error(error + 'blob/master/json/countries.json#L2');
			} else {
				return fetch(base + 'owid-covid-data.json')
					.then((res) => res.json())
					.then(data => {
						return data[country];
					});
			}
		} else {
			return fetch(base + 'owid-covid-data.json')
				.then((res) => res.json())
				.then(data => {
					return data;
				});
		}
	},

	getVaccineStats(country) {
		if (country) {
			if (!json.getVaccineStats.includes(country)) {
				throw new Error(error + 'blob/master/json/countries.json#L230');
			} else {
				let variable;
				return fetch(base + 'vaccinations/vaccinations.json')
					.then((res) => res.json())
					.then(data => {
						for (let i = 0; i < data.length; i++) {
							if (data[i].iso_code === country) {
								variable = data[i];
							}
						}
						return variable;
					});
			}
		} else {
			return fetch(base + 'vaccinations/vaccinations.json')
				.then((res) => res.json())
				.then(data => {
					return data;
				});
		}
	},

	getLatestStats(country) {
		if (country) {
			if (!json.getLatestStats.includes(country)) {
				throw new Error(error + 'blob/master/json/countries.json#L455');
			} else {
				return fetch(base + 'latest/owid-covid-latest.json')
					.then((res) => res.json())
					.then(data => {
						return data[country];
					});
			}
		} else {
			return fetch(base + 'latest/owid-covid-latest.json')
				.then((res) => res.json())
				.then(data => {
					return data;
				});
		}
	},
};