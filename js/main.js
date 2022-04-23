const animalUrl = "https://zoo-animal-api.herokuapp.com/animals/rand";

function getAnimal() {
    fetch(animalUrl)
        .then((response) => {
            return response.json();
        })
        .then((animalData) => {
            const name = animalData.name;
            const lname = animalData.latin_name;
            const type = animalData.animal_type;
            const active = animalData.active_time;
            const lifespan = animalData.lifespan;
            const habitat = animalData.habitat;
            const geoArea = animalData.geo_range;
            const image = animalData.image_link;
        });
}
