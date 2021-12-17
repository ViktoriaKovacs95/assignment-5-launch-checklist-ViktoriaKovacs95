// Write your helper functions here!

require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    fetch('https://handlers.education.launchcode.org/static/planets.json').then((response) => {
        response.json().then((json) => {
            const destination = document.getElementById('missionTarget')
            let index = Math.floor(Math.random() * 10)
            
            while (index >= json.length) {
                index = Math.floor(Math.random() * 10)
            }

            if (destination) {
                let html = `<h2>Mission Destination</h2>
                            <ol>
                                <li>Name: ${json[index].name}</li>
                                <li>Diameter: ${json[index].diameter}</li>
                                <li>Star: ${json[index].star}</li>
                                <li>Distance from Earth: ${json[index].distance}</li>
                                <li>Number of Moons: ${json[index].moons}</li>
                            </ol>
                            <img src="${json[index].image}">`
                destination.innerHTML = html
            } else {
                console.log('document elements not found!')
            }
        })
    })
}

function validateInput(testInput) {
    if (inputs.every((item) => item.value !== "")) {
        e.preventDefault()
    } else {
        alert('Please fill out all fields!')
        e.preventDefault()
    }

    if (typeof inputs[0].value !== "string" || typeof inputs[1].value !== "string") {
        alert('Please enter a valid name!')
        e.preventDefault()
    }

    if (isNaN(Number(inputs[2].value)) || isNaN(Number(inputs[3].value))) {
        alert('Please enter a valid number!')
        e.preventDefault()
    }
}


  


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
