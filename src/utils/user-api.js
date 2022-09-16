function getProfile(url, signal) {
	return fetch(url, {
		signal
	}).then((res) => {
		console.log(res)
	  if (res.ok) return res.json();
	  throw new Error("Bad Credentials! CHECK THE SERVER TERMINAL!");
	});
  }
  
  export const userService = {
	getProfile
  };