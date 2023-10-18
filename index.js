document.addEventListener("DOMContentLoaded", (event) => {
    fetch("http://localhost:3000/films/1").then((response) => {
        return response.json()
    }).then((data) => {
        // console.log(data);
        displayFilm(data)
    }).catch((error) => {
        console.log(error.message);
    })

    fetch("http://localhost:3000/films").then((response) => {
        return response.json()
    }).then((data) => {
        // console.log(data);
        displayFilms(data)
    }).catch((error) => {
        console.log(error.message);
    })

})
function displayFilm(film) {
    console.log(film);
    const ul = document.querySelector("#films")
    // films.forEach((film)=>{
    const li = document.createElement("li")
    li.innerHTML = `
        <img src="${film.poster}" alt="${film.title}">
          <p>${film.title}</p>
          <p>${film.runtime}</p>
          <p>${film.showtime}</p>
          <p id="available-tickets">${film.capacity - film.tickets_sold}</p>
          <button>Buy Ticket</button>
        
        
        `
    ul.appendChild(li)
    const button = document.querySelector("button")
    const p = document.querySelector("#available-tickets")
    button.addEventListener("click", (event) => {
        // console.log(event.target);
        buyTicket(event, p)
    })
    // })
}
function displayFilms(films) {
    const ul = document.querySelector("#menu")
    // console.log(films);
    films.forEach((film) => {
        const li = document.createElement("li")
        li.innerHTML = film.title
        ul.appendChild(li)
    })
}
function buyTicket(event, p) {
    // console.log(event.target);
    if (parseInt(p.innerHTML) > 0) {
        p.innerHTML = parseInt(p.innerHTML) - 1
    }else{
        console.log("all tickets sold out");
    }
}