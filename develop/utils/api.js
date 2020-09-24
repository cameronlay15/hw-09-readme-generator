const axios = require("axios");
const api = {
	getUser(username) {
		try {
			const githubUser = `https://api.github.com/users/${username}`;
			return axios.get(githubUser);
		} catch (err) {
		}
	}
};

module.exports = api;