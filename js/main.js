const animalUrl = "https://zoo-animal-api.herokuapp.com/animals/rand";
const dictionaryUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
// let animalType = "";

function getAnimal() {
    fetch(animalUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.querySelector("#name").innerHTML = data.name;
            document.querySelector("#lname").innerHTML = data.latin_name;
            document.querySelector("#type").innerHTML = data.animal_type;
            document.querySelector("#defTitle").innerHTML = data.animal_type;
            document.querySelector("#active").innerHTML = data.active_time;
            document.querySelector("#lifespan").innerHTML =
                data.lifespan + " years";
            document.querySelector("#habitat").innerHTML = data.habitat;
            document.querySelector("#geoarea").innerHTML = data.geo_range;
            document.querySelector("#image").src = data.image_link;
            // animalType = data.animal_type;
            getDefinition(data.animal_type);
        })
        .catch((err) => {
            console.error(err);
        });
}

function getDefinition(animalType) {
    fetch(dictionaryUrl + animalType)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.querySelector("#partOfSpeach").innerHTML =
                "(" + data[0].meanings[0].partOfSpeech + ")";
            document.querySelector("#typeDef").innerHTML =
                data[0].meanings[0].definitions[0].definition;
        })
        .catch((err) => {
            console.error(err);
        });
}

getAnimal();
