const authTest = async () => {
    fetch('http://localhost:3080/profile/view/5', {
        credentials: "include",
    })
  .then(response => response.json())
  .then(data => console.log(data));
}

export default authTest;