
console.log("Hello Wolrd");


let searchForm = document.getElementById('input-form');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const departure = document.getElementById("departure-place").value;
    const destination = document.getElementById("destination-place").value;
    const departDateRange = document.getElementById("departure-date").value;
    // console.log(departure)
    // console.log(destination)
    // console.log(departDateRange)

    var obj = {
        departure: departure,
        destination: destination,
        departDateRange: departDateRange,
    };

    // fetch("/api", {
    //     method: 'POST', 
    //     headers: {
    //         'Content-Type': 'application/json' 
    //     },
    //     // convert the obj into json to send to the server
    //     body: JSON.stringify(obj) 
    // })

    
})

