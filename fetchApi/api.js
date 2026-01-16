// Learning fetch and api callbacks in JavaScript

fetch("https://randomuser.me/api/")
    .then((rawData) => {
        return rawData.json(); // Parsing the raw data to JSON
    })
    .then((data) => {
        console.log(data); // Logging the parsed data to the console
    })
    .catch((error) => {
        console.error("Error fetching data:", error); // Handling any errors that occur during the fetch
    });

    

