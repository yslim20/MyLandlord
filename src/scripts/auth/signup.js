const signup = async event => {
	event.preventDefault();

	// idk where this going dude
	const response = await fetch('http://idsp-mylandlord.herokuapp.com/auth/register', {
	// const response = await fetch('http://localhost:3080/auth/register', {
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
      method: 'POST'
  });
  const successfail = await response.json();
  alert(successfail);
}

export default signup;
