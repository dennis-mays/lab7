const animalUrl = "https://zoo-animal-api.herokuapp.com/animals/rand";
const dictionaryUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function getAnimal() {
    fetch("testdata.json")
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
        })
        .catch((err) => {
            console.error(err);
        });
}

function getDefinition() {
    fetch("testdef.json")
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

function getImages() {
    fetch("testimg.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let length = data.results.length;
            let i1 = Math.floor(Math.random() * length) + 1;
            let i2 = 0;
            do {
                i2 = Math.floor(Math.random() * length) + 1;
            } while (i1 == i2);
            document.querySelector("#pic1").src = data.results[i1];
            document.querySelector("#pic2").src = data.results[i2];
        });
}

getAnimal();
getDefinition();
getImages();
