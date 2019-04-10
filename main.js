// Get user input
var filter = document.querySelector("#filter")


// Add event listner to listen user input
filter.addEventListener("keyup", filterNames)

// filter out list depends on the user input
function filterNames(){
    // Get value of user input
    var value = filter.value;

    // Get all names in list
    var names = document.querySelectorAll("li a");
    
    // Loop over names
    for(var i=0;i<names.length;i++){
        // compare names
        if(names[i].innerText.toUpperCase().includes(value.toUpperCase())) {
            names[i].parentElement.style.display ="block"
        } else {
            names[i].parentElement.style.display ="none"
        }
    }
}