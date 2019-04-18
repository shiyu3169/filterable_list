// Get user input
const filter = document.querySelector("#filter")

// filter out list depends on the user input
const filterNames = () => {
    // Get value of user input
    const value = filter.value;
    const names = document.querySelectorAll("li a");
    // Loop over names
    for(let name of names){
        // compare names
        if(name.innerText.toUpperCase().includes(value.toUpperCase())) {
            name.parentElement.style.display ="block"
        } else {
            name.parentElement.style.display ="none"
        }
    }
}

// Add event listner to listen user input
filter.addEventListener("keyup", filterNames)