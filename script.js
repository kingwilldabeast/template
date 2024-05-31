/*-------------------------------- Constants --------------------------------*/
const myArray = []
const myObject = {name: "Bill", age: 24, alive: true}

/*---------------------------- Variables (state) ----------------------------*/
let myNumber = 1
let myBoolean = true
let myString = "hello"


/*------------------------ Cached Element References ------------------------*/

const buttonElement = document.querySelector('#myButtonID')
const button = document.querySelector("#button1")
/*-------------------------------- Functions --------------------------------*/



function myFunction(myArgument) {
    return myArgument + 1
}

async function myAPIFunction() {

        let apiKey = '123456'
        let input = "Han Solo"
      
        let response = await axios.get(
            `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${input}&days=7&aqi=no&alerts=no`
        )

}


/*----------------------------- Event Listeners -----------------------------*/

buttonElement.addEventListener('click', myFunction)
document.addEventListener('DOMContentLoaded', myFunction)