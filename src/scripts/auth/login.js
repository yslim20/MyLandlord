import axios from 'axios'

const login = async (event) => {
	event.preventDefault();

	// console.log(event.target);
	// console.log(event.target.Email.value, event.target.Password.value)

	// idk where this going dude
	const response = await axios({
		// url: 'http://localhost:3080/auth/login',
		url: 'https://idsp-mylandlord.herokuapp.com/auth/login',
		data: {
        	email: event.target.Email.value,
        	password: event.target.Password.value,
      },
	  // withCredentials: true,
      method: 'POST',
	  // mode: 'no-cors'
  }).then(r => console.log(r.text))
  .catch(e => console.log(e));

  // sam did this:
  // axios.get("http://localhost:3080/fuckyoujeremy")
  // const successfail = await response.json();
  // console.log(successfail);
}

export default login;
