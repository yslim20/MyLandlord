const signup = async event => {
	event.preventDefault();

	// idk where this going dude
	const response = await fetch('https://idsp-mylandlord.herokuapp.com/auth/register', {
	// await fetch('http://localhost:3080/auth/register', {
		body: JSON.stringify({
        	email: event.target.Email.value,
        	firstname: event.target.fname.value,
        	lastname: event.target.lname.value,
        	// is_landlord: event.target.is_landlord.value,
        	is_landlord: 0,
        	password: event.target.Password.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
	  redirect: 'follow'
  }) 
// .then(window.location.replace("http://localhost:3000/LogIn"))
  .then(window.location.replace("https://idsp3-mylandlord.herokuapp.com/LogIn"))
//   .catch(err => {
// 	  alert("not working")
//   })
}

export default signup;
