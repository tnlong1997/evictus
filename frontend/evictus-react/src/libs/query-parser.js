/*
	Return query params as JSON from query string start with "?"
 	Example:
		* Input: ?q=123123&c=123123
		* Output: {
			q: "123123",
			c: "123123",
		}
*/
function parse(s: string) {
	let params = {};

	if (!s.startsWith("?")) {
		return params;
	} else {
		s = s.slice(1);
	}

	for (let pair of s.split("&")) {
		let temp = pair.split("=");
		params[temp[0]] = temp[1];
		console.log(params);
	}

	return params;

};

export {parse};
