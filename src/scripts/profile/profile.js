import axios from "axios";

const profile = async () => {
    // event.preventDefault();
    // await fetch('https://idsp3-mylandlord.herokuapp.com/profile/view/:id'), {

    let r = await fetch('http://localhost:3080/profile/view/5')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(e => console.log(e));

    // let r = await axios.get("http://localhost:3080/profile/view/5");

    // let response = await r.json();
    // return await response;

}

export default profile;