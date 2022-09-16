
//Get the values from the interface
//Starts or controls function
function getValues(){
    //Get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;


    //Parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //Call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //Call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter integers");
    }

    
}

//Generate numbers from startValue to the endValue
//Logic function
function generateNumbers(sValue, eValue){
    //We want to get all numbers from start to end
    let numbers = [];

    for (let index = sValue; index <= eValue; index++) {
        //this will execute in a loop until index = eValue
        numbers.push(index);
    }

    return numbers;

}

//Display the numbers and mark the even numbers bold
//Display or view function
function displayNumbers(numbers){

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

        let className = "even";
        let number = numbers[index];

        if(number % 2 == 0) {
            className = "even";
        }
        else{
            className = "odd";
        }
        templateRows += `<tr><td class="${className}" >${number}</td></tr>`
    }

    document.getElementById("results").innerHTML = templateRows;

}