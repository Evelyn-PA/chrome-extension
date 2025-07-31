//Import firebase to the project and set up the firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js"
import {
    getDatabase,
    ref, // this function used to create a reference for the database
    push, //add the data to DB
    onValue, //listen to the data in the database
    remove, //remove the data from the database
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js"

//Import environment variables from the config.js file
import { firebaseConfig } from "./config.js"

//Initialize the firebase app and get the database
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

//create reference for the database
const referenceInDB = ref(database, "myLeads")

console.log(firebaseConfig.databaseURL)

const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
let saveEl = document.querySelector("#save-el")
const deleteEl = document.querySelector("#delete-btn")

//When the delete button is clicked, the myLeads will be clear
deleteEl.addEventListener("dblclick", function () {
    remove(referenceInDB)
    ulEl.innerHTML = "" //Clear the unordered list
})

//Listen to the data in the database
onValue(referenceInDB, function (snapshot) {
    const snapshotExists = snapshot.exists() //Check if the data exists in the database
    if (snapshotExists) {
        const snapshotValues = snapshot.val() //Get the value of the data in the database
        const leads = Object.values(snapshotValues) //Convert the object to an array
        render(leads) //Render the data to the unordered list
    }
})
//When the button click, the input value is saved 
saveEl.addEventListener("click", function () {
    push(referenceInDB, inputEl.value) //Using push function to push  the value into the database
    //Clear the input field when the button is clicked
    inputEl.value = ""
})


function render(leads) {
    //Create a variable to store the list items
    let listItems = " "
    //Loop through the myLeads array
    for (let i = 0; i < leads.length; i++) {
        //Add each item to the listItems variable with a li HTML tag
        listItems += `
        <li> 
            <a target= "_blank" href = "${leads[i]}">
            ${leads[i]}
            </a>
        </li> `
    }
    //Render the list items to the unordered list
    ulEl.innerHTML = listItems
}


