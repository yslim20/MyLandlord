import { response } from "express";

const profile = async event => {
    event.preventDefault();
    // await fetch('https://idsp3-mylandlord.herokuapp.com/profile/view/:id'), {
    await fetch('http://localhost:3080/profile/view/:id'), {
        method:"GET"

        
    }

}

export default profile;