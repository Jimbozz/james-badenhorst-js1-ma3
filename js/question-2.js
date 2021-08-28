
//Question 2


const key = "4aab6e75173a4005b0c54fa6fe3c6fa3"
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`
const headers = new Headers()
const resultsContainer = document.querySelector(".results");



fetch(url)
.then(res =>{
    return res.json()
})
.then(data => {

    resultsContainer.innerHTML = "";

    for (let i = 0; i < 8; i++) {
        console.log(data.results[i].name);


        resultsContainer.innerHTML += cardContainer(data.results[i].name, data.results[i].rating, data.results[i].tags);
    }
})


.catch(error => { 
    resultsContainer.innerHTML = errorMessage("An Error has occured.", error);
 })



