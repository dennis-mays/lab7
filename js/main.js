const animalUrl = "https://zoo-animal-api.herokuapp.com/animals/rand";

function getAnimal() {
    fetch("testdata.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.querySelector("#name").innerHTML = data.name;
            document.querySelector("#lname").innerHTML = data.latin_name;
            document.querySelector("#type").innerHTML = data.animal_type;
            document.querySelector("#active").innerHTML = data.active_time;
            document.querySelector("#lifespan").innerHTML =
                data.lifespan + " years";
            document.querySelector("#habitat").innerHTML = data.habitat;
            document.querySelector("#geoarea").innerHTML = data.geo_range;
            document.querySelector("#image").src = data.image_link;
        })
        .catch((err) => {
            console.error(err);
        });
}
getAnimal();
