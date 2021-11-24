const list = async () => {
	await fetch("http://localhost:3080/browse/landlords")
	.then(res => res.json())
    .then(data => {
        console.log("yeet: ", data);
        return data;
    })
    .catch(e => console.log(e));
}

export default list;