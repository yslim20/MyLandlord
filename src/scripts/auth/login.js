import axios from 'axios'

const login = async (event) => {
	event.preventDefault();

    // const result = await fetch("http://localhost:3080/auth/login",
    const result = await fetch("https://idsp-mylandlord.herokuapp.com/auth/login",
      {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({
          Email: event.target.Email.value,
          Password: event.target.Password.value,
        }),
        headers: { "Content-Type": "application/json" },
      })
	  // .then(window.location.replace("http://localhost:3000/"))
    // .then(user => console.log(user))
    .then(() => location.replace("https://idsp3-mylandlord.herokuapp.com/"))
    // .then(() => console.log("hi"))
    .catch(err => {
       alert("not working")
    })


	// idk where this going dude
// 	const response = await axios({
// 		url: 'http://localhost:3080/auth/login',
// 		// url: 'https://idsp-mylandlord.herokuapp.com/auth/login',
// 		data: {
//         	Email: event.target.Email.value,
//         	Password: event.target.Password.value,
//       },
// 	  withCredentials: true,
//       method: 'POST',
// 	  headers: { "Content-Type": "application/json" },
// 	  // mode: 'no-cors'
//   }).then(r => console.log(r.text))
//   .catch(e => console.log(e));

  // sam did this:
  // axios.get("http://localhost:3080/fuckyoujeremy")
  // const successfail = await response.json();
  // console.log(successfail);
}

export default login;
