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

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`);
        if (location === "Google") {
            resolve("Google says hi");
        } else {
            reject("We can only talk to Google");
        }
    });
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log("Processing response");
        resolve(`Extra Information + ${response}`);
    });
}

// makeRequest("Facebook")
//     .then((response) => {
//         console.log("Response Received");
//         return processRequest(response);
//     })
//     .then((processedResponse) => {
//         console.log(processedResponse);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

async function doWork() {
    try {
        const response = await makeRequest("Google");
        console.log("Response Received from await section");
        const processedResponse = await processRequest(response);
        console.log(processedResponse + " from await section");
    } catch (err) {
        console.log(err);
    }
}

doWork();
